'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Box, BrainCircuit, Building2, Check, CircuitBoard, Copy, Gamepad2, ScanLine, Sparkles, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SiteHeader from '../../components/SiteHeader';
import { ModernSelect } from '../../components/brand/ModernFormControls';
import styles from './workstation.module.css';
import PCBuilder from './PCBuilder';
import AssemblyHero from './AssemblyHero';

const purposes = [
  ['Architecture & Engineering', 'CAD, BIM, simulations and complex 3D models.', Building2],
  ['Content Creation & 3D Rendering', '4K/8K editing, animation, VFX and rendering.', Box],
  ['AI & Data Science', 'Machine learning, local AI, data analysis and development.', BrainCircuit],
  ['Gaming & Streaming', 'High frame rates, streaming, gaming and multitasking.', Gamepad2],
  ['Other / General Professional Use', 'Tell us what you need the machine to do.', CircuitBoard],
];
const buildDetails = [
  ['Cooling', 'Choose quiet airflow or liquid cooling for sustained workloads.'],
  ['Graphics', 'Match the GPU to your rendering, AI or gaming workload.'],
  ['Expansion', 'Plan memory and storage around the projects you’ll take on next.'],
];
const recommend = 'Expert recommendation';
const components = [
  ['cpu', 'Processor (CPU)', ['Intel Core Ultra 9', 'Intel Core Ultra 7', 'AMD Ryzen 9', 'AMD Ryzen Threadripper']],
  ['gpu', 'Graphics card (GPU)', ['NVIDIA RTX 5080', 'NVIDIA RTX 5070', 'NVIDIA RTX 5090', 'NVIDIA RTX PRO']],
  ['ram', 'Memory (RAM)', ['32 GB', '64 GB', '128 GB', '256 GB']],
  ['storage', 'Storage', ['1 TB NVMe SSD', '2 TB NVMe SSD', '4 TB NVMe SSD', 'Multiple drives']],
  ['cooling', 'Cooling and build', ['Professional / Quiet', 'High Performance / Liquid Cooling', 'Let Abstergo decide']],
];
const budgets = ['Under 1,000,000 FCFA', '1,000,000 – 2,000,000 FCFA', '2,000,000 – 3,000,000 FCFA', '3,000,000 – 5,000,000 FCFA', 'Over 5,000,000 FCFA', 'Help me set a budget'];
const steps = [
  ['Consultation', 'We review your requirements and recommend the right components.', '/xperience/client/store-demo.webp'],
  ['Precision Assembly', 'Your system is carefully assembled with attention to performance, cooling and reliability.', '/xperience/client/custom-pc.webp'],
  ['Performance Testing', 'We validate system stability, compatibility and performance before delivery.', '/xperience/client/gaming.webp'],
  ['Ready to Perform', 'Receive your fully configured machine, ready for your workflow.', '/xperience/client/business.webp'],
];

