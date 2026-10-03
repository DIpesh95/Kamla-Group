import Hero from "@/components/Hero";
import BigStats from "@/components/BigStats";
import Legacy from "@/components/Legacy";
import VerticalChapters from "@/components/VerticalChapters";
import RealEstatePortfolio from "@/components/RealEstatePortfolio";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BigStats />
      <Legacy />
      <VerticalChapters />
      <RealEstatePortfolio />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
