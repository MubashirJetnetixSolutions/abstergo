"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./loomic-sound.css";

const preferenceKey = "loomic-opening-sound";

// A short cinematic arrival: a filtered air sweep with a soft tonal bloom.
function playChime(context) {
  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.16, now);
  master.connect(context.destination);
  const duration = 1.8;
  const buffer = context.createBuffer(
    1,
    Math.ceil(context.sampleRate * duration),
    context.sampleRate,
  );
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  const air = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const envelope = context.createGain();
  air.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(180, now);
  filter.frequency.exponentialRampToValueAtTime(2600, now + 0.65);
  filter.frequency.exponentialRampToValueAtTime(220, now + duration);
  envelope.gain.setValueAtTime(0, now);
  envelope.gain.linearRampToValueAtTime(0.1, now + 0.55);
  envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  air.connect(filter);
  filter.connect(envelope);
  envelope.connect(master);
  air.start(now);
  air.stop(now + duration);
  air.onended = () => {
    air.disconnect();
    filter.disconnect();
    envelope.disconnect();
  };
  [110, 220, 330].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const tone = context.createGain();
    const start = now + 0.25 + index * 0.08;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency * 0.94, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency, start + 0.5);
    tone.gain.setValueAtTime(0, start);
    tone.gain.linearRampToValueAtTime(0.2 / (index + 1), start + 0.25);
    tone.gain.exponentialRampToValueAtTime(0.0001, start + 2);
    oscillator.connect(tone);
    tone.connect(master);
    oscillator.start(start);
    oscillator.stop(start + 2.1);
    oscillator.onended = () => {
      oscillator.disconnect();
      tone.disconnect();
    };
  });
  return master;
}

export default function LoomicSound() {
  const [mode, setMode] = useState("ready");
  const player = useRef(null);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      setMode("unsupported");
      return;
    }
    let alive = true,
      context,
      master,
      played = false,
      enabled = true;
    try {
      enabled = localStorage.getItem(preferenceKey) !== "off";
    } catch {}
    if (!enabled) setMode("off");

    const play = async () => {
      if (
        !alive ||
        !enabled ||
        played ||
        document.hidden ||
        document.documentElement.classList.contains("site-is-loading")
      )
        return;
      try {
        context ??= new AudioContext();
        if (context.state !== "running") await context.resume();
        // Multiple unlock gestures can resolve the same suspended context.
        if (!alive || !enabled || played || context.state !== "running") return;
        played = true;
        master = playChime(context);
        setMode("on");
      } catch {
        if (alive && enabled) setMode("ready");
      }
    };
    const toggle = () => {
      if (enabled && played) {
        enabled = false;
        if (master && context?.state === "running") {
          master.gain.cancelScheduledValues(context.currentTime);
          master.gain.setTargetAtTime(0, context.currentTime, 0.035);
        }
        setMode("off");
      } else {
        enabled = true;
        played = false;
        void play();
      }
      try {
        localStorage.setItem(preferenceKey, enabled ? "on" : "off");
      } catch {}
    };
    player.current = { toggle };
    // Start with the hero reveal; blocked autoplay retries on a real gesture.
    const observer = new MutationObserver(() => {
      void play();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("pointerdown", play);
    window.addEventListener("keydown", play);
    const timer = window.setTimeout(play, 0);
    return () => {
      alive = false;
      player.current = null;
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("pointerdown", play);
      window.removeEventListener("keydown", play);
      if (context && context.state !== "closed")
        void context.close().catch(() => {});
    };
  }, []);

  if (mode === "unsupported") return null;
  const active = mode === "on";
  return (
    <button
      className="lm-sound-control"
      type="button"
      onPointerDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
      onClick={() => player.current?.toggle()}
      aria-pressed={active}
      aria-label={active ? "Turn opening sound off" : "Play opening sound"}
      title="Loomic opening sound"
    >
      {active ? <Volume2 size={15} /> : <VolumeX size={15} />}
      <span>
        {active ? "Sound on" : mode === "off" ? "Sound off" : "Enable sound"}
      </span>
    </button>
  );
}
