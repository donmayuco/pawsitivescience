"use client";

import { useMemo, useState } from "react";
import StoryCard from "../components/StoryCard";
import { stories, themes } from "@/lib/content";

export default function StoriesPage() {
  const [active, setActive] = useState<(typeof themes)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return stories;
    return stories.filter((s) => s.theme === active);
  }, [active]);

  return (
    <>
      <header className="ps-storiesindex__head">
        <div className="ps-eyebrow">Stories</div>
        <h1>People who found out their dog was part of the protocol.</h1>
        <p className="ps-lead">
          First-person writing about the quiet, specific ways a dog changes a
          life. Every story links to the peer-reviewed research behind what you
          just read.
        </p>
      </header>
      <div className="ps-filters">
        {themes.map((t) => (
          <button
            key={t}
            type="button"
            className={`ps-chip ${active === t ? "is-active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <section className="ps-storiesgrid">
        {filtered.map((s) => (
          <StoryCard key={s.slug} story={s} />
        ))}
      </section>
    </>
  );
}
