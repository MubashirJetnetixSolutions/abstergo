'use client';
import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowDown,ArrowUpRight,Plus} from 'lucide-react';
import styles from './AboutHero.module.css';

export default function AboutHero(){
 const root=useRef(null);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   const q=gsap.utils.selector(root),mobile=innerWidth<701;
   gsap.fromTo(q('[data-belief-line]'),{yPercent:115,opacity:0},{yPercent:0,opacity:1,stagger:.11,duration:1.2,ease:'power4.out',delay:.1});
   gsap.fromTo(q('[data-brand-sculpture]'),{y:60,rotationY:-30,rotationZ:-15,opacity:0},{y:0,rotationY:-15,rotationZ:-8,opacity:1,duration:1.6,ease:'power3.out',delay:.2});
   const timeline=gsap.timeline({scrollTrigger:{trigger:root.current,start:'top top',end:'bottom bottom',scrub:1.25}});
   timeline.to(q('[data-opening-belief]'),{yPercent:-16,opacity:0,scale:.96,duration:.35,ease:'power2.in'},.08)
    .to(q('[data-brand-sculpture]'),{rotationY:22,rotationZ:7,yPercent:mobile?12:0,xPercent:mobile?5:-5,scale:mobile?.86:1.12,duration:.9,ease:'power2.inOut'},0)
    .to(q('[data-layer-back]'),{z:-90,xPercent:-12,yPercent:-6,duration:.6},.1)
    .to(q('[data-layer-orange]'),{z:-30,xPercent:13,yPercent:8,duration:.6},.1)
    .fromTo(q('[data-next-copy]'),{opacity:0},{opacity:1,duration:.15},.4)
    .fromTo(q('[data-next-line]'),{yPercent:110},{yPercent:0,stagger:.08,duration:.35,ease:'power3.out'},.4)
    .to(q('[data-perspective-grid]'),{rotation:-8,scale:1.1,xPercent:-4,duration:1,ease:'none'},0)
    .fromTo(q('[data-hero-ghost]'),{xPercent:12,opacity:0},{xPercent:-8,opacity:1,duration:1,ease:'none'},0)
    .to(q('[data-about-progress]'),{scaleX:1,duration:1,ease:'none'},0);
  },root);
  return()=>ctx.revert();
 },[]);
 return <section ref={root} className={styles.sequence} aria-label="We believe technology should be chosen intelligently">
  <div className={styles.stage}>
   <div className={styles.perspectiveGrid} data-perspective-grid aria-hidden="true"/>
   <div className={styles.topline}><span><i/> ABOUT ABSTERGO</span><span>AN INTELLIGENT PERSPECTIVE.</span></div>
   <div className={styles.opening} data-opening-belief><span className={styles.eyebrow}>IT STARTS WITH A BELIEF.</span><h1 aria-label="We believe technology should be chosen intelligently.">{['We believe','technology should','be chosen','intelligently.'].map((line,i)=><span className={styles.mask} key={line}><span data-belief-line className={i===3?styles.accent:''}>{line}</span></span>)}</h1><span className={styles.copyFoot}><Plus size={12}/> TECHNOLOGY, WITH THE RIGHT REASONS.</span></div>
   <div className={styles.nextCopy} data-next-copy aria-hidden="true"><span className={styles.eyebrow}>MORE THAN A DEVICE. A DIFFERENT APPROACH.</span><h2>{['Technology.','Guidance.','Performance.'].map((line,i)=><span className={styles.mask} key={line}><span data-next-line className={i===1?styles.accent:''}>{line}</span></span>)}</h2><p>Expertise opens possibilities.</p></div>
   <div className={styles.artwork} aria-hidden="true"><span className={styles.artIndex}>A / NEW PERSPECTIVE</span><div className={styles.sculpture} data-brand-sculpture><div className={styles.backLayer} data-layer-back><span>EXPERTISE</span><i/></div><div className={styles.orangeLayer} data-layer-orange><span>ADVICE / INNOVATION</span><Plus size={19}/></div><div className={styles.frontLayer}><div className={styles.cardGrid}/><div className={styles.artCrossOne}/><div className={styles.artCrossTwo}/><span className={styles.cardTop}>CHOSEN INTELLIGENTLY.</span><img src="/brand/abstergo-a.svg" alt=""/><div className={styles.cardBottom}><span>ABSTERGO<br/>TECHNOLOGY</span><ArrowUpRight size={22}/></div></div></div><div className={styles.shadow}/><span className={styles.artCaption}>A CLEARER POINT OF VIEW.<br/>A MORE CONSIDERED CHOICE.</span></div>
   <span className={styles.ghost} data-hero-ghost aria-hidden="true">PERSPECTIVE</span>
   <div className={styles.bottom}><div><span>OUR BELIEF, IN MOTION</span><p>Expertise, advice and innovation.<br/>A more considered technology experience.</p></div><a href="#about-mission">DISCOVER WHAT DRIVES US <span><ArrowDown size={18}/></span></a></div>
   <div className={styles.progress}><i data-about-progress/></div>
  </div>
 </section>
}
