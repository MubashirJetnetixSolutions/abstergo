"use client";

import { Check, Plus, ShieldCheck, Cpu } from "lucide-react";
import { openLaptop } from "../data";
export default function RepairSection({ open }) {
  return (
    <section id="repair" className="repair">
      <div className="repair-art">
        <div className="repair-orbit" />
        <div className="repair-device">
          <img src={openLaptop} alt="Laptop being assessed for repair" />
          <div className="diagnostic-scan" />
          <div className="diagnostic-chip chip-one">
            <Cpu size={18} />
            <div>
              <small>PERFORMANCE</small>
              <strong>Hardware check</strong>
            </div>
          </div>
          <div className="diagnostic-chip chip-two">
            <ShieldCheck size={18} />
            <div>
              <small>SYSTEM HEALTH</small>
              <strong>Care. Restore. Upgrade.</strong>
            </div>
          </div>
          <div className="repair-device-glow" />
        </div>
        <div className="repair-label">
          <span>DIAGNOSTIC</span>
          <strong>Precision. At every step.</strong>
        </div>
        <span className="repair-number">02</span>
      </div>
      <div className="repair-copy reveal">
        <span className="eyebrow">03 — REPAIR. RESTORE. KEEP GOING.</span>
        <h2>
          A second life.
          <br />
          <em>Never second best.</em>
        </h2>
        <p>
          A damaged screen, a tired battery, or a laptop slowing you down? Our
          team finds the problem and guides you to the right solution.
        </p>
        <div className="repair-services">
          <span>
            <Check size={16} /> Diagnostics & advice
          </span>
          <span>
            <Check size={16} /> Hardware repair
          </span>
          <span>
            <Check size={16} /> Upgrade SSD & RAM
          </span>
          <span>
            <Check size={16} /> Care & optimization
          </span>
        </div>
        <button className="button orange" onClick={() => open("repair")}>
          Request a diagnostic <Plus size={16} />
        </button>
      </div>
    </section>
  );
}
