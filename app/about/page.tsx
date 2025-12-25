// app/about/page.tsx
import { Heart, Sparkles, ShieldCheck, PawPrint } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />

      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:18px_18px]" />

      <section className="mx-auto max-w-4xl px-6 py-14">
        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-600" />
            Science-backed human–dog wellness
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About <span className="text-sky-700">PawsitiveScience</span>
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Pawsitive Science explores the science-backed connection between humans and dogs —
            and how healthy interactions with dogs can support <b>human psychological</b>,
            <b> emotional</b>, and <b>physical well-being</b>. We focus especially on how
            humans benefit: lower stress, improved mood, more movement, and stronger social connection.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={<Heart className="h-5 w-5 text-sky-700" />}
            title="Mental & emotional health"
            text="Stress relief, mood support, connection, and resilience."
          />
          <FeatureCard
            icon={<PawPrint className="h-5 w-5 text-sky-700" />}
            title="Daily habits that help"
            text="Simple routines that improve life with dogs (for both of you)."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5 text-sky-700" />}
            title="Evidence-first"
            text="Clear, practical summaries of research with real-life takeaways."
          />
        </div>

        {/* Content sections */}
        <div className="mt-10 space-y-6">
          <InfoBlock title="Our mission">
            Help people build healthier lives through science-informed relationships with dogs —
            by teaching simple, intentional interactions that support human well-being.
          </InfoBlock>

          <InfoBlock title="What you’ll find here">
            <ul className="mt-2 space-y-2 text-slate-700">
              <li>• Science-backed guides for everyday dog owners</li>
              <li>• Myth-busting on common dog wellness advice</li>
              <li>• Simple checklists you can follow in minutes</li>
              <li>• Vet-prep questions so you show up informed</li>
            </ul>
          </InfoBlock>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-sky-100 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold text-slate-900">Want a simple starting point?</h2>
            <p className="mt-2 text-slate-700">
              Start with one small, consistent habit: a daily sniff walk, a calm greeting ritual, or
              a 5-minute enrichment break that helps both you and your dog reset.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-800"
              >
                Explore articles
                
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-sky-50"
              >
                Contact
                
              </a>
            </div>
          </div>
        </div>
     {/* Coming soon notice */}
<section className="mx-auto max-w-3xl px-6 py-16 text-center">
  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6">
    <p className="text-sm font-medium text-slate-600">
      More guides and research summaries coming soon.
    </p>
  </div>
</section> </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="rounded-xl bg-sky-50 p-2">{icon}</div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white/70 p-6 shadow-sm backdrop-blur">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}