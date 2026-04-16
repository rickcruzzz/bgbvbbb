import { useState, useEffect, useCallback, useRef, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { scrollToElementById, scrollToTop } from "@/lib/anchor-scroll";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#origem", label: "Origem" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
];

const SCROLL_ON = 48;
const SCROLL_OFF = 24;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const scrolledRef = useRef(scrolled);

  useEffect(() => {
    scrolledRef.current = scrolled;
  }, [scrolled]);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const y = window.scrollY;
      const current = scrolledRef.current;
      let next = current;
      if (current) {
        if (y < SCROLL_OFF) next = false;
      } else {
        if (y > SCROLL_ON) next = true;
      }
      if (next !== current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleInPageNav = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#") || href === "#") return;
    e.preventDefault();
    setMobileOpen(false);
    const run = () => scrollToElementById(href);
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  const handleLogoClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToTop();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? "border-b border-honey/10 bg-warm-brown-deep/98 shadow-lg"
          : "border-b border-transparent bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2.5">
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            Mel <span className="text-honey-gold">Duas Abelhas</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleInPageNav(e, link.href)}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-honey-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-honey px-6 py-2.5 text-sm font-bold text-warm-brown-deep shadow-honey transition-[background-color,box-shadow,transform] duration-300 hover:bg-honey-gold hover:shadow-honey-lg active:scale-95 sm:inline-flex"
          >
            Pedir agora
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-warm-brown-deep/98 px-5 pb-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleInPageNav(e, link.href)}
              className="block py-3 text-base font-medium text-white/80 transition-colors hover:text-honey-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full bg-honey py-3 text-base font-bold text-warm-brown-deep shadow-honey"
          >
            Pedir agora pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
