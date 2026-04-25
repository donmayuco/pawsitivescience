"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Stories", path: "/stories" },
  { label: "Science", path: "/science" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ps-header ${scrolled ? "ps-header--scrolled" : ""}`}>
      <div className="ps-header__inner">
        <Link href="/" className="ps-header__brand" aria-label="Pawsitive Science home">
          <Image
            src="/paw-mark.png"
            alt=""
            width={1254}
            height={1254}
            priority
            className="ps-header__mark"
          />
          <span className="ps-header__brandcopy">
            <span className="ps-header__wordmark">
              <span className="ps-header__wordmark-paw">PAWSITIVE</span>
              <span className="ps-header__wordmark-sci">SCIENCE</span>
            </span>
            <span className="ps-header__tagline">Stories of survival, healing, and the dogs who stayed.</span>
          </span>
        </Link>

        <nav className="ps-header__nav" aria-label="Primary navigation">
          {nav.map((n) => {
            const active = pathname === n.path || (n.path !== "/" && pathname?.startsWith(n.path));
            return (
              <Link
                key={n.path}
                href={n.path}
                className={`ps-header__link ${active ? "is-active" : ""}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/submit" className="ps-btn ps-btn--cta ps-btn--sm ps-header__cta">
          Share your story
        </Link>
      </div>
    </header>
  );
}
