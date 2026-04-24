import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";
import type { Story } from "@/lib/content";

type Props = {
  story: Story;
  compact?: boolean;
};

export default function StoryCard({ story, compact }: Props) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className={`ps-story ${compact ? "ps-story--compact" : ""}`}
    >
      <div className="ps-story__photo">
        <PhotoPlaceholder label={story.photoHint ?? "Photograph"} />
      </div>
      <div className="ps-story__body">
        <div className="ps-eyebrow">
          {story.theme} · {story.readTime} min read
        </div>
        <h3 className="ps-story__title">{story.title}</h3>
        {!compact && <p className="ps-story__dek">{story.dek}</p>}
        <div className="ps-story__meta">
          By {story.author} · {story.date}
        </div>
      </div>
    </Link>
  );
}
