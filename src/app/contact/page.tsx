import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Kamala Group — Mumbai corporate office and Goa office addresses, phone and email.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Get in Touch"
        title="We'd love to hear from you."
        description="Whether it's a project enquiry, a partnership idea, or simply a question — reach out to either of our offices."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-12 lg:col-span-5">
            <Reveal>
              <p className="label text-stone">Mumbai — Corporate Office</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                {contact.mumbai.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-sm text-stone">
                Tel: {contact.mumbai.phone}
                <br />
                Fax: {contact.mumbai.fax}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-line pt-8">
                <p className="label text-stone">Goa</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink">
                  {contact.goa.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-sm text-stone">
                  Tel: {contact.goa.phone}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-t border-line pt-8">
                <p className="label text-stone">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 inline-block font-serif text-2xl text-ink hover:text-brass"
                >
                  {contact.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="label text-stone">Send a Message</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-0">
        <div className="h-[420px] w-full grayscale">
          <iframe
            title="Kamala House, Kamala City, Lower Parel, Mumbai"
            src="https://maps.google.com/maps?q=Kamala%20City%2C%20Senapati%20Bapat%20Marg%2C%20Lower%20Parel%2C%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>
      </section>
    </>
  );
}
