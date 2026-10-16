"use client";

import ChapterNavigation from "./loomic/sections/ChapterNavigation";
import LoomicHeader from "./loomic/sections/LoomicHeader";
import KineticBand from "./loomic/sections/KineticBand";
import VoltisPowerUltraSection from "./loomic/sections/VoltisPowerUltraSection";
import VoltisPowerProSection from "./loomic/sections/VoltisPowerProSection";
import PrecisionProSection from "./loomic/sections/PrecisionProSection";
import ReclinerSection from "./loomic/sections/ReclinerSection";
import DeskEditorial from "./loomic/sections/DeskEditorial";
import SoundInterlude from "./loomic/sections/SoundInterlude";
import PulseSection from "./loomic/sections/PulseSection";
import SpeakerSection from "./loomic/sections/SpeakerSection";
import PowerCinema from "./loomic/sections/PowerCinema";
import DisplayChargerSection from "./loomic/sections/DisplayChargerSection";
import Charger65Section from "./loomic/sections/Charger65Section";
import Charger45Section from "./loomic/sections/Charger45Section";
import PowerInterlude from "./loomic/sections/PowerInterlude";
import CableSection from "./loomic/sections/CableSection";
import EssentialChapters from "./loomic/sections/EssentialChapters";
import CollectionSection from "./loomic/sections/CollectionSection";
import LoomicFooter from "./loomic/sections/LoomicFooter";
import useLoomicScroll from "./loomic/hooks/useLoomicScroll";
import { useRef, useState } from "react";
import "./loomic-experience.css";
import LoomicMotion from "./LoomicMotion";
import LoomicHero from "./LoomicHero";
import SitePreloader from "./SitePreloader";
import "./loomic-refinement.css";
import "./loomic-brand.css";
export default function LoomicExperience() {
  const root = useRef(null),
    [menu, setMenu] = useState(false);
  useLoomicScroll(root);
  return (
    <main className="lm-page" ref={root}>
      <SitePreloader
        assets={[
          "/loomic/slim-powerbank.webp",
          "/loomic/voltis-power-pro-1.webp",
          "/logo-white.png",
          "/loomic/logo.svg",
          "/loomic/charger-140-2.webp",
          "/loomic/chair-front-cutout.webp",
          "/loomic/chair-quarter-cutout.webp",
          "/loomic/chair-side-cutout.webp",
          "/loomic/chair-back-quarter-cutout.webp",
          "/loomic/chair-back-cutout.webp",
        ]}
        label="Loading Loomic experience"
      />
      <LoomicMotion />
      <ChapterNavigation />
      <LoomicHeader menu={menu} setMenu={setMenu} />
      <LoomicHero />
      <KineticBand />
      <VoltisPowerUltraSection />
      <VoltisPowerProSection />
      <PrecisionProSection />
      <ReclinerSection />
      <DeskEditorial />
      <SoundInterlude />
      <PulseSection />
      <SpeakerSection />
      <PowerCinema />
      <DisplayChargerSection />
      <Charger65Section />
      <Charger45Section />
      <PowerInterlude />

      <CableSection />
      <EssentialChapters />
      <CollectionSection />
      <LoomicFooter />
    </main>
  );
}
