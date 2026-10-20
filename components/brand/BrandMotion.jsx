'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
export default function BrandMotion(){const path=usePathname();useEffect(()=>{
 const root=document.querySelector('.ab-page');if(!root||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 gsap.registerPlugin(ScrollTrigger);
 const lenis=new Lenis({duration:1.05,smoothWheel:true,syncTouch:false,anchors:{offset:-100}});
 const update=()=>ScrollTrigger.update();const tick=t=>lenis.raf(t*1000);lenis.on('scroll',update);gsap.ticker.add(tick);
 const ctx=gsap.context(()=>{
 root.querySelectorAll('[data-reveal]').forEach(el=>gsap.fromTo(el,{y:45,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',toggleActions:'play none none none'}}));
 root.querySelectorAll('[data-title]').forEach(el=>{const words=el.querySelectorAll('.ab-word');gsap.fromTo(words,{yPercent:115,rotationX:15},{yPercent:0,rotationX:0,stagger:.065,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 95%'}})});
 root.querySelectorAll('[data-parallax]').forEach(el=>gsap.fromTo(el,{yPercent:-5,scale:1.04},{yPercent:5,scale:1,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
 root.querySelectorAll('.ab-orbit').forEach(el=>gsap.to(el,{rotation:100,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
 },root);const refresh=()=>ScrollTrigger.refresh();window.addEventListener('load',refresh);document.fonts?.ready.then(refresh);
 return()=>{window.removeEventListener('load',refresh);ctx.revert();gsap.ticker.remove(tick);lenis.off('scroll',update);lenis.destroy()};
 },[path]);return null}
