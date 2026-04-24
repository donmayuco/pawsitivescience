import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="ps-hero">
      <div className="ps-hero__text">
        <div className="ps-eyebrow">A magazine about the human–canine bond</div>
        <h1 className="ps-display">
          The bond is <em>the medicine</em>.
        </h1>
        <p className="ps-lead">
          Stories and science on how dogs help us hold on to our mental health
          — and what the research is quietly telling us about why.
        </p>
        <div className="ps-hero__ctas">
          <Link href="/stories" className="ps-btn ps-btn--primary">
            Read a story <ArrowRight />
          </Link>
          <Link href="/science" className="ps-btn ps-btn--secondary">
            Explore the science
          </Link>
        </div>
      </div>
      <div className="ps-hero__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ps-hero__rings" src="/atomic-rings.svg" alt="" aria-hidden="true" />
        <div className="ps-hero__photo">
          <Image
            src="/hero-magazine.png"
            alt="Pawsitive Science — Summer 2024 cover: The Healing Bond"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 540px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
