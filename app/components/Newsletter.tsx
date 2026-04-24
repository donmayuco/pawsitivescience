"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="ps-newsletter">
      <div className="ps-newsletter__rings" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/atomic-rings.svg" alt="" />
      </div>
      <div className="ps-newsletter__text">
        <div className="ps-eyebrow">The weekly digest</div>
        <h2>One story. One study. One email a week.</h2>
        <p className="ps-lead">No spam, ever — and it&apos;s easy to leave.</p>
      </div>
      <form
        className="ps-newsletter__form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <div className="ps-newsletter__ok">
            <Check /> You&apos;re on the list. Thanks, {email || "friend"}.
          </div>
        ) : (
          <div className="ps-inline-field">
            <input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="ps-btn ps-btn--cta" type="submit">
              Subscribe
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
