'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export default function BusinessMotion(){useEffect(()=>{
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 gsap.registerPlugin(ScrollTrigger);
 const root=document.querySelector('.biz-root');if(!root)return;
 const cleanups=[];
 const ctx=gsap.context(()=>{
  // hero intro
  const intro=gsap.timeline({defaults:{ease:'power4.out'}});
  intro.from('.bz-top>*',{y:-20,opacity:0,duration:.8,stagger:.1})
   .from('.bz-line>span',{yPercent:115,rotation:4,duration:1.25,stagger:.12},.1)
   .from('.bz-lead,.bz-actions,.bz-rotator',{y:30,opacity:0,duration:.9,stagger:.12},.55)
   .from('.bz-ring',{scale:.4,opacity:0,duration:1.6,stagger:.15},.2)
   .from('.bz-device-main',{x:120,y:60,rotation:-8,opacity:0,scale:.85,duration:1.6},.35)
   .from('.bz-device-back',{x:80,y:-40,rotation:10,opacity:0,duration:1.5},.5)
   .from('.bz-tile',{y:50,scale:.6,opacity:0,duration:1,stagger:.12,ease:'back.out(1.6)'},.9)
   .from('.bz-giant',{x:-160,opacity:0,duration:2,ease:'power2.out'},.2)
   .from('.bz-bottom',{opacity:0,y:20,duration:.8},1.2);
  // hero scroll scrub (yPercent so it never fights the intro's x/y)
  const hs={trigger:'.bz-hero',start:'top top',end:'bottom top',scrub:1};
  gsap.to('.bz-copy',{yPercent:-18,opacity:.15,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-device-main',{yPercent:-22,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-device-back',{yPercent:-60,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-tile-fleet',{yPercent:-110,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-tile-infra',{yPercent:-80,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-tile-deploy',{yPercent:-150,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-tile-storage',{yPercent:-200,ease:'none',scrollTrigger:hs});
  gsap.to('.bz-giant',{xPercent:-22,ease:'none',scrollTrigger:hs});
  // scroll progress bar
  gsap.to('.biz-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.3}});
  // staggered grids
  [['.biz-pillars .ab-path-card','.biz-pillars .ab-three-grid'],['.biz-card','#categories .ab-four-grid'],['.biz-challenges>a','.biz-challenges'],['.biz-proof li','.biz-proof ul'],['.biz-stat','.biz-stats']].forEach(([items,trigger])=>{
   gsap.from(items,{y:70,opacity:0,scale:.95,duration:.9,ease:'power3.out',stagger:.09,scrollTrigger:{trigger,start:'top 85%'}});
  });
  // counters
  gsap.utils.toArray('.biz-count').forEach(el=>{const end=+el.dataset.to,o={v:0};gsap.to(o,{v:end,duration:1.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%'},onUpdate:()=>{el.textContent=Math.round(o.v)}})});
  // marquee driven by scroll velocity
  gsap.utils.toArray('.biz-marquee-track').forEach((el,i)=>gsap.to(el,{xPercent:i%2?8:-18,ease:'none',scrollTrigger:{trigger:'.biz-marquee',start:'top bottom',end:'bottom top',scrub:1}}));
  // pillar icons float
  gsap.utils.toArray('.biz-pillars .ab-path-card>svg').forEach(el=>gsap.to(el,{y:-8,rotation:8,duration:2.2,ease:'sine.inOut',yoyo:true,repeat:-1}));
  // dark section background parallax glow
  gsap.utils.toArray('.biz-glow').forEach(el=>gsap.to(el,{yPercent:-40,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
  // proof title scrub colour
  gsap.fromTo('.biz-proof .ab-title',{opacity:.25},{opacity:1,ease:'none',scrollTrigger:{trigger:'.biz-proof',start:'top 75%',end:'top 35%',scrub:1}});
 },root);
 // spotlight follow cursor on cards + magnetic buttons
 const cards=[...root.querySelectorAll('.biz-card,.ab-path-card')];
 cards.forEach(c=>{const m=e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')};c.addEventListener('pointermove',m);cleanups.push(()=>c.removeEventListener('pointermove',m))});
 if(matchMedia('(hover:hover)').matches)root.querySelectorAll('.bz-btn').forEach(b=>{
  const mv=e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.4,duration:.4})};
  const lv=()=>gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.5)'});
  b.addEventListener('pointermove',mv);b.addEventListener('pointerleave',lv);cleanups.push(()=>{b.removeEventListener('pointermove',mv);b.removeEventListener('pointerleave',lv)});
 });
 const hero=root.querySelector('.bz-hero');
 if(hero&&matchMedia('(hover:hover)').matches){
  const layers=[...hero.querySelectorAll('[data-depth]')];let raf=0,tx=0,ty=0,cx=0,cy=0;
  const loop=()=>{cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;layers.forEach(l=>{const d=+l.dataset.depth;l.style.translate=`${cx*d*22}px ${cy*d*16}px`});raf=Math.abs(tx-cx)+Math.abs(ty-cy)>.001?requestAnimationFrame(loop):0};
  const mv=e=>{const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;if(!raf)raf=requestAnimationFrame(loop)};
  const lv=()=>{tx=0;ty=0;if(!raf)raf=requestAnimationFrame(loop)};
  hero.addEventListener('pointermove',mv);hero.addEventListener('pointerleave',lv);
  cleanups.push(()=>{hero.removeEventListener('pointermove',mv);hero.removeEventListener('pointerleave',lv);cancelAnimationFrame(raf)});
 }
 const t=setTimeout(()=>ScrollTrigger.refresh(),400);
 return()=>{clearTimeout(t);cleanups.forEach(f=>f());ctx.revert()};
},[]);return null}
