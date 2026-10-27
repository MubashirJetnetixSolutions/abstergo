'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {ArrowDown,ArrowUpRight} from 'lucide-react';
import LoomicLogo from './LoomicLogo';
import LoomicPortal from './LoomicPortal';
import './loomic-hero.css';
const products=[
['VOLTIS POWER ULTRA','Our best seller. Your daily power.','voltis-ultra-cable-cutout-v2.webp','mobile-power',-3,-29,-14,15],
['VOLTIS POWER PRO','Ready for anywhere.','voltis-pro-duo-cutout-v3.webp','voltis',24,-24,-7,20],
['140W DISPLAY','Power, in focus.','charger-140-2.webp','charging',33,4,5,28],
['ERGONA','Performance starts with comfort.','chair-quarter-cutout.webp','comfort',-32,2,5,26],
['PRECISION PRO','Built around your performance.','precision-pro-3.webp','precision-pro',-20,27,-12,28],
['PULSE M','Hear what matters.','pulse-m-3.webp','pulse-m',-28,-27,12,18],
['VOLTIS CABLE','Power without interruption.','cable-black-coil.webp','power',22,34,-9,18]
];
const clamp=v=>Math.min(1,Math.max(0,v));const mix=(a,b,t)=>a+(b-a)*t;const ease=v=>{v=clamp(v);return v*v*(3-2*v)};
export default function LoomicHero(){const sectionRef=useRef(null),stageRef=useRef(null);useEffect(()=>{
 const section=sectionRef.current,stage=stageRef.current,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const cards=[...stage.querySelectorAll('.lh-product')].map(card=>({card,visual:card.querySelector('.lh-product-float'),info:card.querySelector('.lh-product-info'),ready:false,fade:0}));
 const logo=stage.querySelector('.lh-logo'),opening=stage.querySelector('.lh-opening'),chapter=stage.querySelector('.lh-chapter-title'),final=stage.querySelector('.lh-finale'),chrome=stage.querySelector('.lh-chrome'),film=stage.querySelector('video'),meter=stage.querySelector('.lh-progress i'),phaseLabel=stage.querySelector('.lh-phase-current'),paths=[...stage.querySelectorAll('.lh-connection')],phaseSteps=[...stage.querySelectorAll('.lh-phase-step')];
 const initial=[[32,4,-12,30],[32,-13,9,24],[-29,-25,-8,16],[35,22,6,26],[-30,-12,-9,30],[28,-29,10,17],[5,31,-6,15]];
 let raf,active=true,progress=0,target=0,mx=0,my=0,tx=0,ty=0,last=0,lastSeek=0,mobile=innerWidth<760,width=innerWidth,height=innerHeight,phase=-1,pathProgress=-1;
 const measure=()=>{const r=section.getBoundingClientRect();target=clamp(-r.top/Math.max(1,section.offsetHeight-innerHeight));mobile=innerWidth<760;width=innerWidth;height=stage.clientHeight};
 measure();progress=target;
 const render=t=>{if(!active||document.hidden){raf=null;last=0;return}raf=requestAnimationFrame(render);
 const dt=last?Math.min(50,t-last):16.67;last=t;const follow=1-Math.exp(-dt/115),pointerFollow=1-Math.exp(-dt/165);
 progress=reduced?1:mix(progress,target,follow);mx=mix(mx,tx,pointerFollow);my=mix(my,ty,pointerFollow);
 stage.style.setProperty('--logo-beat-play',progress<.035&&!reduced?'running':'paused');stage.dataset.progress=progress;stage.dataset.mx=mx;stage.dataset.my=my;
 const dive=ease(progress/.32),spread=ease((progress-.2)/.35),line=ease((progress-.64)/.31),pointerStrength=1-line,connection=ease((progress-.29)/.2)*(1-ease((progress-.64)/.14));
 stage.style.setProperty('--dive',dive);stage.style.setProperty('--line',line);stage.style.setProperty('--mx',mx);stage.style.setProperty('--my',my);stage.style.setProperty('--connection',connection);
 logo.style.transform=`translate3d(0%,${-dive*24}%,0) scale(${1+dive*.35})`;logo.style.opacity=1-ease((progress-.08)/.15);logo.style.visibility=progress>.25?'hidden':'visible';
 opening.style.opacity=1-ease(progress/.2);opening.style.transform=`translate3d(0,${-dive*70}px,0)`;
 chapter.style.opacity=ease((progress-.28)/.15)*(1-ease((progress-.68)/.12));chapter.style.transform=`translate3d(0,${(1-spread)*40-line*35}px,0)`;
 final.style.opacity=ease((progress-.76)/.15);final.style.transform=`translate3d(0,${(1-line)*35}px,0)`;
 chrome.style.transform=`translate3d(${mx*9}px,${my*8}px,0) scale(${mix(1,1.5,dive)-line*.5})`;chrome.style.opacity=1-line*.85;meter.style.transform=`scaleX(${progress})`;
 const nextPhase=progress<.25?0:progress<.72?1:2;if(nextPhase!==phase){phase=nextPhase;phaseLabel.textContent=['01 / ARRIVE','02 / CONNECT','03 / DISCOVER'][phase];phaseSteps.forEach((step,i)=>step.classList.toggle('is-active',i===phase));}
 cards.forEach((asset,i)=>{const {card,visual,info}=asset;asset.fade=reduced?1:mix(asset.fade,asset.ready?1:0,follow);const [,,,,ox,oy,rotation,size]=products[i];
 // Fixed orbit slots and a separate collection phase prevent paths crossing.
 const collection=progress>=.685;
 const endX=i<4?(i-1.5)*22:(i-5)*24,endY=i<4?-4:26;
 const orbitX=i===4?-25:ox,orbitY=i===4?35:oy;
 const x=mobile||collection?endX:orbitX,y=mobile||collection?endY:orbitY;
 const heightCaps=[.23,.20,.17,.27,.23,.18,.20];
 const orbitWidth=Math.min(width*size/100,height*heightCaps[i]);
 const gridWidth=Math.min(width*(mobile?.19:.145),height*(mobile?.18:.205));
 const imageWidth=mobile||collection?gridWidth:orbitWidth,w=imageWidth/width*100;
 const appear=ease((progress-.18-i*.018)/.15),transition=mobile?1:progress<.685?1-ease((progress-.57)/.105):ease((progress-.705)/.105);
 const settle=ease((progress-.705)/.15),float=reduced?0:Math.sin(t*.0005+i)*2*(1-settle),px=mobile?0:mx*4*(1-settle),py=mobile?0:my*3*(1-settle);
 const angle=mobile||collection?0:Math.max(-4,Math.min(4,rotation));
 card.style.opacity=appear*transition*asset.fade;card.style.visibility=appear*transition>.001?'visible':'hidden';
 card.style.transform=`translate3d(calc(-50% + ${x}vw + ${px}px),calc(-50% + ${y*height/100}px + ${(1-appear)*20+float+py}px),0) rotate(${angle}deg)`;
 visual.style.transform=`scale(${w/30})`;info.style.opacity=mobile?appear:collection?settle:0;info.style.transform=`translate3d(0,${imageWidth/2+10}px,0)`;

 if(paths[i]&&Math.abs(progress-pathProgress)>.0002){const sx=50+x,sy=49+y;paths[i].setAttribute('d',`M 50 49 Q ${50+x*.4-y*.18} ${49+y*.35+x*.12} ${sx} ${sy}`);paths[i].style.strokeDashoffset=1-ease((progress-.28-i*.012)/.2);}
 });
 if(Math.abs(progress-pathProgress)>.0002)pathProgress=progress;
 if(reduced){cancelAnimationFrame(raf);raf=null}
 // Seeking at a bounded cadence keeps video decoding out of the animation's critical path.
 if(!reduced&&t-lastSeek>100&&film.readyState>=2&&Number.isFinite(film.duration)&&!film.seeking){const time=progress*(film.duration-.06);if(Math.abs(film.currentTime-time)>.12){film.currentTime=time;lastSeek=t}}
 };
 const start=()=>{if(active&&!document.hidden&&!raf)raf=requestAnimationFrame(render)};
 const move=e=>{if(e.pointerType==='touch')return;tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2};const leave=()=>{tx=0;ty=0};
 const io=new IntersectionObserver(es=>{active=es[0].isIntersecting;measure();start()},{rootMargin:'50px'});io.observe(section);
 stage.addEventListener('pointermove',move,{passive:true});stage.addEventListener('pointerleave',leave);addEventListener('scroll',measure,{passive:true});addEventListener('resize',measure);document.addEventListener('visibilitychange',start);start();
 cards.forEach(asset=>{const img=asset.visual.querySelector('img');if(img.decode)img.decode().then(()=>{asset.ready=true}).catch(()=>{asset.ready=true});else asset.ready=true});
 return()=>{cancelAnimationFrame(raf);io.disconnect();stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerleave',leave);removeEventListener('scroll',measure);removeEventListener('resize',measure);document.removeEventListener('visibilitychange',start)};

 },[]);
 const enter=()=>{const section=sectionRef.current;const top=section.getBoundingClientRect().top+window.scrollY+(section.offsetHeight-innerHeight)*.52;if(matchMedia('(prefers-reduced-motion: reduce)').matches)window.scrollTo({top,behavior:'instant'});else window.dispatchEvent(new CustomEvent('loomic:scroll-to',{detail:top}))};
 return <section className="lh-hero" ref={sectionRef} aria-label="Enter the Loomic world"><div className="lh-stage" ref={stageRef}>
 <video className="lh-film" src="/loomic/essentials-scroll.mp4" muted playsInline preload="auto" aria-hidden="true"/><div className="lh-aurora"/><div className="lh-grid"/><LoomicPortal stageRef={stageRef}/><div className="lh-orbit-path"/>
 <div className="lh-topline"><span><i/> LOOMIC / INFINITE INNOVATION</span><span className="lh-phase-current">01 / ARRIVE</span></div>
 <div className="lh-logo"><div className="lh-logo-beat"><LoomicLogo/></div></div>
 <div className="lh-opening"><div className="lh-headline"><h1>Infinite <em>Innovation.</em></h1></div><div className="lh-invitation"><p>Essentials engineered<br/>for modern performance.</p><button onClick={enter}>Enter our world <ArrowUpRight size={18}/></button></div></div>
 <div className="lh-chapter-title"><span>THE LOOMIC ECOSYSTEM</span><h2>One<br className="lh-desktop-break"/><em> ecosystem.</em></h2></div>
 <svg className="lh-constellation" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="lh-signal"><stop stopColor="#6B6B6F" stopOpacity=".1"/><stop offset="1" stopColor="#6B6B6F" stopOpacity=".55"/></linearGradient></defs>{products.map((_,i)=><path key={i} className="lh-connection" pathLength="1" d="M50 49L50 49"/>)}</svg><div className="lh-products">{products.map(([name,line,image,href],i)=><Link href={'#'+href} className={'lh-product lh-product-'+i} key={name} aria-label={'Explore '+name}><div className="lh-product-float"><img src={'/loomic/'+image} alt={name} decoding="async"/><span className="lh-hover-label">{name} <ArrowUpRight size={12}/></span></div><div className="lh-product-info"><small>0{i+1} / {name}</small><span>{line}</span></div></Link>)}</div>
 <div className="lh-finale"><span>THE WORLD OF LOOMIC</span><h2>Find your <em>essential.</em></h2><a href="#loomic-ecosystem">Explore the ecosystem <ArrowDown size={15}/></a></div>
 <div className="lh-bottom"><span>POWER / SOUND / PRECISION / COMFORT / MOBILITY</span><div className="lh-scroll-cue"><div className="lh-scroll-pill"><i/></div><span>SCROLL TO DISCOVER</span></div><span className="lh-coordinate">DESIGNED AROUND YOU <i>↗</i></span></div><div className="lh-phase-steps" aria-hidden="true"><span className="lh-phase-step is-active">01 <b>ARRIVE</b></span><i/><span className="lh-phase-step">02 <b>CONNECT</b></span><i/><span className="lh-phase-step">03 <b>DISCOVER</b></span></div><div className="lh-progress"><i/></div>
 </div></section>
}
