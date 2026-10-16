"use client";

import {
  Gamepad2,
  PenTool,
  Briefcase,
  Plus,
  ChevronDown,
  Cpu,
  Play,
  Film,
  Volume2,
  Maximize2,
} from "lucide-react";
import { products } from "../../../lib/products";
import { openLaptop } from "../data";
export default function HeroSection({ detail }) {
  return (
    <section
      className="hero-cinema"
      aria-label="Discover your laptop’s possibilities"
    >
      <div className="hero-cinema-stage">
        <div
          className="hero-wave-background hero-geometric-background"
          aria-hidden="true"
        >
          <img src="/hero-geometric.png" alt="" />
        </div>
        <div className="laptop-floor-shadow" />
        <div className="cinema-top">
          <span className="eyebrow">
            <i /> ABSTERGO TECHNOLOGY
          </span>
          <span className="edition">OPEN A NEW DIMENSION.</span>
        </div>
        <div className="hero-main-title">
          <h1>
            Everything starts
            <br />
            with <em>an opening.</em>
          </h1>
        </div>
        <div className="hero-second-title">
          <h2>
            Play. Create.
            <br />
            <span className="accent-word">Go beyond.</span>
          </h2>
        </div>
        <div className="hero-opening-copy">
          <p>
            The next chapter of your ambitions.
            <br />
            Laptops chosen to take you further.
          </p>
          <a href="/shop" className="button black">
            Explore the collection <Plus size={16} />
          </a>
        </div>
        <div className="cinema-laptop">
          <div
            className="laptop-open"
            role="img"
            aria-label="ASUS ROG Zephyrus G16 with its screen opening"
          >
            <img className="laptop-base" src={openLaptop} alt="" />
            <div className="laptop-lid">
              <img src={openLaptop} alt="" />
              <div className="screen-illumination" />
            </div>
          </div>
          <div className="experience-tile experience-gaming">
            <div className="window-chrome">
              <i />
              <i />
              <i />
              <span>abstergo / play</span>
            </div>
            <div className="tile-top">
              <Gamepad2 size={15} />
              <span>GAMING / IMMERSION</span>
              <Maximize2 size={12} />
            </div>
            <div className="game-preview">
              <img src={products[0].image} alt="ASUS ROG gaming" />
              <div className="game-title">
                NEXT
                <br />
                <strong>LEVEL.</strong>
              </div>
            </div>
            <div className="tile-bottom">
              <span>Ready for your next game.</span>
              <span className="tile-dot" />
            </div>
          </div>
          <div className="experience-tile experience-video">
            <div className="window-chrome">
              <i />
              <i />
              <i />
              <span>abstergo / studio</span>
            </div>
            <div className="tile-top">
              <Film size={15} />
              <span>CREATOR / STUDIO</span>
              <Plus size={13} />
            </div>
            <div className="video-preview">
              <img
                src={products[1].image}
                alt="ASUS ProArt laptop for video creation"
              />
              <span className="play-circle">
                <Play size={17} fill="currentColor" />
              </span>
            </div>
            <div className="timeline-ruler">
              <span>00:00</span>
              <span>00:15</span>
              <span>00:30</span>
            </div>
            <div className="video-timeline">
              <i />
              <i />
              <i />
              <div className="playhead" />
            </div>
            <div className="audio-track" />
          </div>
          <div className="experience-tile experience-work" aria-hidden="true">
            <div className="window-chrome">
              <i />
              <i />
              <i />
              <span>abstergo / workspace</span>
            </div>
            <div className="workspace-preview">
              <div className="workspace-sidebar">
                <span className="workspace-monogram">A.</span>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="workspace-content">
                <span className="workspace-eyebrow">SPACE TO DO MORE</span>
                <strong>
                  Your next
                  <br />
                  big idea.
                </strong>
                <div className="workspace-projects">
                  <div>
                    <PenTool size={15} />
                    <span>Create</span>
                  </div>
                  <div>
                    <Briefcase size={15} />
                    <span>Build</span>
                  </div>
                  <div>
                    <Cpu size={15} />
                    <span>Explore</span>
                  </div>
                </div>
                <div className="workspace-line" />
                <div className="workspace-line short" />
              </div>
            </div>
          </div>
          <div className="experience-tile experience-audio">
            <Volume2 size={23} />
            <div>
              <span>YOUR CREATIVITY, IN MOTION.</span>
              <div className="waveform">
                {Array.from(
                  {
                    length: 27,
                  },
                  (_, i) => (
                    <i
                      key={i}
                      style={{
                        height: 8 + ((i * 13) % 28),
                        animationDelay: i * 0.055 + "s",
                      }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cinema-bottom">
          <span className="cinema-scroll">
            SCROLL. LET THE POSSIBILITIES OPEN.
            <ChevronDown size={15} />
          </span>
          <div className="hero-progress">
            <span className="hero-progress-fill" />
          </div>
          <button onClick={() => detail(products[0])}>
            ROG ZEPHYRUS G16 <Plus size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
