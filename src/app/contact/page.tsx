import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you."
        description="Whether it's a project enquiry, a partnership idea, or simply a question — reach out to either of our offices."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-serif text-xl text-ink">
                {contact.mumbai.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {contact.mumbai.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Tel: {contact.mumbai.phone}
                <br />
                Fax: {contact.mumbai.fax}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-serif text-xl text-ink">
                {contact.goa.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {contact.goa.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Tel: {contact.goa.phone}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-serif text-xl text-ink">Email</h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block text-sm font-semibold text-brass-dark hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7">
            <h3 className="font-serif text-xl text-ink">Send a message</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Fill this in and your email client will open with the message
              ready to send to us.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Kamala House, Kamala City, Lower Parel, Mumbai"
              src="https://maps.google.com/maps?q=Kamala%20City%2C%20Senapati%20Bapat%20Marg%2C%20Lower%20Parel%2C%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
