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
      <header className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: logo + name */}
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src="/pawsitive-science-logo.png"
              alt="Pawsitive Science logo"
              width={180}
              height={60}
              priority
              className="h-auto w-[140px] sm:w-[180px] shrink-0"
            />
            <span className="text-sm font-medium text-zinc-600 truncate">
              PawsitiveScience
            </span>
          </div>
    
          {/* Right: nav */}
          <nav className="flex justify-end sm:justify-normal flex-shrink-0">
            <Link className={linkClass("/about")} href="/about">
              About
            </Link>
          </nav>
        </div>
      </header>
    );
}