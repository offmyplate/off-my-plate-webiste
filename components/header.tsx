import { CtaLink } from "./cta-link";
import { BrandMark } from "./brand-mark";
import { contactUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="Off My Plate home">
          <BrandMark preload />
          <span className="brand-name">Off My Plate</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#automate">What we automate</a>
          <a href="#process">How it works</a>
        </nav>
        <CtaLink className="nav-cta" href={contactUrl} location="header">
          Discuss a workflow
        </CtaLink>
      </div>
    </header>
  );
}
