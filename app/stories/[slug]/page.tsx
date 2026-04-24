import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PhotoPlaceholder from "../../components/PhotoPlaceholder";
import { getStory, getStudy, stories } from "@/lib/content";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const related = (story.relatedStudyIds ?? [])
    .map((id) => getStudy(id))
    .filter(Boolean);

  const pullIndex = Math.min(2, story.body.length - 1);

  return (
    <article className="ps-storypage">
      <Link href="/stories" className="ps-storypage__back">
        <ArrowLeft /> Back to stories
      </Link>

      <header className="ps-storypage__head">
        <div className="ps-eyebrow">
          {story.theme} · {story.readTime} min read
        </div>
        <h1 className="ps-storypage__title">{story.title}</h1>
        <p className="ps-lead">{story.dek}</p>
        <div className="ps-storypage__byline">
          By <strong>{story.author}</strong> · {story.date}
        </div>
      </header>

      <div className="ps-storypage__hero">
        <PhotoPlaceholder
          large
          label="Full-bleed editorial photograph"
          small="warm natural light, shallow depth of field"
        />
      </div>

      <div className="ps-storypage__grid">
        <div className="ps-storypage__prose">
          {story.body.map((p, i) => (
            <div key={i}>
              <p>{p}</p>
              {i === pullIndex && story.pullQuote && (
                <blockquote className="ps-pullquote">
                  <span aria-hidden="true">&ldquo;</span>
                  {story.pullQuote}
                  <span aria-hidden="true">&rdquo;</span>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        <aside className="ps-storypage__sidebar">
          <div className="ps-sidebox">
            <div className="ps-eyebrow">The science behind this</div>
            <div className="ps-sidebox__studies">
              {related.length === 0 && (
                <div className="ps-sidebox__j">
                  Research citations coming soon.
                </div>
              )}
              {related.map(
                (s) =>
                  s && (
                    <a
                      key={s.id}
                      href={`https://doi.org/${s.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ps-sidebox__study"
                    >
                      <div className="ps-sidebox__t">{s.title}</div>
                      <div className="ps-sidebox__j">
                        {s.journal} · {s.year}
                      </div>
                    </a>
                  ),
              )}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
