'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoomicSound from './LoomicSound';
import './site-enhancements.css';

const blankIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3C/svg%3E";

export default function SiteEnhancements() {
  const pathname = usePathname();
  const isLoomic = pathname === '/loomic' || pathname?.startsWith('/loomic/');

  useEffect(() => {
    // Keep the icon correct on both direct visits and client-side navigation.
    const syncIcon = () => {
      let icon = document.getElementById('site-route-favicon');
      if (!icon) {
        icon = document.createElement('link');
        icon.id = 'site-route-favicon';
        icon.rel = 'icon';
        document.head.appendChild(icon);
      }
      const href = isLoomic ? blankIcon : '/abstergo-favicon.png';
      const type = isLoomic ? 'image/svg+xml' : 'image/png';
      if (icon.getAttribute('href') !== href) icon.setAttribute('href', href);
      if (icon.type !== type) icon.type = type;
      document.querySelectorAll('link[rel~="icon"],link[rel="apple-touch-icon"]').forEach(link => {
        if (link !== icon && link.id !== 'site-touch-icon') link.remove();
      });
      let touch = document.getElementById('site-touch-icon');
      if (isLoomic) touch?.remove();
      else if (!touch) {
        touch = document.createElement('link');
        touch.id = 'site-touch-icon';
        touch.rel = 'apple-touch-icon';
        touch.href = '/abstergo-favicon.png';
        document.head.appendChild(touch);
      }
    };
    syncIcon();
    const observer = new MutationObserver(syncIcon);
    observer.observe(document.head, { childList: true, attributes: true, subtree: true, attributeFilter: ['href', 'rel', 'type'] });
    return () => observer.disconnect();
  }, [isLoomic]);

  useEffect(() => {
    const header = document.querySelector('.store-nav');
    if (!header) return;
    const measure = () => document.documentElement.style.setProperty('--store-header-height', `${header.getBoundingClientRect().height}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => { observer.disconnect(); document.documentElement.style.removeProperty('--store-header-height'); };
  }, [pathname]);

  return isLoomic ? <LoomicSound /> : null;
}
