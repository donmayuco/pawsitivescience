import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="ps-hero">
      <div className="ps-hero__text">
        <div className="ps-eyebrow">Stories of survival, healing, and the dogs who stayed</div>
        <h1 className="ps-display">
          The dog who helped you <em>keep going</em>.
        </h1>
        <p className="ps-lead">
          Pawsitive Science honors the stories of people whose dogs helped them
          survive, heal, reconnect, or make it through life when it felt impossible.
        </p>
        <div className="ps-hero__ctas">
          <Link href="/submit" className="ps-btn ps-btn--primary">
            Tell your story <ArrowRight />
          </Link>
          <Link href="/stories" className="ps-btn ps-btn--secondary">
            Read stories
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
