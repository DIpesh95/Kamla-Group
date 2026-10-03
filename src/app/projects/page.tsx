import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { completedProjects, realEstateBrands } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "A portfolio of Kamala Group's completed residential and commercial projects across Mumbai, Pune, Delhi and Goa.",
};

const featured = [
  { image: "/images/hero-times-tower.jpg", name: "Times Tower", place: "Kamala City, Lower Parel" },
  { image: "/images/orra-tower.jpg", name: "Aquamarine", place: "Bandra (W) — Orra" },
  { image: "/images/sogo-tower.jpg", name: "Sogo Residences", place: "Central & Eastern Suburbs" },
  { image: "/images/prive-goa.jpg", name: "Rock N Roll Mall", place: "Mapusa, Goa — Privé" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A heritage of landmarks, across Mumbai and beyond."
        description="Over 100 residential and commercial projects delivered in Mumbai alone, with developments spanning Pune, Delhi and Goa — a portfolio built one project, one promise at a time."
      />

      {/* Featured */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Featured" title="A few landmarks" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.place}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full list by area */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Complete Portfolio"
            title="Completed projects, by area"
            description="A selection from Kamala Group's project gallery — organised by locality."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {completedProjects.map((group) => (
              <div
                key={group.area}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="font-serif text-xl text-ink">{group.area}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {group.projects.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brass" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands reference */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Sold Under"
            title="Our real estate brands"
          />
          <div className="mt-10 flex flex-wrap gap-4">
            {realEstateBrands.map((b) => (
              <span
                key={b.slug}
                className="rounded-full border border-line bg-white px-5 py-2 text-sm font-semibold text-ink"
              >
                {b.name} — {b.region}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
