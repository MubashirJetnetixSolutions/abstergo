'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {Check,ChevronDown} from 'lucide-react';
import styles from './ModernFormControls.module.css';

export function ModernSelect({name,label,value='',onChange,options,placeholder='Select an option',required=false,error=false}){
 const uid=useId(),root=useRef(null),trigger=useRef(null),list=useRef(null),[open,setOpen]=useState(false),[highlight,setHighlight]=useState(0),search=useRef(''),searchTimer=useRef(null);
 const choices=options.map(v=>typeof v==='string'?{value:v,label:v}:v);
 const selected=choices.find(v=>v.value===value);
 const close=()=>{setOpen(false);trigger.current?.focus()};
 const choose=i=>{const option=choices[i];if(option){onChange(option.value);close()}};
 useEffect(()=>{const outside=e=>{if(!root.current?.contains(e.target))setOpen(false)};document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('pointerdown',outside);clearTimeout(searchTimer.current)}},[]);
 useEffect(()=>{if(open)list.current?.querySelector('[data-highlighted="true"]')?.scrollIntoView({block:'nearest'})},[open,highlight]);
 const keys=e=>{
  if(e.key==='Tab'){setOpen(false);return}
  if(e.key==='Escape'){e.preventDefault();close();return}
  if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();if(!open){setOpen(true);setHighlight(Math.max(0,choices.findIndex(v=>v.value===value)));return}setHighlight(i=>e.key==='Home'?0:e.key==='End'?choices.length-1:(i+(e.key==='ArrowDown'?1:-1)+choices.length)%choices.length);return}
  if((e.key==='Enter'||e.key===' ')&&open){e.preventDefault();choose(highlight);return}
  if(e.key.length===1&&e.key!==' '){e.preventDefault();search.current+=e.key.toLowerCase();clearTimeout(searchTimer.current);searchTimer.current=setTimeout(()=>search.current='',600);const i=choices.findIndex(o=>o.label.toLowerCase().startsWith(search.current));if(i>=0){setOpen(true);setHighlight(i)}}
 };
 return <div ref={root} className={styles.field} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}}>
  <span id={uid+'-label'} className={styles.label}>{label}{required&&<span aria-hidden="true"> *</span>}</span>
  <input type="hidden" name={name} value={value}/>
  <button ref={trigger} type="button" data-field={name} role="combobox" aria-labelledby={uid+'-label'} aria-expanded={open} aria-controls={uid+'-list'} aria-haspopup="listbox" aria-required={required} aria-invalid={error||undefined} aria-describedby={error?uid+'-error':undefined} aria-activedescendant={open?uid+'-option-'+highlight:undefined} className={`${styles.trigger} ${open?styles.open:''} ${error?styles.invalid:''}`} onKeyDown={keys} onClick={()=>{setOpen(v=>!v);setHighlight(Math.max(0,choices.findIndex(v=>v.value===value)))}}><span className={!selected?styles.placeholder:''}>{selected?.label||placeholder}</span><ChevronDown size={17}/></button>
  {open&&<div ref={list} id={uid+'-list'} role="listbox" aria-labelledby={uid+'-label'} className={styles.menu}><div className={styles.menuCaption}>SELECT AN OPTION</div>{choices.map((o,i)=><div key={o.value} id={uid+'-option-'+i} role="option" aria-selected={value===o.value} data-highlighted={highlight===i} className={styles.option} onPointerDown={e=>e.preventDefault()} onPointerMove={()=>setHighlight(i)} onClick={()=>choose(i)}><span>{o.label}</span>{value===o.value?<Check size={15}/>:<span className={styles.optionDot}/>}</div>)}</div>}
  {error&&<span id={uid+'-error'} className={styles.error}>Please choose an option.</span>}
 </div>
}
export function PriorityChips({options}){
 const [selected,setSelected]=useState([]);
 return <div className={styles.chips}>{options.map(label=>{const active=selected.includes(label);return <div key={label} className={styles.chipWrap}>{active&&<input type="hidden" name={'priority_'+label.toLowerCase().replace(/ /g,'_')} value={label}/>}<button type="button" role="checkbox" aria-checked={active} className={`${styles.chip} ${active?styles.checked:''}`} onClick={()=>setSelected(v=>active?v.filter(x=>x!==label):[...v,label])}><span className={styles.checkMark}>{active&&<Check size={12} strokeWidth={3}/>}</span>{label}</button></div>})}</div>
}
