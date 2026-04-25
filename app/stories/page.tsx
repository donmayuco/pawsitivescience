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
        <h1>Real stories about the dogs who helped people keep going.</h1>
        <p className="ps-lead">
          Depression, PTSD, loneliness, anxiety, grief, recovery: this archive
          is for the human moments when a dog became structure, safety, contact,
          or a reason to make it through the day.
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
