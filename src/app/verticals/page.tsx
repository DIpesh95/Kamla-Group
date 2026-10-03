import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import VerticalCard from "@/components/VerticalCard";
import { verticals } from "@/lib/data";

export const metadata = {
  title: "Business Verticals",
  description:
    "Real Estate, Power, Hospitality, Fashion, HR Solutions and Tours & Travels — the six business verticals of Kamala Group.",
};

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six verticals. One set of principles."
        description="Standing tall on the foundation of real estate, Kamala Group has diversified into Power, Hospitality, Fashion, HR Solutions and Tours & Travels — each built with the same focus on quality, trust and long-term value."
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <VerticalCard key={v.slug} vertical={v} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
