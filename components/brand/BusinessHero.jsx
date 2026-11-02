'use client';

import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowDown,ArrowUpRight,Plus} from 'lucide-react';
import styles from './BusinessHero.module.css';

export default function BusinessHero(){
 const root=useRef(null);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   const q=gsap.utils.selector(root);
   const mobile=innerWidth<701;
   gsap.fromTo(q('[data-intro-line]'),{yPercent:105,opacity:0},{yPercent:0,opacity:1,stagger:.11,duration:1.2,ease:'power4.out',delay:.1});
   gsap.fromTo(q('[data-main-device]'),{y:75,opacity:0,rotationX:12},{y:0,opacity:1,rotationX:0,duration:1.5,ease:'power3.out',delay:.25});
   const timeline=gsap.timeline({scrollTrigger:{trigger:root.current,start:'top top',end:'bottom bottom',scrub:1.35}});
   timeline.to(q('[data-opening]'),{y:-95,scale:.93,opacity:0,duration:.32,ease:'power2.in'},.06)
    .to(q('[data-stage]'),{backgroundColor:'#111214',color:'#ffffff',duration:.38,ease:'none'},.12)
    .to(q('[data-grid]'),{opacity:.32,scale:1.16,rotation:9,duration:.7},0)
    .to(q('[data-main-device]'),{xPercent:mobile?-30:-57,yPercent:9,scale:mobile?.6:.82,rotation:-9,duration:.55,ease:'power2.inOut'},.12)
    .fromTo(q('[data-second-device]'),{xPercent:58,yPercent:35,scale:.6,rotation:15,opacity:0},{xPercent:0,yPercent:0,scale:1,rotation:5,opacity:1,duration:.48,ease:'power2.out'},.23)
    .fromTo(q('[data-power-device]'),{yPercent:65,scale:.75,rotation:-12,opacity:0},{yPercent:0,scale:1,rotation:-5,opacity:1,duration:.44,ease:'power2.out'},.35)
    .fromTo(q('[data-connected-line]'),{yPercent:110},{yPercent:0,stagger:.08,duration:.35,ease:'power3.out'},.3)
    .fromTo(q('[data-connected]'),{opacity:0},{opacity:1,duration:.15},.3)
    .fromTo(q('[data-connection]'),{strokeDashoffset:1},{strokeDashoffset:0,duration:.5,ease:'none'},.3)
    .fromTo(q('[data-scene-label]'),{y:15,opacity:0},{y:0,opacity:1,stagger:.07,duration:.2},.52)
    .fromTo(q('[data-ghost]'),{scale:.8,opacity:0},{scale:1.05,opacity:1,duration:.6,ease:'none'},.23)
    .to(q('[data-progress]'),{scaleX:1,duration:1,ease:'none'},0)
    .to(q('[data-hint]'),{opacity:0,duration:.15},.05)
    .to(q('[data-footer-copy]'),{color:'#adadb2',duration:.35},.15);
  },root);
  return()=>ctx.revert();
 },[]);
 return <section ref={root} className={styles.sequence} aria-label="Technology built around your business">
  <div className={styles.stage} data-stage>
   <div className={styles.grid} data-grid aria-hidden="true"/>
   <div className={styles.orbit} aria-hidden="true"/>
   <div className={styles.topline}><span><i/> ABSTERGO / FOR BUSINESS</span><span>YOUR AMBITION. OUR STARTING POINT.</span></div>
   <div className={styles.opening} data-opening><span className={styles.kicker}>A DIFFERENT APPROACH TO BUSINESS TECHNOLOGY</span><h1 aria-label="Technology built around your business.">{['Technology','built around','your business.'].map((line,i)=><span className={styles.lineMask} key={line}><span data-intro-line className={i===2?styles.accent:''}>{line}</span></span>)}</h1></div>
   <div className={styles.connected} data-connected aria-hidden="true"><span>ONE CONNECTED APPROACH.</span><h2>{['Your people.','Your systems.','Your next move.'].map((line,i)=><span className={styles.lineMask} key={line}><span data-connected-line className={i===2?styles.accent:''}>{line}</span></span>)}</h2></div>
   <span className={styles.ghost} data-ghost aria-hidden="true">BUSINESS</span>
   <svg className={styles.connections} viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><path data-connection pathLength="1" d="M180 280 C300 390 470 150 590 240 S800 400 850 220"/><path data-connection pathLength="1" d="M230 300 Q500 500 760 270"/></svg>
   <div className={styles.deviceWorld}>
    <div className={styles.mainDevice} data-main-device><img src="/products/x1-carbon-gen13.png" alt="Lenovo ThinkPad business laptop" fetchPriority="high"/></div>
    <div className={styles.secondDevice} data-second-device><img src="/products/dell-precision-7680-cutout.png" alt="Dell Precision professional workstation"/></div>
    <div className={styles.powerDevice} data-power-device><img src="/loomic/charger-140-2.webp" alt="Loomic 140W display charger"/></div>
    <span className={`${styles.sceneLabel} ${styles.peopleLabel}`} data-scene-label><Plus size={13}/> PEOPLE / EMPLOYEE COMPUTING</span>
    <span className={`${styles.sceneLabel} ${styles.systemLabel}`} data-scene-label><Plus size={13}/> PERFORMANCE / WORKSTATIONS</span>
    <span className={`${styles.sceneLabel} ${styles.powerLabel}`} data-scene-label><Plus size={13}/> EVERYDAY / LOOMIC</span>
   </div>
   <div className={styles.footer}><p data-footer-copy>From employee devices to infrastructure, Abstergo helps organizations choose, deploy and maintain technology that supports performance.</p><a className={styles.cta} href="#challenges">Find my business solution <span><ArrowUpRight size={19}/></span></a></div>
   <div className={styles.bottom}><span data-hint>SCROLL TO CONNECT THE POSSIBILITIES <ArrowDown size={12}/></span><a href="#inquiry">TALK TO A B2B ADVISOR <ArrowUpRight size={13}/></a></div>
   <div className={styles.progress}><i data-progress/></div>
  </div>
 </section>
}
