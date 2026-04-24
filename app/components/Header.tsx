"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";

const nav = [
  { label: "Stories", path: "/stories" },
  { label: "Science", path: "/science" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ps-header ${scrolled ? "ps-header--scrolled" : ""}`}>
      <div className="ps-header__inner">
        <Link href="/" className="ps-header__brand" aria-label="Pawsitive Science home">
          <Image
            src="/pawsitive-science-logo.png"
            alt="Pawsitive Science"
            width={180}
            height={60}
            priority
            className="ps-header__logo"
          />
        </Link>
        <nav className="ps-header__nav">
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
        <div className="ps-header__actions">
          <button type="button" className="ps-iconbtn" aria-label="Search">
            <Search />
          </button>
          <button type="button" className="ps-iconbtn" aria-label="Account">
            <User />
          </button>
          <Link href="/submit" className="ps-btn ps-btn--cta ps-btn--sm">
            Submit your story
          </Link>
        </div>
      </div>
    </header>
  );
}
