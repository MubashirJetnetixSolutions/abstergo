"use client";

import HomeNavigation from "./../components/home/sections/HomeNavigation";
import HeroSection from "./../components/home/sections/HeroSection";
import BrandStrip from "./../components/home/sections/BrandStrip";
import UniverseSection from "./../components/home/sections/UniverseSection";
import ProductStories from "./../components/home/sections/ProductStories";
import MotionProducts from "./../components/home/sections/MotionProducts";
import TypographyInterlude from "./../components/home/sections/TypographyInterlude";
import LoomicTransition from "./../components/home/sections/LoomicTransition";
import ProductCollection from "./../components/home/sections/ProductCollection";
import ServiceTypography from "./../components/home/sections/ServiceTypography";
import RepairSection from "./../components/home/sections/RepairSection";
import ExpertiseSection from "./../components/home/sections/ExpertiseSection";
import FaqSection from "./../components/home/sections/FaqSection";
import HomeFooter from "./../components/home/sections/HomeFooter";
import HomePanels from "./../components/home/sections/HomePanels";
import useHomeEffects from "./../components/home/hooks/useHomeEffects";
import { openLaptop } from "./../components/home/data";
import { useRef, useState } from "react";
import Preloader from "../components/SitePreloader";
export default function Home() {
  const root = useRef(null);
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const [panel, setPanel] = useState(null);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [faq, setFaq] = useState(0);
  useHomeEffects({
    root,
    panel,
    setPanel,
    selected,
    setSelected,
    setCart,
    faq,
  });
  const open = (p) => {
    if (["contact", "repair", "cart"].includes(p)) {
      window.location.href = "/" + p;
      return;
    }
    setPanel(p);
    setMenu(false);
    setSubmitted(false);
  };
  const detail = (p) => {
    window.location.href = "/products/" + p.id;
  };
  return (
    <main ref={root}>
      <Preloader assets={["/logo.png", "/hero-geometric.png", openLaptop]} />
      <HomeNavigation menu={menu} setMenu={setMenu} cart={cart} open={open} />
      <HeroSection detail={detail} />
      <BrandStrip />
      <UniverseSection setFilter={setFilter} />
      <ProductStories detail={detail} />
      <MotionProducts detail={detail} />
      <TypographyInterlude detail={detail} />
      <LoomicTransition />
      <ProductCollection
        filter={filter}
        setFilter={setFilter}
        detail={detail}
      />
      <ServiceTypography />
      <RepairSection open={open} />
      <ExpertiseSection />
      <FaqSection faq={faq} setFaq={setFaq} />
      <HomeFooter setFilter={setFilter} open={open} />
      <HomePanels
        filter={filter}
        panel={panel}
        setPanel={setPanel}
        selected={selected}
        setSelected={setSelected}
        cart={cart}
        setCart={setCart}
        query={query}
        setQuery={setQuery}
        submitted={submitted}
        setSubmitted={setSubmitted}
        open={open}
        detail={detail}
      />
    </main>
  );
}
