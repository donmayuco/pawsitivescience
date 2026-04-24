import Image from "next/image";
import Link from "next/link";

const cols: { h: string; links: { label: string; href: string }[] }[] = [
  {
    h: "Read",
    links: [
      { label: "Stories", href: "/stories" },
      { label: "Science", href: "/science" },
      { label: "Newsletter archive", href: "/newsletter" },
      { label: "About", href: "/about" },
    ],
  },
  {
    h: "Contribute",
    links: [
      { label: "Submit your story", href: "/submit" },
      { label: "For researchers", href: "/researchers" },
      { label: "For clinicians", href: "/clinicians" },
    ],
  },
  {
    h: "Shop",
    links: [
      { label: "All merchandise", href: "/shop" },
      { label: "Shipping & returns", href: "/shop/shipping" },
      { label: "Wholesale", href: "/shop/wholesale" },
    ],
  },
  {
    h: "Platform",
    links: [
      { label: "Account", href: "/account" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ps-footer">
      <div className="ps-footer__top">
        <div className="ps-footer__brand">
          <Image src="/logo-mark.png" alt="" width={44} height={44} />
          <div>
            <div className="ps-footer__wordmark">Pawsitive Science</div>
            <div className="ps-footer__tag">
              Stronger bonds. Healthier minds. Better lives.
            </div>
          </div>
        </div>
        <div className="ps-footer__cols">
          {cols.map((c) => (
            <div key={c.h} className="ps-footer__col">
              <div className="ps-footer__h">{c.h}</div>
              {c.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="ps-footer__bottom">
        <div>
          © {new Date().getFullYear()} Pawsitive Science. Independent journalism on
          the human–canine bond.
        </div>
        <div>
          Not medical advice. If you are in crisis, please contact a licensed
          clinician.
        </div>
      </div>
    </footer>
  );
}
