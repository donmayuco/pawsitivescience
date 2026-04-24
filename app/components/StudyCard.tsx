import { ExternalLink } from "lucide-react";
import type { Study } from "@/lib/content";

type Props = {
  study: Study;
};

export default function StudyCard({ study }: Props) {
  return (
    <a
      href={`https://doi.org/${study.doi}`}
      target="_blank"
      rel="noopener noreferrer"
      className="ps-study"
    >
      <div className="ps-study__row">
        <div className="ps-study__journal">
          {study.journal} · {study.year}
        </div>
        {study.peerReviewed && (
          <span className="ps-badge ps-badge--peer">Peer-reviewed</span>
        )}
      </div>
      <h3 className="ps-study__title">{study.title}</h3>
      <p className="ps-study__summary">{study.summary}</p>
      <div className="ps-study__foot">
        <span className="ps-study__doi">
          <ExternalLink /> DOI · {study.doi}
        </span>
        <span className="ps-study__topic">{study.topic}</span>
      </div>
    </a>
  );
}
