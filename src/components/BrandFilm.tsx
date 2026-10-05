import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function BrandFilm() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <SectionLabel text="In Motion" dark />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ivory text-balance sm:text-5xl">
              Our buildings, our city, our story.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/55">
              From Kanti Apartment to the Gateway of India, from quiet
              lobbies to the Gabbana flagship — a short film of the places
              Kamala Group has helped shape across Mumbai.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="group relative mx-auto mt-14 aspect-[400/848] w-full max-w-[300px] overflow-hidden rounded-sm bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-ivory/15 sm:max-w-[380px] lg:max-w-[460px]">
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
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brass" />
              <span className="label text-ivory/90">Brand Film · 0:22</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
