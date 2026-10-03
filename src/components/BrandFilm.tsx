import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function BrandFilm() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel text="In Motion" dark />
              <h2 className="mt-6 font-serif text-3xl leading-tight text-ivory text-balance sm:text-4xl">
                Our buildings, our city, our story.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/55">
                From Kanti Apartment to the Gateway of India, from quiet
                lobbies to the Gabbana flagship — a short look at the places
                Kamala Group has helped shape across Mumbai.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <div className="relative mx-auto aspect-[400/848] w-full max-w-[320px] overflow-hidden bg-black ring-1 ring-ivory/10">
                <video
                  src="/videos/brand-film.mp4"
                  poster="/images/mumbai-gateway.jpg"
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
