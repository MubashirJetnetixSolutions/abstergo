'use client';
import {useState} from 'react';

const products = [
  {src:'/loomic/voltis-ultra-cable-cutout-v2.webp',name:'Loomic Voltis Power Ultra with integrated cable'},
  {src:'/loomic/headphones-cutout.webp',name:'Loomic headphones'},
  {src:'/loomic/chair-quarter-cutout.webp',name:'Loomic ergonomic chair'},
];

export default function LoomicProductSlider(){
  const [paused,setPaused]=useState(false);
  return <div className="loomic-slider-shell reveal">
    <div className={'loomic-product-preview'+(paused?' is-paused':'')} role="region" aria-label="Loomic essentials showcase">
      <div className="loomic-slider-track">
        {[0,1].map(copy=><div className="loomic-slider-group" key={copy} aria-hidden={copy===1?true:undefined}>
          {products.map(product=><div className="loomic-slider-item" key={product.src}><img src={product.src} alt={copy===0?product.name:''} loading="lazy" decoding="async"/></div>)}
        </div>)}
      </div>
    </div>
    <button type="button" className="loomic-slider-toggle" onClick={()=>setPaused(value=>!value)} aria-pressed={paused} aria-label={paused?'Play product animation':'Pause product animation'}><span aria-hidden="true">{paused?'▶':'Ⅱ'}</span>{paused?'Play':'Pause'}</button>
  </div>;
}
