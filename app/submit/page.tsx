import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { storyPrompts } from "@/lib/content";

export default function SubmitPage() {
  return (
    <main className="ps-submit">
      <header className="ps-submit__head">
        <div className="ps-eyebrow">Submit your story</div>
        <h1>Tell us about the dog who helped you keep going.</h1>
        <p className="ps-lead">
          Pawsitive Science is collecting honest, human stories about dogs who
          helped people survive, heal, reconnect, or keep moving when life felt
          impossible.
        </p>
      </header>

      <section className="ps-submit__intro">
        <h2>Your story does not need to be polished.</h2>
        <p>
          It can be messy, quiet, funny, painful, unfinished, or still unfolding.
          What matters is the moment: what your dog noticed, interrupted, carried,
          softened, or helped you do again.
        </p>
      </section>

      <section className="ps-submitgrid" aria-label="Story prompts">
        {storyPrompts.map((prompt) => (
          <article id={prompt.theme.toLowerCase()} key={prompt.theme} className="ps-submitcard">
            <div className="ps-promptcard__theme">{prompt.theme}</div>
            <h2>{prompt.title}</h2>
            <p className="ps-submitcard__question">{prompt.question}</p>
            <p>{prompt.details}</p>
          </article>
        ))}
      </section>

      <section className="ps-submit__next">
        <div>
          <div className="ps-eyebrow">Coming next</div>
          <h2>A private submission form</h2>
          <p>
            The public prompts are ready. The next step is wiring a private form
            so people can safely send stories, photos, permissions, and follow-up
            contact information.
          </p>
        </div>
        <Link href="/stories" className="ps-btn ps-btn--primary">
          Read the archive <ArrowRight />
        </Link>
      </section>
    </main>
  );
}
