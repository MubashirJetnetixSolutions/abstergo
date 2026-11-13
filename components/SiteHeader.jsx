'use client';
import {useEffect,useState} from 'react';
import Link from './NavigationLink';
import {usePathname} from 'next/navigation';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import styles from './SiteHeader.module.css';
const links=[['/','Home'],['/about','About'],['/business','Business'],['/loomic','Loomic'],['/xperience','Abstergo Xperience'],['/insights','Insights'],['/contact','Contact']];
export default function SiteHeader(){
 const path=usePathname(),[open,setOpen]=useState(false);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[]);
 return <header className={styles.header}><Link href="/" className={styles.logo} aria-label="Abstergo home"><img src="/logo.png" alt="Abstergo Technology"/></Link><nav className={`${styles.navigation} ${open?styles.open:''}`} aria-label="Main navigation" id="site-navigation">{links.map(([href,label],i)=><Link href={href} className={styles.link} key={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}><span className={styles.roll}><span>{label}</span><span aria-hidden="true">{label}</span></span><span className={styles.linkIndex} aria-hidden="true">0{i+1}</span></Link>)}</nav><div className={styles.actions}><Link href="/build-your-workstation" className={styles.cta} aria-current={path==='/build-your-workstation'?'page':undefined} onClick={()=>setOpen(false)}><span className={styles.roll}><span>Build Your Workstation</span><span aria-hidden="true">Build Your Workstation</span></span><ArrowUpRight size={14} aria-hidden="true"/></Link><button className={styles.toggle} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button></div></header>
}
