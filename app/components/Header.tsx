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
  <header className="w-full border-b border-slate-200 bg-white">
    <div className="mx-auto max-w-5xl px-4 py-4">
      {/* Logo row */}
      <div className="flex items-center gap-3">
        <Image
          src="/pawsitive-science-logo.png"
          alt="Pawsitive Science logo"
          width={180}
          height={60}
          priority
          className="w-[140px] sm:w-[180px] h-auto"
        />
      </div>

      {/* Nav row */}
      <nav className="mt-3 flex justify-end sm:mt-0 sm:justify-start">
        <Link className={linkClass("/about")} href="/about">
          About
        </Link>
      </nav>
    </div>
  </header>
);
}