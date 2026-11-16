'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import styles from './FeatureVideo.module.css';

export default function FeatureVideo({ id, label, title, description, source, poster, theme }) {
  const section = useRef(null);
  const video = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const select = gsap.utils.selector(section.current);
      gsap.from(select('[data-film-line]'), {
        yPercent: 65, opacity: .3, stagger: .13, duration: .85, ease: 'power3.out',
        scrollTrigger: { trigger: select('h2')[0], start: 'top 90%', once: true },
      });
      gsap.fromTo(select('[data-film-frame]'), { scale: .94, clipPath: 'inset(0 3% round 10px)' }, {
        scale: 1, clipPath: 'inset(0 0% round 10px)', ease: 'none',
        scrollTrigger: { trigger: select('[data-film-frame]')[0], start: 'top 95%', end: 'top 39%', scrub: .5 },
      });
    }, section.current);
    return () => media.revert();
  }, []);

  function playFilm() {
    setStarted(true);
    video.current.play().catch(() => {});
    requestAnimationFrame(() => video.current?.focus({ preventScroll: true }));
  }

  return (
    <section id={id} ref={section} className={styles.section} data-theme={theme}
      aria-labelledby={id + '-title'}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>{label}</p>
          <h2 id={id + '-title'}>{title.map(line => (
            <span className={styles.line} key={line}><span data-film-line>{line}</span></span>
          ))}</h2>
        </div>
        <p className={styles.description}>{description}</p>
      </header>
      <div className={styles.frame} data-film-frame>
        <video ref={video} className={styles.player} controls={started} playsInline preload="none"
          poster={poster} aria-labelledby={id + '-title'} tabIndex={started ? 0 : -1}>
          <source src={source} type="video/mp4" />
          <a href={source}>Download the video</a>
        </video>
        {!started && <button className={styles.play} onClick={playFilm} type="button">
          <Play size={19} fill="currentColor" aria-hidden="true" /> Play showcase
        </button>}
      </div>
    </section>
  );
}
