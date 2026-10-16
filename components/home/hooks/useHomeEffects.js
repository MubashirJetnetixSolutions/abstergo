"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { products } from "../../../lib/products";
export default function useHomeEffects({
  root,
  panel,
  setPanel,
  selected,
  setSelected,
  setCart,
  faq,
}) {
  useEffect(() => {
    try {
      const items = JSON.parse(
        localStorage.getItem("abstergo-cart-v1") || "[]",
      );
      setCart(
        items.flatMap((x) => {
          const p = products.find((p) => p.id === x.id);
          return p
            ? Array.from(
                {
                  length: x.quantity || 1,
                },
                () => p,
              )
            : [];
        }),
      );
    } catch {}
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis;
    if (!reduced) {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        anchors: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(ticker);
      lenis._ticker = ticker;
    }
    const ctx = gsap.context(() => {
      if (reduced) return;
      const mobile = window.innerWidth < 700;
      const hero = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-cinema",
          start: "top top",
          end: () =>
            "+=" + Math.round(window.innerHeight * (mobile ? 2.1 : 2.8)),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.set(".laptop-open", {
        autoAlpha: 1,
        scale: 0.94,
      });
      gsap.set(".laptop-lid", {
        rotationX: -88,
        transformOrigin: "50% 70%",
        transformPerspective: 1800,
      });
      gsap.set(".experience-tile", {
        autoAlpha: 0,
        x: 0,
        y: 90,
        z: -250,
        scale: 0.15,
        rotation: 0,
        rotationY: 0,
        transformPerspective: 1400,
      });
      gsap.set(".hero-second-title", {
        autoAlpha: 0,
        y: 80,
      });
      gsap.set(".hero-progress-fill", {
        scaleX: 0,
        transformOrigin: "left",
      });
      hero
        .to(
          ".hero-main-title",
          {
            y: -90,
            autoAlpha: 0,
            scale: 0.92,
            duration: 0.7,
          },
          0,
        )
        .to(
          ".hero-opening-copy",
          {
            autoAlpha: 0,
            y: -25,
            duration: 0.6,
          },
          0,
        )
        .to(
          ".laptop-open",
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.25,
        )
        .to(
          ".laptop-lid",
          {
            rotationX: 0,
            duration: 2.1,
            ease: "power2.inOut",
          },
          0.05,
        )
        .to(
          ".screen-illumination",
          {
            opacity: 0.35,
            duration: 1.4,
          },
          0.7,
        )
        .to(
          ".hero-second-title",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          1.3,
        )
        .to(
          ".experience-gaming",
          {
            autoAlpha: 1,
            x: mobile ? -72 : -235,
            y: mobile ? -120 : -155,
            z: 70,
            scale: 1,
            rotation: -9,
            rotationY: 12,
            duration: 1.25,
          },
          2.05,
        )
        .to(
          ".experience-video",
          {
            autoAlpha: 1,
            x: mobile ? 85 : 210,
            y: mobile ? -25 : -75,
            z: 150,
            scale: 1,
            rotation: 7,
            rotationY: -14,
            duration: 1.25,
          },
          2.25,
        )
        .to(
          ".experience-work",
          {
            autoAlpha: 1,
            x: mobile ? 0 : -10,
            y: mobile ? -185 : -245,
            z: 0,
            scale: 1,
            rotation: -3,
            rotationY: 5,
            duration: 1.3,
          },
          1.9,
        )
        .to(
          ".laptop-floor-shadow",
          {
            scaleX: 1.15,
            opacity: 0.4,
            duration: 1.8,
          },
          1.5,
        )
        .to(
          ".experience-audio",
          {
            autoAlpha: 1,
            x: mobile ? -70 : -210,
            y: mobile ? 130 : 160,
            scale: 1,
            rotation: -5,
            duration: 1,
          },
          2.45,
        )
        .to(
          ".laptop-open",
          {
            scale: mobile ? 1.05 : 1.1,
            y: 40,
            rotation: mobile ? -3 : -6,
            rotationY: 8,
            duration: 1.3,
          },
          2.25,
        )
        .to(
          ".hero-second-title .accent-word",
          {
            color: "#e95118",
            duration: 1,
          },
          2,
        )
        .to(
          ".hero-progress-fill",
          {
            scaleX: 1,
            duration: 3.9,
            ease: "none",
          },
          0,
        )
        .to(
          ".hero-cinema-stage",
          {
            scale: 0.97,
            duration: 0.5,
          },
          3.5,
        );
      gsap.fromTo(
        ".cta-laptop-main",
        {
          y: 65,
          rotation: -16,
          scale: 0.9,
        },
        {
          y: -25,
          rotation: -5,
          scale: 1.08,
          scrollTrigger: {
            trigger: ".contact-banner",
            start: "top bottom",
            end: "bottom 40%",
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        ".cta-laptop-secondary",
        {
          y: 100,
          rotation: 14,
        },
        {
          y: 0,
          rotation: 5,
          scrollTrigger: {
            trigger: ".contact-banner",
            start: "top bottom",
            end: "bottom 40%",
            scrub: 1,
          },
        },
      );
      gsap.utils.toArray(".reveal").forEach((el) =>
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
          },
        }),
      );
      gsap.utils.toArray(".animated-text:not(.cta-title)").forEach((el) =>
        gsap.from(el.querySelectorAll(".text-word"), {
          yPercent: 115,
          rotation: 5,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        }),
      );
      const loomic = gsap.timeline({
        scrollTrigger: {
          trigger: ".loomic-transition",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
      loomic
        .from(".loomic-section-top", {
          opacity: 0,
          y: 18,
          duration: 0.7,
        })
        .fromTo(
          ".loomic-letter",
          {
            yPercent: -115,
            opacity: 0,
            rotationX: 65,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotationX: 0,
            stagger: 0.13,
            duration: 1.6,
            ease: "power4.out",
          },
          0.1,
        )
        .from(
          ".loomic-tagline-word",
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.12,
            duration: 1.15,
            ease: "power3.out",
          },
          0.65,
        )
        .from(
          ".loomic-description,.loomic-cta",
          {
            y: 25,
            opacity: 0,
            stagger: 0.13,
            duration: 0.8,
          },
          0.8,
        );
      gsap.to(".loomic-word", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".loomic-transition",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.utils.toArray(".color-sweep-title").forEach((el) =>
        gsap.fromTo(
          el,
          {
            "--color-reveal": "100%",
          },
          {
            "--color-reveal": "0%",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "top 42%",
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          },
        ),
      );
      gsap.utils.toArray(".showcase").forEach((el) => {
        gsap.fromTo(
          el.querySelector("img"),
          {
            rotation: -9,
            y: 70,
            scale: 0.88,
          },
          {
            rotation: 0,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "top 15%",
              scrub: 1,
            },
          },
        );
        gsap.to(el.querySelector(".giant-word"), {
          x: -100,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
      gsap.fromTo(
        ".repair-device img",
        {
          y: 50,
          rotation: -8,
          scale: 0.85,
        },
        {
          y: -20,
          rotation: 3,
          scale: 1.05,
          scrollTrigger: {
            trigger: ".repair",
            start: "top 85%",
            end: "bottom 30%",
            scrub: 1,
          },
        },
      );
      gsap.from(".diagnostic-chip", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".repair",
          start: "top 65%",
        },
      });
      gsap.utils.toArray(".expertise-grid > div").forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.12,
          scrollTrigger: {
            trigger: ".expertise-grid",
            start: "top 85%",
          },
        });
        gsap.to(el.querySelector("svg"), {
          rotation: 12,
          y: -8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 1,
          },
        });
      });
      gsap.utils.toArray(".faq-scroll-title > *").forEach((el, i) =>
        gsap.fromTo(
          el,
          {
            color: "#c4c4c4",
            x: i % 2 ? -18 : 18,
          },
          {
            color: i === 2 ? "#e95118" : "#111112",
            x: 0,
            scrollTrigger: {
              trigger: ".faq",
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          },
        ),
      );
      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
      });
      gsap.to(".cta-outline", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.from(".contact-banner > .button", {
        y: 40,
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".contact-banner",
          start: "top 75%",
        },
      });
      const track = document.querySelector(".motion-products-track");
      gsap.to(track, {
        x: () =>
          -Math.max(
            0,
            track.scrollWidth -
              document.querySelector(".motion-products-window").clientWidth,
          ),
        ease: "none",
        scrollTrigger: {
          trigger: ".motion-products",
          start: "top top",
          end: () => "+=" + Math.max(1000, track.scrollWidth),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      gsap.to(".motion-products-heading", {
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".motion-products",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      const overlap = gsap.timeline({
        scrollTrigger: {
          trigger: ".type-overlap",
          start: "top top",
          end: () => "+=" + window.innerHeight * 1.7,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      overlap
        .fromTo(
          ".overlap-line-one",
          {
            xPercent: -27,
          },
          {
            xPercent: 10,
            duration: 2,
            ease: "none",
          },
          0,
        )
        .fromTo(
          ".overlap-line-two",
          {
            xPercent: 24,
          },
          {
            xPercent: -12,
            duration: 2,
            ease: "none",
          },
          0,
        )
        .fromTo(
          ".overlap-line-three",
          {
            xPercent: -18,
          },
          {
            xPercent: 12,
            duration: 2,
            ease: "none",
          },
          0,
        )
        .fromTo(
          ".overlap-photo",
          {
            scale: mobile ? 0.68 : 0.62,
            rotation: -7,
          },
          {
            scale: mobile ? 1.45 : 1.65,
            rotation: 3,
            y: mobile ? -10 : -30,
            duration: 2,
            ease: "power1.inOut",
          },
          0,
        )
        .fromTo(
          ".overlap-caption",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          1.2,
        );
    }, root);
    const textTargets = [
      ...root.current.querySelectorAll(".letter-reveal-title,.cta-title"),
    ];
    const textObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("text-in-view", entry.isIntersecting);
        }),
      {
        threshold: 0.16,
      },
    );
    textTargets.forEach((el) => textObserver.observe(el));
    const refresh = () => ScrollTrigger.refresh();
    const images = [...root.current.querySelectorAll("img")];
    images.forEach((img) => img.addEventListener("load", refresh));
    return () => {
      textObserver.disconnect();
      images.forEach((img) => img.removeEventListener("load", refresh));
      ctx.revert();
      if (lenis) {
        gsap.ticker.remove(lenis._ticker);
        lenis.destroy();
      }
    };
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [faq]);
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") {
        setPanel(null);
        setSelected(null);
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  useEffect(() => {
    document.body.style.overflow = panel || selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel, selected]);
}
