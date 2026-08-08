import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Sectors from "@/components/home/Sectors";
import Services from "@/components/home/Services";
import Markets from "@/components/home/Markets";
import GlobalReach from "@/components/home/GlobalReach";
import Insights from "@/components/home/Insights";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Sectors />
      <Services />
      <Markets />
      <GlobalReach />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
}