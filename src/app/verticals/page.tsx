import PageIntro from "@/components/PageIntro";
import VerticalChapters from "@/components/VerticalChapters";

export const metadata = {
  title: "Businesses",
  description:
    "Real Estate, Power, Hospitality, Fashion, HR Solutions and Tours & Travels — the six businesses of Kamala Group.",
};

export default function VerticalsPage() {
  return (
    <>
      <PageIntro
        label="What We Do"
        title="Six businesses. One set of principles."
        description="Standing tall on the foundation of real estate, Kamala Group has diversified into Power, Hospitality, Fashion, HR Solutions and Tours & Travels — each built with the same focus on quality, trust and long-term value."
      />
      <VerticalChapters showIntro={false} />
    </>
  );
}
