import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="ps-about">
      <header className="ps-about__head">
        <div className="ps-eyebrow">About</div>
        <h1>
          We write about what a dog does to a person — and what the research
          actually shows.
        </h1>
        <p className="ps-lead">
          Pawsitive Science is an independent publication about the science-backed
          connection between humans and dogs, and the specific ways healthy
          interactions with dogs support psychological, emotional, and physical
          well-being in the people who live with them.
        </p>
      </header>

      <div className="ps-about__grid">
        <div className="ps-about__card">
          <h3>Mental &amp; emotional health</h3>
          <p>
            Stress relief, mood support, secure attachment, and the kind of
            day-to-day resilience that builds slowly and then all at once.
          </p>
        </div>
        <div className="ps-about__card">
          <h3>Daily habits that help</h3>
          <p>
            Simple, specific routines — sniff walks, calm greetings,
            five-minute enrichment — that improve life for both of you.
          </p>
        </div>
        <div className="ps-about__card">
          <h3>Evidence-first</h3>
          <p>
            Clear, practical summaries of peer-reviewed research, with the DOI
            in plain view and the caveats where they belong.
          </p>
        </div>
      </div>

      <div className="ps-about__block">
        <h2>Our mission</h2>
        <p>
          Help people build healthier lives through science-informed relationships
          with dogs — by teaching simple, intentional interactions that support
          human well-being, and by refusing to overpromise about what a dog can do.
        </p>
      </div>

      <div className="ps-about__block">
        <h2>What you&apos;ll find here</h2>
        <ul>
          <li>First-person stories grounded in the research behind them</li>
          <li>Plain-language summaries of peer-reviewed studies</li>
          <li>Daily protocols small enough to actually do on a bad day</li>
          <li>Honest framing when the science is mixed or the claim is thin</li>
        </ul>
      </div>

      <div className="ps-about__block" style={{ borderLeft: "3px solid var(--ps-amber)" }}>
        <h2>Want a simple starting point?</h2>
        <p>
          Start with one small, consistent habit: a daily sniff walk, a calm
          greeting ritual, or a five-minute enrichment break that helps both
          you and your dog reset.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <Link href="/stories" className="ps-btn ps-btn--primary">
            Read a story <ArrowRight />
          </Link>
          <Link href="/science" className="ps-btn ps-btn--secondary">
            Explore the science
          </Link>
        </div>
      </div>
    </div>
  );
}
