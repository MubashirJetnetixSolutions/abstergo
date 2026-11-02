'use client';
import {useEffect,useRef,useState} from 'react';
import Link from '../NavigationLink';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ShieldCheck,CalendarClock,Wrench,Headphones,BookOpen,Package,ArrowUpRight,ArrowDown,Plus,Minus,Check,LifeBuoy} from 'lucide-react';
import BrandShell from './BrandShell';
import InquiryForm from './InquiryForm';
import {articles} from '../../lib/content/website';
import styles from './SupportExperience.module.css';

const services=[
 {title:'Warranty',icon:ShieldCheck,copy:'Start with your model, serial number and proof of purchase. Prepare a warranty check or claim for review.',actions:['Check warranty','Submit claim'],needs:'Model · Serial number · Purchase reference'},
 {title:'Preventive Maintenance',icon:CalendarClock,copy:'Plan care around the equipment you rely on. Tell us about your devices and preferred maintenance window.',actions:['Schedule maintenance'],needs:'Device count · Equipment details · Preferred date'},
 {title:'Repair',icon:Wrench,copy:'Tell us what happened and when it started. A diagnosis is the starting point for the right next step.',actions:['Request diagnosis'],needs:'Device model · Symptoms · When it started'},
 {title:'Technical Support',icon:Headphones,copy:'Get help with a hardware, configuration or setup question. Share your model and the steps you have already tried.',actions:['Talk to support'],needs:'Model · Software or setup · Issue details'},
 {title:'Product Help',icon:BookOpen,copy:'Find the right guidance for your exact product. Request a manual, ask a question or get help with setup.',actions:['Manuals','FAQs','Setup'],needs:'Product name · Model number · Guidance needed'},
 {title:'Order Support',icon:Package,copy:'Ask about an existing order. Include your order reference so the request can be matched to the right purchase.',actions:['Track order'],needs:'Order reference · Order email · Your question'}
];
const faqs=[
 ['What should I include in a warranty request?','Share the product model, serial number, purchase date and proof of purchase, along with a description of the issue. Eligibility needs to be reviewed against the terms that apply to your product.'],
 ['How do I prepare a device for a diagnosis?','Describe the symptoms and any recent changes. Back up your data before handing over equipment and ask the support team about the appropriate handover steps. Do not include passwords in your request.'],
 ['Where can I get a product manual or setup help?','Choose Product Help and provide the exact model number. This helps identify the relevant manual or setup instructions rather than guidance for a different product.'],
 ['What information is needed for an order update?','Provide the order reference and the email address used for the order. The Track order option prepares an order-support request; it does not display a live shipment status.']
];
export default function SupportExperience(){
 const root=useRef(null),[active,setActive]=useState(0),[faq,setFaq]=useState(0),[topic,setTopic]=useState('');
 useEffect(()=>{const service=new URLSearchParams(location.search).get('service');if(service){setTopic(service);const i=services.findIndex(s=>s.title.toLowerCase()===service.toLowerCase());if(i>=0)setActive(i)}},[]);
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{
 gsap.fromTo('[data-support-line]',{yPercent:110},{yPercent:0,stagger:.1,duration:1.15,ease:'power4.out'});
 gsap.fromTo('[data-support-world]',{scale:.8,opacity:0,rotation:-18},{scale:1,opacity:1,rotation:0,duration:1.5,ease:'power3.out'});
 gsap.to('[data-support-ring]',{rotation:70,ease:'none',scrollTrigger:{trigger:'.'+styles.hero,start:'top top',end:'bottom top',scrub:1.3}});
 gsap.fromTo('[data-support-row]',{y:30,opacity:0},{y:0,opacity:1,stagger:.08,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.'+styles.directory,start:'top 75%'}});
 },root);return()=>ctx.revert()},[]);
 const request=(action,index)=>{if(index===4&&action==='FAQs'){document.getElementById('support-faqs')?.scrollIntoView({behavior:'smooth'});return}setTopic(services[index].title+' — '+action);document.getElementById('inquiry')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
 const Icon=services[active].icon;
 return <BrandShell><div className={styles.page} ref={root}>
 <section className={styles.hero}><div className={styles.heroTop}><span><i/> ABSTERGO / SUPPORT</span><span>CARE THROUGHOUT THE LIFECYCLE.</span></div><div className={styles.heroGrid}><div><span className={styles.eyebrow}>SUPPORT BEYOND THE PURCHASE.</span><h1 aria-label="We're still here after the sale.">{["We’re still here",'after the sale.'].map((line,i)=><span className={styles.mask} key={line}><span data-support-line className={i?styles.accent:''}>{line}</span></span>)}</h1><p>Choose the support you need—from warranty and maintenance to product setup and order questions.</p><div className={styles.heroActions}><a className={styles.button} href="#support-options">How can we help? <ArrowDown size={17}/></a><a className={styles.textLink} href="#inquiry">Talk to support <ArrowUpRight size={16}/></a></div></div><div className={styles.supportWorld} data-support-world aria-hidden="true"><div className={styles.outerRing} data-support-ring><i/></div><div className={styles.innerRing}/><div className={styles.core}><LifeBuoy size={52} strokeWidth={1}/><span>HERE FOR<br/><strong>WHAT’S NEXT.</strong></span></div><span className={`${styles.worldNode} ${styles.nodeOne}`}><ShieldCheck size={21}/><small>WARRANTY</small></span><span className={`${styles.worldNode} ${styles.nodeTwo}`}><Wrench size={21}/><small>REPAIR</small></span><span className={`${styles.worldNode} ${styles.nodeThree}`}><Headphones size={21}/><small>GUIDANCE</small></span><span className={styles.worldCaption}>A CLEARER NEXT STEP.</span></div></div><div className={styles.heroFoot}><span>YOUR DEVICE. YOUR QUESTION. THE RIGHT STARTING POINT.</span><span>01 — 06 / SUPPORT OPTIONS</span></div></section>
 <section className={styles.directory} id="support-options"><div className={styles.directoryIntro}><span className={styles.eyebrow}>START WITH WHAT YOU NEED.</span><h2>What can we<br/>help you with<span>?</span></h2><p>Choose a support topic. We’ll help you prepare the right information.</p><div className={styles.activeVisual} aria-hidden="true"><span>0{active+1} / SUPPORT</span><div key={active}><Icon size={65} strokeWidth={1}/></div><p>{services[active].title}</p></div></div><div className={styles.serviceRows}>{services.map((s,i)=>{const ItemIcon=s.icon;return <article key={s.title} className={active===i?styles.activeService:''} data-support-row><h3><button type="button" onClick={()=>setActive(i)} aria-expanded={active===i} aria-controls={'support-detail-'+i}><span className={styles.rowNumber}>0{i+1}</span><ItemIcon size={20}/><span>{s.title}</span>{active===i?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div id={'support-detail-'+i} className={styles.serviceBody} hidden={active!==i}><p>{s.copy}</p><small>HAVE READY / {s.needs}</small><div className={styles.serviceActions}>{s.actions.map(action=><button key={action} className={styles.smallButton} onClick={()=>request(action,i)}>{action}<ArrowUpRight size={15}/></button>)}</div></div></article>})}</div></section>
 <section className={styles.knowledge}><div className={styles.knowledgeIntro}><div><span className={styles.eyebrow}>KNOWLEDGE / ADVICE / UNDERSTANDING</span><h2>Abstergo<br/><span>Insights.</span></h2></div><div><p>Better questions.<br/>More informed technology decisions.</p><Link className={styles.button} href="/insights">Explore the advice <ArrowUpRight size={17}/></Link></div></div><div className={styles.insightLinks}>{articles.slice(0,3).map((a,i)=><Link href={'/insights/'+a.slug} key={a.slug} data-reveal><span>0{i+1} / {a.category}</span><h3>{a.title}</h3><span>Read the guidance <ArrowUpRight size={18}/></span></Link>)}</div></section>
 <section className={styles.faqs} id="support-faqs"><div><span className={styles.eyebrow}>A LITTLE CLARITY.</span><h2>Before you<br/>reach out<span>.</span></h2></div><div>{faqs.map(([question,answer],i)=><article key={question}><h3><button type="button" aria-expanded={faq===i} aria-controls={'support-faq-'+i} onClick={()=>setFaq(faq===i?-1:i)}>{question}{faq===i?<Minus size={17}/>:<Plus size={17}/>}</button></h3><p id={'support-faq-'+i} hidden={faq!==i}>{answer}</p></article>)}</div></section>
 <div className={styles.inquiry}><InquiryForm support selectedService={topic}/></div>
 </div></BrandShell>
}
