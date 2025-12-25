"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:underline ${
      pathname === href ? "underline font-semibold text-zinc-900" : "text-zinc-700"
    }`;

    return (
        <header className="relative">
          {/* teal line across the header */}
          <div className="pointer-events-none absolute left-0 right-0 top-[70%] h-[3px] bg-teal-600/70" />
      
          {/* header content sits above the line */}
          <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <Image
                src="/pawsitive-science-logo.png"
                alt="Pawsitive Science logo"
                width={180}
                height={60}
                priority
              />
              <span className="text-sm font-medium text-zinc-600">PawsitiveScience</span>
            </div>
      
            <nav className="flex items-center gap-4 text-sm">
              <Link className={linkClass("/about")} href="/about">About</Link>
            </nav>
          </div>
        </header>
      );
}