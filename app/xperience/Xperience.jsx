'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, CalendarDays, Clapperboard, Compass, History, Handshake, Headphones, MapPin, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SiteHeader from '../../components/SiteHeader';
import Link from '../../components/NavigationLink';
import { events, eventVisuals, journey, promises, worlds } from './content';
import styles from './xperience.module.css';

const eventIcons = [History, CalendarDays, Clapperboard];
const promiseIcons = [ShieldCheck, Compass, Headphones, Handshake];

function Heading({ lines }) {
  return <h2 className={styles.heading}>{lines.map(line => <span key={line}><span data-x-line>{line}</span></span>)}</h2>;
}

function WorldShowcase() {
  const [active, setActive] = useState(0);
  const world = worlds[active];

  return <section className={`${styles.section} ${styles.worldSection}`} id="worlds">
    <Heading lines={['Explore Our Worlds.']} />
    <div className={styles.worldShowcase} data-x-reveal>
      <div className={styles.worldSelector} role="group" aria-label="Choose a technology world">
        {worlds.map(({ name, image, tone }, index) => <button
          type="button"
          key={name}
          aria-pressed={index === active}
          aria-controls="world-showcase"
          onClick={() => setActive(index)}
        >
          <span className={styles.worldOrdinal} aria-hidden="true">0{index + 1}</span>
          <span className={styles.worldPreview} data-tone={tone} aria-hidden="true">
            <img src={image} alt="" loading="lazy" />
          </span>
          <span>{name}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>)}
      </div>
      <div id="world-showcase" className={styles.worldPanel} data-tone={world.tone} aria-live="polite">
        <article className={styles.worldStage} key={world.name}>
          <div
            className={styles.worldVisual}
            onPointerMove={(event) => {
              if (event.pointerType !== 'mouse') return;
              const stage = event.currentTarget;
              const bounds = stage.getBoundingClientRect();
              stage.style.setProperty('--product-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 20}px`);
              stage.style.setProperty('--product-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 14}px`);
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.removeProperty('--product-x');
              event.currentTarget.style.removeProperty('--product-y');
            }}
          >
            <div className={styles.worldProduct}>
              <img src={world.image} alt={world.alt} loading="lazy" />
            </div>
          </div>
          <div className={styles.worldCopy}>
            <div>
              <h3>{world.name} <span>Xperience</span></h3>
              <p><strong>{world.line}</strong></p>
              <p>{world.copy}</p>
            </div>
            <Link href={world.href} className={styles.worldLink}>Explore {world.name} <ArrowUpRight size={17}/></Link>
          </div>
        </article>
      </div>
    </div>
  </section>;
}

export default function Xperience() {
  const root = useRef(null);
  const [event, setEvent] = useState(0);
  const eventVisual = eventVisuals[event];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();
    motion.add({ animated: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 900px) and (min-height: 680px)' }, ({ conditions }) => {
      if (!conditions.animated) return;
      const select = gsap.utils.selector(root.current);
      const hero = select('[data-x-hero]')[0];
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from(select('[data-x-intro]'), { y: 16, opacity: 0, stagger: .13, duration: .7, clearProps: 'transform,opacity' }, 0)
        .from(select('[data-x-wordmark]'), { clipPath: 'inset(0 100% 0 0)', duration: .85, clearProps: 'clipPath' }, .12)
        .from(select('[data-x-hero-line]'), { yPercent: 112, duration: .95, stagger: .13, clearProps: 'transform' }, .22);
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero, start: 'top top', end: conditions.desktop ? '+=55%' : 'bottom top',
          pin: conditions.desktop, anticipatePin: 1, scrub: .55,
        },
      })
        .to(select('[data-x-scene]'), { yPercent: 18, scale: 1.14 }, 0)
        .to(select('[data-x-foreground]'), { y: -32 }, 0)
        .to(select('[data-x-mark]'), { rotation: 0, scale: 1.22, opacity: .44 }, 0)
        .to(select('[data-x-verb]'), { color: '#ff916d', stagger: .17, duration: .22 }, .2)
        .to(select('[data-x-accent]'), { '--x-sweep': '0%', duration: .47 }, 0)
        .to(select('[data-x-scroll-fill]'), { scaleX: 1 }, 0);
      select('[data-x-line], [data-x-reveal]').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        gsap.from(element, {
          y: element.hasAttribute('data-x-line') ? '105%' : 34, opacity: 0, duration: .85,
          ease: 'power3.out', clearProps: 'transform,opacity',
          scrollTrigger: { trigger: element.parentElement, start: 'top 92%', once: true },
        });
      });
      gsap.to(select('[data-x-progress]'), {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: select('[data-x-journey]')[0], start: 'top 75%', end: 'bottom 55%', scrub: true },
      });
    }, root.current);
    return () => motion.revert();
  }, []);

  return <>
    <SiteHeader />
    <main className={styles.page} ref={root} id="xperience-top">
      <section className={styles.hero} data-x-hero>
        <div className={styles.scene} aria-hidden="true" data-x-scene>
          <img className={styles.heroPhoto} src="/xperience/client/showroom.webp" alt="" fetchPriority="high" />
          <div className={styles.grid} />
          <div className={styles.ring} />
          <img className={styles.mark} src="/xperience/mark.svg" alt="" data-x-mark />
        </div>
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy} data-x-foreground>
            <p className={styles.kicker} data-x-intro><i /> Abstergo Technology presents</p>
            <h1><img data-x-wordmark src="/xperience/wordmark.svg" width="2279" height="283" alt="Abstergo Xperience" fetchPriority="high" /></h1>
            <p className={styles.signature}>
              <span><span data-x-hero-line>Technology is meant to</span></span>{' '}
              <span><span className={styles.accent} data-x-hero-line data-x-accent>be experienced.</span></span>
            </p>
            <p className={styles.tagline} data-x-intro><span data-x-verb>Discover.</span>{' '}<span data-x-verb>Experience.</span>{' '}<span data-x-verb>Go Beyond.</span></p>
            <div className={styles.actions} data-x-intro>
              <a className={styles.button} href="#philosophy">Explore the Experience <ArrowDown size={17}/></a>
              <a className={styles.outline} href="#worlds">Discover Our Worlds <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </div>
        <a href="#philosophy" className={styles.scroll} aria-label="Scroll to the philosophy">
          <ArrowDown size={15}/><span>Scroll to explore</span>
          <span className={styles.scrollTrack} aria-hidden="true"><i data-x-scroll-fill /></span>
        </a>
      </section>

      <section id="philosophy" className={styles.light}>
        <div className={styles.philosophy}>
          <div><p className={styles.kicker}><i /> Our Philosophy</p><Heading lines={['The right technology', 'changes everything.']} /></div>
          <div className={styles.body} data-x-reveal>
            <p className={styles.lead}>But finding it takes more than browsing specifications.</p>
            <p>At Abstergo, we believe technology should empower ambitions, unlock potential, and elevate everyday experiences.</p>
            <p>That’s why we’ve created Abstergo Xperience — a place where innovation meets discovery, expert guidance, and hands-on exploration.</p>
            <p><strong>Because buying the right technology is only the beginning.</strong></p>
          </div>
        </div>
      </section>

      <WorldShowcase />

      <section className={styles.light} id="journey">
        <div className={styles.journey} data-x-journey>
          <div className={styles.journeyIntro}>
            <p className={styles.kicker}><i /> The Xperience Journey</p>
            <Heading lines={['Every step.', 'A better experience.']} />
            <p className={styles.lead}>Your journey doesn’t end at checkout. It’s just getting started.</p>
          </div>
          <div className={styles.stepTrack}><ol className={styles.steps}>
            {journey.map(([name, title, copy], i) => <li key={name} data-x-reveal>
              <span className={styles.stepNumber}>0{i+1}</span>
              <div><p className={styles.kicker}>{name}</p><h3>{title}</h3><p>{copy}</p></div>
            </li>)}
          </ol><span className={styles.progress} aria-hidden="true" data-x-progress /></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.liveSection}`} id="live">
        <div className={styles.liveIntro}>
          <div>
            <p className={styles.kicker}><i /> Xperience Live</p>
            <Heading lines={['Innovation', 'Comes Alive.']} />
          </div>
          <div className={styles.liveDescription} data-x-reveal>
            <p className={styles.lead}>Great technology deserves to be shared.</p>
            <p>Join Abstergo Xperience Live for exclusive product launches, interactive demonstrations, gaming experiences, expert sessions, and unforgettable moments.</p>
          </div>
        </div>
        <div className={styles.liveLayout} data-x-reveal>
          <figure className={styles.liveVisual}>
            <img key={eventVisual.image} src={eventVisual.image} alt={eventVisual.alt} loading="lazy" />
            <figcaption>Discover what’s new. Meet fellow tech enthusiasts.<br />Experience innovation like never before.
              <small>{eventVisual.source
                ? <a href={eventVisual.source} target="_blank" rel="noreferrer">{eventVisual.credit} <ArrowUpRight size={13} aria-hidden="true" /></a>
                : eventVisual.credit}</small>
            </figcaption>
          </figure>
          <div className={styles.liveProgram}>
            <div className={styles.eventButtons} role="group" aria-label="Explore Xperience Live">
              {events.map(([name], index) => {
                const Icon = eventIcons[index];
                return <button type="button" key={name} aria-pressed={index === event} aria-controls="xperience-event" onClick={() => setEvent(index)}>
                  <Icon size={19} aria-hidden="true" />
                  <span>{name}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>;
              })}
            </div>
            <div className={styles.eventPanel} id="xperience-event" aria-live="polite">
              <div key={event}>
                <h3>{events[event][0]}</h3>
                <p>{events[event][1]}</p>
                {eventVisual.contact && <Link href="/contact">Ask about events <ArrowUpRight size={16} /></Link>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.light} id="promise">
        <div className={styles.section}>
          <p className={styles.kicker}><i /> The Abstergo Promise</p>
          <Heading lines={['The right technology.', 'The right advice.']} />
          <p className={styles.lead}>More than products. A commitment to your experience.</p>
          <div className={styles.promises}>
            {promises.map(([title, copy], i) => { const Icon = promiseIcons[i]; return <article key={title} data-x-reveal><Icon size={26} strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article>; })}
          </div>
        </div>
      </section>

      <section className={styles.section} id="stories">
        <div className={styles.stories}>
          <div>
            <p className={styles.kicker}><i /> Xperience Stories</p>
            <Heading lines={['Real People.', 'Real Experiences.']} />
            <p className={styles.lead}>Behind every device, there’s an ambition.</p>
            <p>Discover how entrepreneurs, professionals, students, creators, and gamers are making more possible with the right technology.</p>
            <Link className={styles.outline} href="/contact">Share your Xperience <ArrowUpRight size={17}/></Link>
          </div>
          <img src="/xperience/stories.webp" alt="Laptop and technology accessories arranged on a workspace" loading="lazy" data-x-reveal/>
        </div>
      </section>

      <section className={styles.visit} id="showroom">
        <img src="/xperience/mark.svg" alt="" aria-hidden="true" />
        <div>
          <p className={styles.kicker}><i /> Your Xperience Starts Here</p>
          <Heading lines={['Experience the difference.']} />
          <p>Visit our showroom and discover what the right technology can truly do for you.</p>
          <Link href="/contact" className={styles.button}>Visit Our Showroom <ArrowUpRight size={17}/></Link>
          <p className={styles.location}><MapPin size={15}/> Abstergo Technology — Ouagadougou, Burkina Faso</p>
        </div>
      </section>
      <footer className={styles.footer}><Link href="/" aria-label="Abstergo Technology home"><img src="/xperience/wordmark.svg" alt="Abstergo Xperience"/></Link><a href="#xperience-top">Back to top ↑</a></footer>
    </main>
  </>;
}
