'use client';
import {useEffect,useRef} from 'react';
// A small native WebGL light field: no scene graph or external 3D runtime.
export default function LoomicField(){const ref=useRef(null);useEffect(()=>{
 const canvas=ref.current;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const vertex='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
 const fragment=`precision mediump float;uniform vec2 resolution;uniform float time;uniform float progress;uniform vec2 pointer;
 void main(){vec2 uv=gl_FragCoord.xy/resolution;vec2 q=(uv-.5)*vec2(resolution.x/resolution.y,1.);q+=pointer*.035;
 float t=time*.16+progress*2.;float light=0.;float rings=0.;
 for(int i=0;i<7;i++){float f=float(i);float line=q.y+.2*sin(q.x*2.2+t+f*.15)+f*.035-.06;light+=.0018/(abs(line)+.008);}
 vec2 r=q-vec2(.35,.06);float d=length(r*vec2(.75,1.));rings=.003/(abs(d-.3-.04*sin(t))+.012);float glow=exp(-dot(r,r)*3.);
 vec3 col=vec3(.13,.32,.65)*light+vec3(.4,.22,.7)*rings+vec3(.04,.12,.24)*glow;
 float grid=(1.-smoothstep(.0,.012,abs(fract(uv.x*32.)-.5)))*(1.-smoothstep(.0,.03,abs(fract(uv.y*20.)-.5)));
 col+=grid*.1;gl_FragColor=vec4(col,.9);}`;
 const compile=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);return null}return s};
 const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
 const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
 const locations=Object.fromEntries(['resolution','time','progress','pointer'].map(n=>[n,gl.getUniformLocation(program,n)]));let frame,active=false,last=0,mx=0,my=0;
 const resize=()=>{const r=canvas.getBoundingClientRect();canvas.width=Math.round(r.width*Math.min(devicePixelRatio,1.25));canvas.height=Math.round(r.height*Math.min(devicePixelRatio,1.25));gl.viewport(0,0,canvas.width,canvas.height)};
 const move=e=>{const r=canvas.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5};
 const draw=now=>{if(!active||document.hidden){frame=null;return}frame=requestAnimationFrame(draw);if(now-last<32)return;last=now;const r=canvas.getBoundingClientRect();gl.uniform2f(locations.resolution,canvas.width,canvas.height);gl.uniform1f(locations.time,now/1000);gl.uniform1f(locations.progress,Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight+r.height))));gl.uniform2f(locations.pointer,mx,my);gl.drawArrays(gl.TRIANGLES,0,6)};
 const start=()=>{if(active&&!document.hidden&&!frame)frame=requestAnimationFrame(draw)};const observer=new IntersectionObserver(es=>{active=es[0].isIntersecting;start()});observer.observe(canvas);const ro=new ResizeObserver(resize);ro.observe(canvas);canvas.parentElement.addEventListener('pointermove',move);document.addEventListener('visibilitychange',start);resize();return()=>{cancelAnimationFrame(frame);observer.disconnect();ro.disconnect();canvas.parentElement?.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',start);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs)};
 },[]);return <canvas ref={ref} className="lm-webgl-field" aria-hidden="true"/>}
