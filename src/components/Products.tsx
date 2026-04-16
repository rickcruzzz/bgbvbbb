import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { inViewOnce } from "@/lib/motion-viewport";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import produtoTrio from "@/assets/produto-trio.png";
import { ProductCard, type ProductCardProps } from "./products/ProductCard";

const wa = {
  garrafa: buildWhatsAppUrl(
    "Olá! Vi no site e quero comprar o Mel Duas Abelhas 500ml (garrafa única). Pode me passar valor e opções de entrega em Salvador/RMS?",
  ),
  kit: buildWhatsAppUrl(
    "Olá! Tenho interesse no Kit Econômico com 3 garrafas de 500ml. Pode enviar o valor especial e prazos de entrega?",
  ),
  custom: buildWhatsAppUrl(
    "Olá! Preciso de um pedido personalizado (atacado, evento ou quantidade maior). Podemos conversar sobre valores e condições?",
  ),
};

const cards: ProductCardProps[] = [
  {
    layout: "photo",
    imageSrc: produtoGarrafa,
    imageAlt: "Garrafa Mel Duas Abelhas 500 ml — mel puro de abelha italiana",
    eyebrow: "Garrafa · 500 ml",
    name: "Mel Duas Abelhas",
    description:
      "Mel puro 100% natural, abelha italiana, extraído em Riachão do Jacuípe. O ponto de partida ideal para provar a diferença.",
    badge: "Mais pedido",
    ctaLabel: "Pedir esta garrafa",
    ctaHref: wa.garrafa,
    index: 0,
  },
  {
    layout: "photo",
    imageSrc: produtoTrio,
    imageAlt: "Kit com três garrafas de mel Mel Duas Abelhas 500 ml",
    eyebrow: "Kit · 3 × 500 ml",
    name: "Kit econômico",
    description:
      "Três garrafas com condição especial para quem já conhece o produto e quer garantir estoque em casa ou no negócio.",
    badge: "Melhor custo por litro",
    ctaLabel: "Consultar kit",
    ctaHref: wa.kit,
    index: 1,
  },
  {
    layout: "service",
    icon: <Package className="h-6 w-6" strokeWidth={1.75} aria-hidden />,
    highlights: [
      "Atacado, eventos corporativos e cestas",
      "Proposta alinhada ao seu volume e prazo",
      "Atendimento direto com o produtor",
    ],
    eyebrow: "Sob consulta",
    name: "Pedidos personalizados",
    description:
      "Volumes maiores, kits para presente ou demandas recorrentes. Organizamos entrega e condições com transparência.",
    badge: "Empresas & eventos",
    ctaLabel: "Falar sobre volumes",
    ctaHref: wa.custom,
    index: 2,
  },
];

export function Products() {
  return (
    <section
      id="produtos"
      className="relative overflow-hidden border-t border-honey/8 bg-[oklch(0.975_0.012_88)] py-20 md:py-28"
      aria-labelledby="produtos-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-honeycomb opacity-[0.22]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-honey/25 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.header
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-honey-dark/85">
            Vitrine
          </p>
          <h2
            id="produtos-heading"
            className="mt-3 font-heading text-[1.65rem] font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            Mel puro, <span className="text-gradient-honey">com a cara da nossa terra</span>
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
            Produção familiar no sertão da Bahia. Entregas em Salvador e RMS — transparência do
            apiário à sua mesa.
          </p>
        </motion.header>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <ProductCard key={card.name} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
