'use client';
import {useEffect,useState} from 'react';
import Link from './NavigationLink';
import {usePathname} from 'next/navigation';
import {Search,ShoppingBag,Menu,X,ArrowUpRight} from 'lucide-react';
import styles from './SiteHeader.module.css';
const links=[['/','Home'],['/about','About'],['/business','Business'],['/loomic','Loomic'],['/insights','Insights'],['/contact','Contact']];
export default function SiteHeader({onSearch,onCart,cartCount}){
 const path=usePathname(),[open,setOpen]=useState(false),[savedCount,setSavedCount]=useState(0);
 useEffect(()=>{setOpen(false);try{setSavedCount(JSON.parse(localStorage.getItem('abstergo-cart-v1')||'[]').reduce((n,p)=>n+(Number(p.quantity)||0),0))}catch{}},[path]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[]);
 const count=cartCount??savedCount;
 return <header className={styles.header}><Link href="/" className={styles.logo} aria-label="Abstergo home"><img src="/logo.png" alt="Abstergo Technology"/></Link><nav className={`${styles.navigation} ${open?styles.open:''}`} aria-label="Main navigation" id="site-navigation">{links.map(([href,label],i)=><Link href={href} className={styles.link} key={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}><span className={styles.roll}><span>{label}</span><span aria-hidden="true">{label}</span></span><span className={styles.linkIndex} aria-hidden="true">0{i+1}</span></Link>)}</nav><div className={styles.actions}>{onSearch?<button className={styles.icon} onClick={onSearch} aria-label="Search laptops"><Search size={19}/></button>:<Link className={styles.icon} href="/shop" aria-label="Search laptops"><Search size={19}/></Link>}{onCart?<button className={styles.icon} onClick={onCart} aria-label={'Your selection, '+count+' items'}><ShoppingBag size={19}/>{count>0&&<i>{count}</i>}</button>:<Link className={styles.icon} href="/cart" aria-label={'Your selection, '+count+' items'}><ShoppingBag size={19}/>{count>0&&<i>{count}</i>}</Link>}<Link href="/contact" className={styles.cta}><span>Talk to an Advisor</span><ArrowUpRight size={14}/></Link><button className={styles.toggle} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button></div></header>
}
