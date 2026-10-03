import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { completedProjects, realEstateBrands } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "A portfolio of Kamala Group's completed residential and commercial projects across Mumbai, Pune, Delhi and Goa.",
};

const featured = [
  {
    image: "/images/hero-times-tower.jpg",
    name: "Times Tower",
    place: "Kamala City, Lower Parel",
    category: "Commercial",
  },
  {
    image: "/images/orra-tower.jpg",
    name: "Aquamarine",
    place: "Bandra (W) — Orra",
    category: "Luxury Residential",
  },
  {
    image: "/images/sogo-tower.jpg",
    name: "Sogo Residences",
    place: "Central & Eastern Suburbs",
    category: "Redevelopment",
  },
  {
    image: "/images/prive-goa.jpg",
    name: "Rock N Roll Mall",
    place: "Mapusa, Goa — Privé",
    category: "Retail",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative flex h-[82vh] min-h-[480px] w-full items-end overflow-hidden bg-ink">
        <Image
          src="/images/hero-times-tower.jpg"
          alt="Kamala Group project portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <Container className="relative w-full pt-40 pb-16 sm:pb-20">
          <SectionLabel text="Portfolio" dark />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] text-ivory text-balance sm:text-7xl">
            A heritage of landmarks, across Mumbai and beyond.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/60">
            Over 100 residential and commercial projects delivered in
            Mumbai alone, with developments spanning Pune, Delhi and Goa.
          </p>
        </Container>
      </section>

      {/* Featured */}
      <section className="bg-ivory py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel text="Featured" />
          </Reveal>
        </Container>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.name}>
              <div>
                <Container>
                  <div className="flex items-baseline justify-between pb-5">
                    <span className="label text-stone-light">
                      0{i + 1} / 0{featured.length}
                    </span>
                    <span className="label text-brass">{p.category}</span>
                  </div>
                </Container>
                <div className="img-hover relative h-[48vh] min-h-[280px] w-full sm:h-[62vh]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                  <Container className="absolute inset-0 flex items-end pb-8">
                    <div>
                      <h3 className="font-serif text-4xl text-ivory sm:text-6xl">
                        {p.name}
                      </h3>
                      <p className="label mt-3 text-ivory/70">{p.place}</p>
                    </div>
                  </Container>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full index */}
      <section className="bg-ink py-24 text-ivory sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel text="Complete Index" dark />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-ivory text-balance sm:text-5xl">
              Completed projects, by area.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:mt-20 md:grid-cols-2">
            {completedProjects.map((group, gi) => (
              <Reveal key={group.area} delay={0.05 * gi}>
                <div>
                  <p className="label text-brass">{group.area}</p>
                  <ul className="mt-5 divide-y divide-ivory/10 border-t border-ivory/10">
                    {group.projects.map((p) => (
                      <li
                        key={p}
                        className="py-3 text-sm text-ivory/65"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands reference */}
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionLabel text="Sold Under" />
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {realEstateBrands.map((b) => (
              <span key={b.slug} className="font-serif text-xl text-ink">
                {b.name}
                <span className="ml-3 text-sm font-sans text-stone">
                  {b.region}
                </span>
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
