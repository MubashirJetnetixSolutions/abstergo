'use client';

import {useEffect} from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

export default function LoomicSmoothScroll() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};

    const configure = () => {
      dispose();
      dispose = () => {};
      if (preference.matches) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        anchors: {offset: -100},
        prevent: () => document.documentElement.classList.contains('site-is-loading'),
      });
      const update = () => ScrollTrigger.update();
      const tick = time => lenis.raf(time * 1000);
      const scrollTo = event => lenis.scrollTo(event.detail, {duration: 1.2});
      lenis.on('scroll', update);
      gsap.ticker.add(tick);
      window.addEventListener('loomic:scroll-to', scrollTo);
      dispose = () => {
        window.removeEventListener('loomic:scroll-to', scrollTo);
        gsap.ticker.remove(tick);
        lenis.off('scroll', update);
        lenis.destroy();
      };
    };

    configure();
    preference.addEventListener('change', configure);
    return () => {
      preference.removeEventListener('change', configure);
      dispose();
    };
  }, []);
  return null;
}
