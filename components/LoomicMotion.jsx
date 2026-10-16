"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function LoomicMotion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector(".lm-page");
    let ctxCleanup = () => {};
    const ctx = gsap.context(() => {
      const splitHeadings = [];
      root.querySelectorAll(".lm-real-copy h2").forEach((heading) => {
        splitHeadings.push([heading, heading.innerHTML]);
        if (heading.querySelector(".lm-word")) return;
        const walk = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walk.nextNode()) nodes.push(walk.currentNode);
        nodes.forEach((node) => {
          const frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach((word) => {
            if (!word.trim()) {
              frag.append(document.createTextNode(word));
              return;
            }
            const mask = document.createElement("span");
            mask.className = "lm-word-mask";
            const inner = document.createElement("span");
            inner.className = "lm-word";
            inner.textContent = word;
            mask.append(inner);
            frag.append(mask);
          });
          node.replaceWith(frag);
        });
      });
      root
        .querySelectorAll(
          "#recliner>.lm-real-shot:first-child,#pulse-m>.lm-real-shot,.lm-charger-45>.lm-real-shot",
        )
        .forEach((section, i) => {
          const img = section.querySelector(":scope>img");
          if (img)
            gsap.fromTo(
              img,
              {
                y: 90,
                x: 50,
                rotationZ: -7,
                rotationY: -10,
                scale: 0.9,
                opacity: 0.1,
                transformPerspective: 1600,
              },
              {
                y: -20,
                x: 0,
                rotationZ: 2,
                rotationY: 4,
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  end: "top -15%",
                  scrub: 1.1,
                },
              },
            );
        });
      root.querySelectorAll(".lm-real-copy h2 .lm-word").forEach((word) => {
        const text = word.textContent;
        word.textContent = "";
        [...text].forEach((char) => {
          const mask = document.createElement("span");
          mask.className = "lm-type-mask";
          const letter = document.createElement("span");
          letter.className = "lm-type-letter";
          letter.textContent = char;
          mask.append(letter);
          word.append(mask);
        });
      });
      root
        .querySelectorAll(".lm-real-copy h2,.lm-display-type")
        .forEach((heading) => {
          const letters = heading.querySelectorAll(".lm-type-letter");
          if (!letters.length) return;
          gsap.fromTo(
            letters,
            { yPercent: -115, rotationX: 30, opacity: 0 },
            {
              yPercent: 0,
              rotationX: 0,
              opacity: 1,
              stagger: 0.025,
              duration: 1.15,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      const precision = root.querySelector("#precision-pro>.lm-real-shot");
      if (precision) {
        const img = precision.querySelector(":scope>img");
        gsap.fromTo(
          img,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "top 45%",
              scrub: 0.8,
            },
          },
        );
        gsap.fromTo(
          precision.querySelector(".lm-precision-rule i"),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: { trigger: precision, start: "top 80%" },
          },
        );
      }
      const band = root.querySelector(".lm-kinetic-band");
      if (band)
        gsap.fromTo(
          band.firstElementChild,
          { xPercent: 0 },
          {
            xPercent: -25,
            ease: "none",
            scrollTrigger: {
              trigger: band,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      root
        .querySelectorAll(
          ".lm-precision-details figure,.lm-precision-life figure,.lm-audio-detail-grid figure,.lm-speaker-details figure,.lm-charger-angles figure,.lm-voltis-details figure,.lm-ultra-gallery figure,.lm-ultra-use figure",
        )
        .forEach((card, i) => {
          const img = card.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { y: 35, rotationZ: 0, scale: 0.97 },
            {
              y: 0,
              rotationZ: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "bottom 25%",
                scrub: 0.8,
              },
            },
          );
        });
      const footer = root.querySelector(".lm-footer");
      if (footer)
        gsap.fromTo(
          footer.querySelector(".lm-footer-logo"),
          { yPercent: 30, scale: 0.9, opacity: 0.2 },
          {
            yPercent: 0,
            scale: 1,
            opacity: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: footer,
              start: "top 85%",
              end: "bottom bottom",
              scrub: 1,
            },
          },
        );
      const chapterLinks = root.querySelectorAll(".lm-world-nav a");
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const link = [...chapterLinks].find(
              (a) => a.hash === "#" + entry.target.id,
            );
            if (link)
              link.setAttribute(
                "aria-current",
                entry.isIntersecting ? "true" : "false",
              );
          });
        },
        { rootMargin: "-25% 0px -25% 0px" },
      );
      chapterLinks.forEach((a) => {
        const target = root.querySelector(a.hash);
        if (target) navObserver.observe(target);
      });
      // Return DOM changes with the GSAP context, so route remounts remain clean.
      ctxCleanup = () => {
        navObserver.disconnect();
        splitHeadings.forEach(([h, html]) => (h.innerHTML = html));
      };
      const desk = root.querySelector(".lm-desk-editorial");
      if (desk) {
        gsap.fromTo(
          desk.querySelector("img"),
          { scale: 1.12, yPercent: -5 },
          {
            scale: 1.02,
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: desk,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
        gsap.fromTo(
          desk.querySelectorAll(".lm-motion-line"),
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: desk,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
      const travel = root.querySelector(".lm-pulse-travel");
      if (travel) {
        gsap.fromTo(
          travel,
          {
            rotateX: 15,
            scale: 0.94,
            opacity: 0.15,
            clipPath: "inset(12% 5% 12% 5% round 28px)",
            transformPerspective: 1400,
            transformOrigin: "center top",
          },
          {
            rotateX: 0,
            scale: 1,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: travel,
              start: "top 92%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
        gsap.fromTo(
          travel.querySelector("img"),
          { scale: 1.1, yPercent: -3 },
          {
            scale: 1.01,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: travel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }
      root
        .querySelectorAll(
          "#speaker-501>.lm-real-shot,#charging>.lm-real-shot,#voltis>.lm-real-shot,#mobile-power>.lm-real-shot",
        )
        .forEach((section, i) => {
          const img = section.querySelector(":scope>img");
          const direction = i % 2 ? -1 : 1;
          gsap.fromTo(
            img,
            {
              x: direction * -65,
              y: 65,
              rotationY: direction * -13,
              rotationZ: direction * -5,
              scale: 0.86,
              opacity: 0.25,
              transformPerspective: 1400,
            },
            {
              x: direction * 35,
              y: -45,
              rotationY: direction * 9,
              rotationZ: direction * 4,
              scale: 1.04,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom 12%",
                scrub: 1,
              },
            },
          );
          gsap.fromTo(
            section.querySelectorAll(".lm-scene-atmosphere,.lm-real-ghost"),
            { xPercent: -6, yPercent: 6 },
            {
              xPercent: 6,
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            },
          );
        });
      const color = root.querySelector(".lm-color-heading");
      if (color) {
        gsap.fromTo(
          color,
          { backgroundPosition: "100% 0" },
          {
            backgroundPosition: "0% 0",
            ease: "none",
            scrollTrigger: {
              trigger: color,
              start: "top 90%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );
      }
      const display = root.querySelector(".lm-charger-display");
      if (display) {
        const hand = display.querySelector(".lm-hand-image");
        gsap.fromTo(
          hand,
          { y: 30, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: display,
              start: "top 85%",
              end: "top 30%",
              scrub: 0.8,
            },
          },
        );
      }
      root.querySelectorAll(".lm-cable-pair article").forEach((card) => {
        gsap.fromTo(
          card.querySelector("img"),
          { y: 100, opacity: 0, x: 0, rotationZ: 0, scale: 1 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 40%",
              scrub: 0.8,
            },
          },
        );
      });
      const kit = root.querySelector(".lm-speaker-kit");
      if (kit) {
        gsap.fromTo(
          kit.querySelector("img"),
          { y: 65, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: kit,
              start: "top 90%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );
      }
      const cinema = root.querySelector(".lm-power-cinema");
      if (cinema) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cinema,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
        tl.fromTo(
          ".lm-power-cinema-main",
          { scale: 1.9, xPercent: 22, yPercent: 15, rotation: -12 },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power1.inOut",
          },
        )
          .to(
            ".lm-power-cinema-caption",
            { y: -50, opacity: 0, duration: 0.5 },
            0.8,
          )
          .to(
            ".lm-power-cinema-main",
            { xPercent: -40, scale: 1.2, opacity: 0, duration: 0.8 },
            1.4,
          )
          .fromTo(
            ".lm-power-cinema-detail",
            { opacity: 0, xPercent: 40, scale: 1.5 },
            {
              opacity: 1,
              xPercent: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            1.5,
          )
          .fromTo(
            ".lm-power-cinema-note",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            2,
          );
      }
      root.querySelectorAll(".lm-cable-life figure").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(10% 5% 10% 5% round 24px)",
            rotationX: 8,
            opacity: 0.2,
            transformPerspective: 1200,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            rotationX: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 42%",
              scrub: 1,
            },
          },
        );
        gsap.fromTo(
          card.querySelector("img"),
          { scale: 1.18, yPercent: i % 2 ? -6 : 6 },
          {
            scale: 1.03,
            yPercent: i % 2 ? 6 : -6,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          },
        );
      });
      const cable = root.querySelector("#power .lm-product>img");
      if (cable) {
        gsap.fromTo(
          cable,
          { rotationZ: -3, x: 0, y: 12, scale: 0.96 },
          {
            rotationZ: 3,
            x: 0,
            y: -8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#power",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }
      const edit = root.querySelector(".lm-collection");
      if (edit) {
        gsap.fromTo(
          edit.querySelector("h2"),
          { y: 70, opacity: 0.15, clipPath: "inset(0 0 80% 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: edit,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
        edit
          .querySelectorAll(".lm-tile")
          .forEach((tile, i) =>
            gsap.fromTo(
              tile.querySelector("img"),
              { y: 35, rotation: i % 2 ? 3 : -3 },
              {
                y: -25,
                rotation: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: tile,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            ),
          );
      }
    }, root);
    const refresh = () => ScrollTrigger.refresh();
    addEventListener("load", refresh);
    ScrollTrigger.refresh();
    return () => {
      removeEventListener("load", refresh);
      ctx.revert();
      ctxCleanup();
    };
  }, []);
  return null;
}
