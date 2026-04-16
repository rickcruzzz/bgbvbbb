import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { inViewOnce } from "@/lib/motion-viewport";

type ProductCardBase = {
  eyebrow: string;
  name: string;
  description: string;
  badge: string;
  ctaLabel: string;
  ctaHref: string;
  index: number;
};

export type ProductCardProps = ProductCardBase &
  (
    | {
        layout: "photo";
        imageSrc: string;
        imageAlt: string;
      }
    | {
        layout: "service";
        icon: ReactNode;
        highlights: string[];
      }
  );

export function ProductCard(props: ProductCardProps) {
  const { eyebrow, name, description, badge, ctaLabel, ctaHref, index } = props;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewOnce}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-honey/12 bg-card shadow-[0_1px_0_rgba(40,35,30,0.04),0_14px_48px_-20px_rgba(40,30,22,0.14)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(40,35,30,0.06),0_20px_56px_-18px_rgba(40,30,22,0.18)]"
    >
      {/* Área visual — altura fixa e proporção única em todos os cards */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[linear-gradient(165deg,oklch(0.97_0.015_88)_0%,oklch(0.93_0.022_82)_45%,oklch(0.90_0.03_75)_100%)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.78 0.12 72 / 0.25), transparent 55%)",
          }}
        />

        {props.layout === "photo" ? (
          <div className="relative flex h-full w-full items-center justify-center p-6 pb-10 pt-8">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              width={360}
              height={280}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="max-h-[min(220px,52vw)] w-auto max-w-[82%] object-contain drop-shadow-[0_16px_32px_rgba(35,28,22,0.18)] transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:max-h-[240px] md:max-h-[min(260px,28vh)]"
            />
          </div>
        ) : (
          <div className="relative flex h-full flex-col justify-between p-7 pb-8 pt-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-honey/20 bg-white/60 text-honey-dark shadow-sm backdrop-blur-sm">
                {props.icon}
              </div>
            </div>
            <ul className="mt-6 space-y-2.5">
              {props.highlights.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm leading-snug text-warm-brown">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey/15 text-honey-dark">
                    <Check className="h-3 w-3 stroke-[2.5]" aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <span className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center rounded-md border border-honey/20 bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-brown shadow-sm backdrop-blur-[2px]">
          {badge}
        </span>
      </div>

      {/* Conteúdo — mesma estrutura e padding em todos */}
      <div className="flex flex-1 flex-col border-t border-honey/10 px-6 pb-6 pt-5 md:px-7 md:pb-7 md:pt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-honey-dark/80">
          {eyebrow}
        </p>
        <h3 className="mt-1.5 font-heading text-xl font-bold leading-snug tracking-tight text-foreground md:text-[1.35rem]">
          {name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
          {description}
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-warm-brown-deep px-5 py-3.5 text-sm font-semibold text-[oklch(0.96_0.04_85)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none ring-honey/40 transition-[background-color,transform,box-shadow] duration-200 hover:bg-warm-brown hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.99]"
        >
          {ctaLabel}
        </a>
      </div>
    </motion.article>
  );
}
