import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "./components/Hero";
import StoryCard from "./components/StoryCard";
import StudyCard from "./components/StudyCard";
import Newsletter from "./components/Newsletter";
import { stories, studies } from "@/lib/content";

export default function HomePage() {
  const [featured, ...rest] = stories;
  const secondary = rest.slice(0, 3);
  const featuredStudy = studies[0];

  return (
    <>
      <Hero />

      <section className="ps-section">
        <div className="ps-section-head">
          <h2>The latest stories</h2>
          <Link href="/stories">
            All stories <ArrowRight />
          </Link>
        </div>
        <div className="ps-homefeatured">
          <StoryCard story={featured} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {secondary.map((s) => (
              <StoryCard key={s.slug} story={s} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="ps-section--sunken">
        <div className="ps-section__inner ps-section">
          <div className="ps-section-head">
            <h2>Featured study</h2>
            <Link href="/science">
              The science hub <ArrowRight />
            </Link>
          </div>
          <div style={{ maxWidth: 720 }}>
            <StudyCard study={featuredStudy} />
          </div>
        </div>
      </section>

      <section className="ps-section">
        <Newsletter />
      </section>
    </>
  );
}
