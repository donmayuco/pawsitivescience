import Link from "next/link";
import {
  ArrowRight,
  Heart,
  FlaskConical,
  Link as LinkIcon,
  Stethoscope,
  Users,
  Moon,
} from "lucide-react";
import StudyCard from "../components/StudyCard";
import { studies, topics } from "@/lib/content";

const iconMap = {
  heart: Heart,
  flask: FlaskConical,
  link: LinkIcon,
  stethoscope: Stethoscope,
  users: Users,
  moon: Moon,
} as const;

export default function SciencePage() {
  return (
    <div className="ps-sciencepage">
      <header className="ps-sciencepage__head">
        <div className="ps-eyebrow">Research hub</div>
        <h1>What the science actually says.</h1>
        <p className="ps-lead">
          Curated, peer-reviewed studies on the mental-health benefits of the
          human–canine bond — summarized in plain language first, methodology
          and DOI second.
        </p>
      </header>

      <section className="ps-topicgrid">
        {topics.map((t) => {
          const Icon = iconMap[t.icon as keyof typeof iconMap] ?? Heart;
          return (
            <Link key={t.id} href={`/science#${t.id}`} className="ps-topic">
              <Icon />
              <div>
                <div className="ps-topic__name">{t.name}</div>
                <div className="ps-topic__count">{t.count} studies</div>
              </div>
            </Link>
          );
        })}
      </section>

      <section>
        <div className="ps-section-head">
          <h2>Featured studies</h2>
          <Link href="/science/all">
            All studies <ArrowRight />
          </Link>
        </div>
        <div className="ps-studies__grid">
          {studies.map((s) => (
            <StudyCard key={s.id} study={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