export default function Workstation() {
  const root = useRef(null);
  const [mode, setMode] = useState('custom');
  const [values, setValues] = useState(() => Object.fromEntries([
    ['purpose', purposes[0][0]], ['budget', budgets[2]], ...components.map(([key]) => [key, recommend]),
  ]));
  const [status, setStatus] = useState('');
  const [prepared, setPrepared] = useState('');
  const setField = (name, value) => {
    setValues(current => ({ ...current, [name]: value }));
    setStatus('');
    setPrepared('');
  };
  const selectMode = next => {
    setMode(next);
    setStatus('');
    setPrepared('');
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const select = gsap.utils.selector(root.current);
      const expert = select('[data-expert-section]')[0];
      const reveal = gsap.timeline({
        scrollTrigger: { trigger: expert, start: 'top 82%', end: 'top 20%', scrub: .6 },
      });
      reveal.from(select('[data-expert-word]'), {
        yPercent: 110, rotation: 4, opacity: .2, stagger: .12, duration: .65, ease: 'power3.out',
      }, 0).from(select('[data-expert-visual]'), {
        clipPath: 'inset(9% 7% 9% 7% round 30px)', opacity: .4, duration: 1, ease: 'power2.out',
      }, 0).from(expert.querySelectorAll('li, a'), {
        y: 20, opacity: 0, stagger: .08, duration: .35, ease: 'power2.out',
      }, .5);
      gsap.fromTo(select('[data-expert-image]'), { yPercent: -4, scale: 1.12 }, {
        yPercent: 4, scale: 1.05, ease: 'none',
        scrollTrigger: { trigger: expert, start: 'top bottom', end: 'bottom top', scrub: .7 },
      });
      const process = select('[data-process-section]')[0];
      gsap.from(select('[data-process-word]'), {
        yPercent: 110, opacity: .15, stagger: .14, ease: 'power3.out',
        scrollTrigger: { trigger: process, start: 'top 85%', end: 'top 52%', scrub: .5 },
      });
      process.querySelectorAll('article').forEach(card => {
        gsap.from(card.querySelectorAll('h3, p'), {
          y: 28, opacity: 0, stagger: .1,
          duration: .8, ease: 'power3.out', clearProps: 'transform,opacity',
          scrollTrigger: { trigger: card, start: 'top 92%', once: true },
        });
        gsap.fromTo(card.querySelector('img'), { scale: 1.12, yPercent: -3 }, {
          scale: 1.03, yPercent: 3, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .6 },
        });
      });
      select('[data-ws-reveal]').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        gsap.from(element, { y: 25, opacity: .15, duration: .65, clearProps: 'transform,opacity',
          scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
      });
    }, root.current);
    return () => motion.revert();
  }, []);

  async function copyQuote(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    const fields = [
      ['Request', mode === 'expert' ? 'Expert recommendation' : 'Custom configuration'],
      ['Primary use', form.purpose],
      ...(mode === 'custom' ? components.map(([key, label]) => [label, form[key]]) : [['Primary software', form.software]]),
      ['Preferred budget', form.budget], ['Additional requirements', form.requirements],
      ['Full name', form.fullName], ['Phone / WhatsApp', form.phone], ['Email', form.email],
    ];
    const text = ['Abstergo Technology | Workstation quote request', ...fields.filter(([, value]) => value?.trim()).map(([label, value]) => `${label}: ${value.trim()}`)].join('\n');
    setPrepared(text);
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Request copied. Share it with your Abstergo advisor.');
    } catch {
      setStatus('Your request is ready to download.');
    }
  }

  return <>
    <SiteHeader />
    <main className={styles.page} ref={root}>
      <AssemblyHero />

      <section className={styles.section} aria-labelledby="purpose-title">
        <h2 id="purpose-title">Choose your purpose.</h2>
        <div className={styles.purposes} data-ws-reveal>
          {purposes.map(([name, copy, Icon]) => <button key={name} type="button" aria-pressed={values.purpose === name} onClick={() => {
            setField('purpose', name);
            document.getElementById('configure')?.scrollIntoView();
          }}><Icon size={24} aria-hidden="true"/><strong>{name}</strong><span>{copy}</span><ArrowUpRight size={16} aria-hidden="true"/></button>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.builder}`} id="configure" aria-labelledby="builder-title">
        <header className={styles.configHeader}>
          <h2 id="builder-title">Configure your workstation.</h2>
          <div className={styles.modes} role="group" aria-label="Configuration method">
            <button type="button" aria-pressed={mode === 'custom'} onClick={() => selectMode('custom')}>Choose components</button>
            <button type="button" aria-pressed={mode === 'expert'} onClick={() => selectMode('expert')}>Get expert guidance</button>
          </div>
        </header>
        <form className={styles.formLayout} data-mode={mode} onSubmit={copyQuote} onChange={() => { setStatus(''); setPrepared(''); }}>
          {mode === 'custom' && <div className={styles.visualBuilder}>
            <PCBuilder components={components} values={values} onChange={setField} recommend={recommend}/>
            {components.map(([key]) => <input key={key} type="hidden" name={key} value={values[key]}/>)}
          </div>}
          <div className={styles.quote}>
            <div className={styles.form}>
              <h3 className={styles.quoteTitle}>Quote details</h3>
              <div className={styles.fields}>
                <ModernSelect name="purpose" label="Primary use" value={values.purpose} options={purposes.map(([name]) => name)} onChange={value => setField('purpose', value)}/>
                <ModernSelect name="budget" label="Estimated budget (FCFA)" value={values.budget} options={budgets} onChange={value => setField('budget', value)}/>
                {mode === 'expert' && <label className={styles.wide}>Primary software<input name="software" placeholder="e.g. AutoCAD, Blender, DaVinci Resolve" required/></label>}
                {mode === 'custom' && <label className={styles.wide}>Additional requirements<textarea name="requirements" rows={3} placeholder="Software, existing equipment or specific performance goals"/></label>}
              </div>
              <fieldset className={styles.fields}>
                <legend>Your contact details</legend>
                <label>Full name<input name="fullName" autoComplete="name" required maxLength={150}/></label>
                <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required maxLength={40}/></label>
                <label className={styles.wide}>Email (optional)<input name="email" type="email" autoComplete="email" maxLength={254}/></label>
              </fieldset>
            </div>
            <aside className={styles.summary}>
              <div className={styles.summaryHeading}><CircuitBoard size={20} aria-hidden="true"/><h3>Configuration summary</h3></div>
              <dl><div><dt>Primary use</dt><dd>{values.purpose}</dd></div>
                {mode === 'custom' && components.map(([key,label]) => <div key={key}><dt>{label}</dt><dd>{values[key]}</dd></div>)}
                <div><dt>Preferred budget</dt><dd>{values.budget}</dd></div>
              </dl>
              <p>This is your target budget. Abstergo will confirm pricing in your quotation.</p>
              <div className={styles.summaryActions}>
                <button className={styles.primary} type="submit">Copy My Quote Request <Copy size={16}/></button>
                <p>The request stays on this device until you share it.</p>
              </div>
              {status && <p role="status">{status}</p>}
              {prepared && <a download="abstergo-workstation-request.txt" href={'data:text/plain;charset=utf-8,' + encodeURIComponent(prepared)}>Download request</a>}
            </aside>
          </div>
        </form>
      </section>

      <section className={`${styles.section} ${styles.expert}`} data-expert-section>
        <div className={styles.expertVisual} data-expert-visual><img src="/xperience/client/custom-pc.webp" alt="Technician assembling a custom computer" loading="lazy" data-expert-image/></div>
        <div><p className={styles.eyebrow}>Expert guidance</p><h2 aria-label="You bring the ambition." className={styles.expertTitle}>{['You', 'bring', 'the', 'ambition.'].map(word => <span key={word} className={styles.expertWord} aria-hidden="true"><span data-expert-word>{word}</span></span>)}</h2><p>Tell us what you want to accomplish, which software you use, and your budget. Our experts will recommend a configuration designed around your workflow.</p>
        <ul>{['Expert component selection','Compatibility verification','Performance and budget optimization'].map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul>
        <a className={styles.primary} href="#configure" onClick={() => selectMode('expert')}>Let Our Experts Build It For You <ArrowUpRight size={16}/></a></div>
      </section>

      <section className={styles.section} data-process-section>
        <p className={styles.eyebrow}>From configuration to creation</p>
        <h2 className={styles.processTitle} aria-label="Engineered with care.">{['Engineered', 'with', 'care.'].map(word => <span className={styles.expertWord} key={word} aria-hidden="true"><span data-process-word>{word}</span></span>)}</h2>
        <div className={styles.steps}>{steps.map(([title, copy, image], i) => <article key={title} style={{ '--step': i }}>
          <figure className={styles.processImage}><img src={image} alt="" loading="lazy"/></figure><div><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>
        </article>)}</div>
      </section>

      <section className={styles.section}>
        <h2>Why build with Abstergo?</h2>
        <div className={styles.reasons} data-ws-reveal>{[
          ['Performance Without Compromise', 'Every component serves the applications and workloads that matter.', ScanLine],
          ['Built for Reliability', 'Quality components, professional assembly and thorough testing.', Wrench],
          ['Expert Guidance & Ongoing Support', 'Abstergo stays by your side from consultation to technical assistance after delivery.', Sparkles],
        ].map(([title,copy,Icon]) => <article key={title}><Icon size={26}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <footer className={styles.final}>
        <img src="/logo-white.png" alt="Abstergo Technology" loading="lazy"/><h2>Great things start with the right machine.</h2>
        <p>Design the workstation you’ve always wanted. We’ll help bring it to life.</p>
        <a className={styles.primary} href="#configure">Build Your Workstation <ArrowUpRight size={17}/></a>
      </footer>
    </main>
  </>;
}
