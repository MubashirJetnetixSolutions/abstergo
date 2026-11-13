'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import styles from './assembly-hero.module.css';

const parts = [
  { key: 'cpu', label: 'Processor', x: 31, y: 32, w: 12, h: 15, dx: -285, dy: -75 },
  { key: 'ram', label: 'Memory', x: 44.5, y: 32, w: 8, h: 20, dx: 295, dy: -75 },
  { key: 'gpu', label: 'Graphics', x: 41, y: 54, w: 38, h: 16, dx: -290, dy: 65 },
  { key: 'storage', label: 'Storage', x: 48, y: 69, w: 20, h: 8, dx: 280, dy: 95 },
  { key: 'cooling', label: 'Cooling', x: 17, y: 30, w: 11, h: 15, dx: -235, dy: 205 },
];

export default function AssemblyHero() {
  const root = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const select = gsap.utils.selector(root.current);
      gsap.from(select('[data-title]'), { yPercent: 105, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out' });
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: .65, invalidateOnRefresh: true },
      });
      parts.forEach((part, index) => {
        const node = select('[data-part="' + part.key + '"]')[0];
        timeline.fromTo(node, {
          x: () => part.dx * Math.min(1, window.innerWidth / 1100),
          y: () => part.dy * Math.min(1, window.innerWidth / 1100),
          scale: () => window.innerWidth < 600 ? 1.45 : 1.9, rotation: index % 2 ? 9 : -9,
        }, { x: 0, y: 0, scale: 1, rotation: 0, duration: .65, ease: 'power3.inOut' }, .08 + index * .17);
        timeline.to(node.querySelector('[data-label]'), { opacity: 0, duration: .16 }, .12 + index * .17);
      });
      timeline.to(select('[data-prompt]'), { opacity: 0, y: -10, duration: .2 }, .15)
        .fromTo(select('[data-ready]'), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: .2 }, 1.4)
        .to(select('[data-glow]'), { opacity: .85, scale: 1.1, duration: .3 }, 1.15)
        .to(select('[data-progress]'), { scaleX: 1, duration: 1.6, ease: 'none' }, 0)
        .to(select('[data-title]'), { y: -8, opacity: .7, duration: .5 }, .9);
    }, root.current);
    return () => media.revert();
  }, []);
  return <section ref={root} className={styles.hero} aria-label="Build your workstation">
    <div className={styles.scene}>
      <header className={styles.heading}>
        <img src="/logo-white.png" alt="Abstergo Technology" />
        <p>ABSTERGO CUSTOM WORKSTATIONS</p>
        <h1><span data-title>Your vision.</span> <em data-title>Built to perform.</em></h1>
      </header>
      <div className={styles.stage}>
        <div className={styles.floor} aria-hidden="true" />
        <div className={styles.glow} data-glow aria-hidden="true" />
        <div className={styles.case}>
          <img className={styles.chassis} src="/workstation/open-chassis.webp" alt="Open workstation case" fetchPriority="high" />
          {parts.map(part => <div key={part.key} className={styles.part} data-part={part.key}
            style={{ left: part.x + '%', top: part.y + '%', width: part.w + '%', height: part.h + '%' }}>
            <img src={'/workstation/parts/' + part.key + '.webp'} alt={part.label} />
            <span data-label>{part.label}</span>
          </div>)}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.progress} aria-hidden="true"><span data-progress /></div>
        <div className={styles.caption}>
          <p data-prompt><span className={styles.scrollIcon}><ArrowDown size={16}/></span> Scroll to bring your workstation to life</p>
          <p data-ready className={styles.ready}>Your components. One powerful workstation.</p>
        </div>
        <a href="#configure">Configure your workstation <ArrowDown size={17}/></a>
      </footer>
    </div>
  </section>;
}
