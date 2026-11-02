'use client';

import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowDown,ArrowUpRight,Plus,Minus,Compass,Lightbulb,Sparkles,Users} from 'lucide-react';
import BrandShell from './BrandShell';
import styles from './AboutExperience.module.css';
import AboutHero from './AboutHero';

const dna=[
 ['Advice','Start with the need. Choose intelligently.',Compass],
 ['Innovation','Open new possibilities through technology.',Lightbulb],
 ['Accessible excellence','High-end technology, shaped around real needs.',Sparkles],
 ['Human-centered technology','People first. Technology with purpose.',Users]
];
const values=['Expertise','Trust','Innovation','Service','Performance'];
function Statement({children}){return <p className={styles.statement}>{children.split(' ').map((word,i)=><span data-about-word key={i}>{word}{' '}</span>)}</p>}
export default function AboutExperience(){
 const root=useRef(null),[active,setActive]=useState(0);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   gsap.fromTo('[data-about-band]',{xPercent:-12},{xPercent:2,ease:'none',scrollTrigger:{trigger:'.'+styles.band,start:'top bottom',end:'bottom top',scrub:1.4}});
   root.current.querySelectorAll('[data-about-statement]').forEach(el=>{const dark=el.dataset.aboutStatement==='dark';gsap.fromTo(el.querySelectorAll('[data-about-word]'),{color:dark?'#4f5055':'#c4c4c8'},{color:dark?'#ffffff':'#111214',stagger:.1,ease:'none',scrollTrigger:{trigger:el,start:'top 78%',end:'bottom 48%',scrub:.65}});gsap.fromTo(el.querySelector('[data-about-rule]'),{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:el,start:'top 85%',end:'top 40%',scrub:1}})});
   gsap.fromTo('[data-dna-row]',{y:35,opacity:0},{y:0,opacity:1,stagger:.1,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.'+styles.dnaRows,start:'top 85%'}});
   root.current.querySelectorAll('[data-value-row]').forEach((row,i)=>{gsap.fromTo(row.querySelector('[data-value-text]'),{x:innerWidth<700?-15:-40,opacity:.2},{x:0,opacity:1,ease:'none',scrollTrigger:{trigger:row,start:'top 88%',end:'top 55%',scrub:.6}});gsap.fromTo(row.querySelector('[data-value-rule]'),{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:row,start:'top 90%',end:'top 50%',scrub:.8}})});
  },root);
  return()=>ctx.revert();
 },[]);
 const ActiveIcon=dna[active][2];
 return <BrandShell><div className={styles.page} ref={root}>
  <AboutHero/>
  <div className={styles.band} aria-hidden="true"><div data-about-band>CHOSEN INTELLIGENTLY <i>✳</i> BUILT AROUND YOU <i>✳</i> CHOSEN INTELLIGENTLY <i>✳</i></div></div>
  <section id="about-mission" className={styles.purpose} aria-label="Our mission and vision"><article className={styles.mission} data-about-statement="dark"><div className={styles.purposeTop}><span>01 / OUR PURPOSE</span><ArrowUpRight size={20}/></div><div className={styles.purposeGrid}><h2>Our{' '}<br/>Mission<span>.</span></h2><div><Statement>Democratize access to high-end technology through expertise, advice and innovation.</Statement><span className={styles.rule}><i data-about-rule/></span><small>EXPERTISE OPENS POSSIBILITIES.</small></div></div><span className={styles.purposeGhost} aria-hidden="true">MISSION</span></article><article className={styles.vision} data-about-statement="light"><div className={styles.purposeTop}><span>02 / OUR DIRECTION</span><ArrowUpRight size={20}/></div><div className={styles.purposeGrid}><h2>Our{' '}<br/>Vision<span>.</span></h2><div><Statement>Premium technology experiences built around useful, reliable and lasting solutions.</Statement><span className={styles.rule}><i data-about-rule/></span><small>USEFUL. RELIABLE. LASTING.</small></div></div><span className={styles.purposeGhost} aria-hidden="true">VISION</span></article></section>
  <section className={styles.dna} id="about-dna"><div className={styles.dnaIntro}><span className={styles.eyebrow}>THE WAY WE THINK.</span><h2>Our DNA<span>.</span></h2><p>Four principles.<br/>One considered approach.</p><div className={styles.dnaSymbol} aria-hidden="true"><div/><span key={active}><ActiveIcon size={45} strokeWidth={1}/></span><i>0{active+1} / 04</i></div></div><div className={styles.dnaRows}>{dna.map(([title,copy,Icon],i)=><article className={active===i?styles.activeDna:''} key={title} data-dna-row><h3><button type="button" aria-expanded={active===i} aria-controls={'about-dna-'+i} onClick={()=>setActive(i)}><span>0{i+1}</span><span>{title}</span>{active===i?<Minus size={20}/>:<Plus size={20}/>}</button></h3><div id={'about-dna-'+i} className={styles.dnaDetail} hidden={active!==i}><Icon size={20}/><p>{copy}</p></div></article>)}</div></section>
  <section className={styles.values} id="about-values"><div className={styles.valuesTop}><div><span className={styles.eyebrow}>WHAT WE STAND FOR.</span><h2>Our Values<span>.</span></h2></div><p>At the heart of every<br/>technology decision.</p></div><div className={styles.valueRows}>{values.map((value,i)=><article key={value} data-value-row><span className={styles.valueNumber}>0{i+1}</span><h3 data-value-text>{value}<span>.</span></h3><ArrowUpRight size={27}/><i data-value-rule/></article>)}</div><div className={styles.valuesBottom}><span>ABSTERGO TECHNOLOGY</span><span>ADVICE / INNOVATION / PERFORMANCE</span></div></section>
 </div></BrandShell>
}
