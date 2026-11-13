'use client';

import { useRef, useState } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { ModernSelect } from '../../components/brand/ModernFormControls';
import styles from './pc-builder.module.css';

const visuals = { cpu: 'CPU', gpu: 'GPU', ram: 'RAM', storage: 'SSD', cooling: 'Cooling' };

function PartArt({ kind }) {
  return <img className={styles.partArt} data-kind={kind} src={`/workstation/parts/${kind}.webp`} alt="" draggable={false} />;
}
const dragType = 'application/x-abstergo-part';

export default function PCBuilder({ components, values, onChange, recommend }) {
  const bench = useRef(null);
  const [flight, setFlight] = useState(null);
  const [active, setActive] = useState('cpu');
  const [draft, setDraft] = useState({});
  const [dragging, setDragging] = useState(null);
  const [over, setOver] = useState(false);
  const [notice, setNotice] = useState('');
  const isInstalled = key => values[key] !== recommend;
  const model = key => draft[key] ?? (isInstalled(key) ? values[key] : components.find(([id]) => id === key)[2][0]);
  const installed = components.filter(([key]) => isInstalled(key)).length;

  function place(key, point) {
    if (!Object.hasOwn(visuals, key)) return;
    const choice = model(key);
    const target = bench.current.querySelector(`[data-slot="${key}"]`).getBoundingClientRect();
    const origin = bench.current.querySelector(`[data-part="${key}"] img`).getBoundingClientRect();
    setFlight(previous => ({
      key,
      id: (previous?.id ?? 0) + 1,
      x: (point?.clientX ?? origin.x + origin.width / 2) - target.x - target.width / 2,
      y: (point?.clientY ?? origin.y + origin.height / 2) - target.y - target.height / 2,
    }));
    onChange(key, choice);
    setActive(key);
    setNotice(`${choice} placed in the ${visuals[key]} slot.`);
    setDragging(null);
    setOver(false);
  }

  return <section ref={bench} aria-labelledby="pc-builder-title">
    <header className={styles.heading}>
      <div><h3 id="pc-builder-title">Assemble your PC</h3><p>Drag a part into the case, or choose a model below it and select Place part.</p></div>
      <span className={styles.count}>{installed} / {components.length} placed</span>
    </header>
    <div className={styles.workspace}>
      {[
        ['left', ['cooling', 'gpu', 'ram']],
        ['right', ['cpu', 'storage']],
      ].map(([side, keys]) => <div key={side} className={styles.parts} data-side={side} role="group" aria-label={`PC parts, ${side} side`}>
          {keys.map(key => {
            const short = visuals[key];
            const [, label, options] = components.find(([id]) => id === key);
            const filled = isInstalled(key);
            return <div key={key} className={styles.partCard}>
              <button
                className={styles.partButton}
                type="button" data-part={key} draggable aria-pressed={active === key}
                onClick={() => setActive(key)}
                onDragStart={event => {
                  event.dataTransfer.setData(dragType, key);
                  event.dataTransfer.effectAllowed = 'copy';
                  setActive(key);
                  setDragging(key);
                }}
                onDragEnd={() => { setDragging(null); setOver(false); }}
              >
                <span className={styles.thumbnail}><PartArt kind={key}/></span>
                <span>{short}</span>
                {filled && <Check size={14} aria-hidden="true"/>}
              </button>
              <div className={styles.picker}>
                <ModernSelect
                  name={`part-preview-${key}`}
                  label={label}
                  value={model(key)}
                  options={options}
                  onChange={value => {
                    setDraft(old => ({ ...old, [key]: value }));
                    setActive(key);
                  }}
                />
                <button className={styles.place} type="button" aria-label={`${filled ? 'Replace' : 'Place'} ${short}`} onClick={() => place(key)}>
                  <Plus size={15}/>{filled ? 'Replace part' : 'Place part'}
                </button>
              </div>
            </div>;
          })}
      </div>)}
      <div className={styles.stage} data-dragging={Boolean(dragging)} data-over={over}>
        <div
          className={styles.case}
          aria-label="PC case"
          onDragOver={event => {
            if (!event.dataTransfer.types.includes(dragType)) return;
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
            setOver(true);
          }}
          onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOver(false); }}
          onDrop={event => {
            if (!event.dataTransfer.types.includes(dragType)) return;
            event.preventDefault();
            place(event.dataTransfer.getData(dragType), event);
          }}
        >
          <img className={styles.chassis} src="/workstation/open-chassis.webp" alt="" draggable={false} />
          <div className={styles.side}>
          {components.map(([key]) => {
            const short = visuals[key];
            const filled = isInstalled(key);
            return <button
              type="button" key={key} data-slot={key} data-filled={filled} data-target={dragging === key}
              className={styles.socket} aria-label={filled ? `${short} slot: ${values[key]}` : `${short} slot: empty`}
              onClick={() => setActive(key)}
            >
              <span
                key={filled && flight?.key === key ? flight.id : values[key]}
                className={styles.socketPart}
                style={flight?.key === key ? { '--seat-x': `${flight.x}px`, '--seat-y': `${flight.y}px` } : undefined}
              >
                {filled ? <PartArt kind={key}/> : <span>{short}</span>}
              </span>
            </button>;
          })}
          </div>
        </div>
      </div>
    </div>
    <footer className={styles.foot}>
      <p role="status">{notice || 'Unfilled slots are left for expert recommendation.'}</p>
      {isInstalled(active) && <button type="button" onClick={() => { onChange(active, recommend); setNotice(`${visuals[active]} removed.`); }}><X size={14}/> Remove {visuals[active]}</button>}
    </footer>
  </section>;
}
