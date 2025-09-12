"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type SectionItem = { type: "section"; sectionId: string; label: string };
type PageItem = { type: "page"; href: string; label: string };
type RailItem = SectionItem | PageItem;

const ITEMS: RailItem[] = [
  { type: "section", sectionId: "home", label: "Home" },
  { type: "section", sectionId: "about", label: "About" },
  { type: "section", sectionId: "work", label: "Work" },               // scroll on /
  { type: "section", sectionId: "projects", label: "Projects" },              // new page
  { type: "section", sectionId: "contact", label: "Contact" },                // new page
];

// ---- helpers
function isSection(i: RailItem): i is SectionItem { return i.type === "section"; }

export default function SideNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionEls = useRef<HTMLElement[]>([]);

  const sectionIds = useMemo(() => ITEMS.filter(isSection).map(i => i.sectionId), []);

  // Observe sections only on the homepage
  useEffect(() => {
    if (pathname !== "/") return;

    sectionEls.current = sectionIds
      .map(id => document.getElementById(id) as HTMLElement | null)
      .filter((el): el is HTMLElement => !!el);

    if (sectionEls.current.length === 0) return;

    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: 0.4, rootMargin: "-15% 0px -35% 0px" }
    );
    sectionEls.current.forEach(el => io.observe(el));

    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best: { id: string; dist: number } | null = null;
      for (const el of sectionEls.current) {
        const dist = Math.abs(el.getBoundingClientRect().top - mid);
        if (!best || dist < best.dist) best = { id: el.id, dist };
      }
      if (best && best.id !== activeSection) setActiveSection(best.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, sectionIds, activeSection]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id); // instant feedback
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-6 top-0 bottom-0 z-50 flex flex-col justify-center gap-6">
      {ITEMS.map(item => {
        const isActive =
          item.type === "page"
            ? pathname === item.href
            : pathname === "/" && activeSection === item.sectionId;

        const tick =
          "block w-1 h-8 transition-all duration-200 " +
          (isActive ? "bg-white h-10" : "bg-neutral-600 hover:bg-white hover:h-10");

        if (item.type === "section") {
          // Only render section ticks on the homepage
          if (pathname !== "/") return null;
          return (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              onClick={scrollTo(item.sectionId)}
              aria-label={item.label}
              className={tick}
            />
          );
        }

        // page link
        return (
          <Link key={item.href} href={item.href} aria-label={item.label} className={tick} />
        );
      })}
    </nav>
  );
}