'use client';
import {useEffect,useRef} from 'react';
import Link from '../NavigationLink';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowUpRight,ArrowDown,MessagesSquare,Building2,LifeBuoy,Phone,MessageCircle,Mail,Clock,MapPin} from 'lucide-react';
import BrandShell from './BrandShell';
import InquiryForm from './InquiryForm';
import styles from './ContactExperience.module.css';
const paths=[{title:'I want technology advice',copy:'Talk with an Abstergo Advisor.',cta:'Start consultation',href:'#inquiry',icon:MessagesSquare,tag:'FOR YOUR NEXT MOVE'},{title:'I represent a business',copy:'Request equipment / quotation / partnership.',cta:'Talk to B2B',href:'/business#inquiry',icon:Building2,tag:'FOR YOUR ORGANIZATION'},{title:'I need support',copy:'Warranty / maintenance / repair.',cta:'Get support',href:'/support',icon:LifeBuoy,tag:'BEYOND THE PURCHASE'}];
export default function ContactExperience(){
 const root=useRef(null);
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{
 gsap.fromTo('[data-contact-line]',{yPercent:115},{yPercent:0,duration:1.2,stagger:.12,ease:'power4.out'});
 gsap.fromTo('[data-contact-object]',{opacity:0,scale:.85,rotation:-12},{opacity:1,scale:1,rotation:0,duration:1.4,ease:'power3.out'});
 gsap.to('[data-contact-orbit]',{rotation:65,ease:'none',scrollTrigger:{trigger:'.'+styles.hero,start:'top top',end:'bottom top',scrub:1.4}});
 gsap.fromTo('[data-contact-card]',{opacity:0,y:55},{opacity:1,y:0,stagger:.12,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.'+styles.paths,start:'top 80%'}});
 },root);return()=>ctx.revert()},[]);
 return <BrandShell><div className={styles.page} ref={root}>
 <section className={styles.hero}><div className={styles.topline}><span><i/> ABSTERGO / LET’S TALK</span><span>THE RIGHT TECHNOLOGY STARTS WITH A CONVERSATION.</span></div><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>YOUR NEEDS. OUR STARTING POINT.</span><h1>{["Let’s find",'the right','solution.'].map((s,i)=><span className={styles.mask} key={s}><span data-contact-line className={i===2?styles.accent:''}>{s}</span></span>)}</h1><p>Advice for your next device. Technology for your business. Support for what comes next.</p><a href="#contact-paths" className={styles.button}>Find your starting point <ArrowDown size={17}/></a></div><div className={styles.visual} data-contact-object aria-hidden="true"><div className={styles.orbit} data-contact-orbit><span/><span/></div><div className={styles.disc}><span className={styles.discLabel}>A DIFFERENT KIND OF CONVERSATION</span><MessagesSquare size={72} strokeWidth={1}/><strong>It starts<br/>with you<span>.</span></strong><small>LISTEN → UNDERSTAND → RECOMMEND</small></div><div className={styles.floatLabel}>YOUR GOALS <ArrowUpRight size={15}/></div><div className={styles.floatLabelTwo}>THE RIGHT DIRECTION <span>↗</span></div></div></div><div className={styles.heroFoot}><span>TECHNOLOGY. GUIDANCE. PERFORMANCE.</span><span>01 / CHOOSE YOUR PATH <ArrowDown size={13}/></span></div></section>
 <section className={styles.paths} id="contact-paths"><div className={styles.sectionIntro}><span className={styles.eyebrow}>THREE PATHS. ONE CLEAR START.</span><h2>What brings<br/>you here<span>?</span></h2></div><div className={styles.cards}>{paths.map((p,i)=>{const Icon=p.icon;return <Link href={p.href} className={styles.card} key={p.title} data-contact-card><div className={styles.cardTop}><span>0{i+1}</span><Icon size={26} strokeWidth={1.3}/></div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.copy}</p><span className={styles.cardCta}>{p.cta}<span><ArrowUpRight size={19}/></span></span></Link>})}</div></section>
 <section className={styles.bridge}><span className={styles.eyebrow}>A BETTER BRIEF. A BETTER RECOMMENDATION.</span><h2 data-reveal>Start with what<br/><span>matters to you.</span></h2><div className={styles.steps}><span>01 / YOUR NEED</span><i/><span>02 / YOUR PRIORITIES</span><i/><span>03 / YOUR TIMELINE</span></div><p>Your goals, budget and working environment help shape a more useful conversation.</p></section>
 <div className={styles.formWrap}><InquiryForm/></div>
 <section className={styles.details}><div><span className={styles.eyebrow}>THE HUMAN SIDE OF TECHNOLOGY.</span><h2>Let’s connect<span>.</span></h2><p>Direct contact and showroom details will be available here once confirmed by Abstergo.</p></div><dl>{[[Phone,'Phone'],[MessageCircle,'WhatsApp'],[Mail,'Email'],[Clock,'Opening hours'],[MapPin,'Showroom location']].map(([Icon,label])=><div key={label}><dt><Icon size={17}/>{label}</dt><dd>Details to be confirmed</dd></div>)}</dl></section>
 </div></BrandShell>
}
