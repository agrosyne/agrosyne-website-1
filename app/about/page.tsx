import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import CompanyStory from "./components/CompanyStory";
import MissionVision from "./components/MissionVision";
import WhyAgrosyne from "./components/WhyAgrosyne";
import GlobalPresence from "./components/GlobalPresence";
import Industries from "./components/Industries";
import Timeline from "./components/Timeline";


export default function AboutPage() {
  return (
    <>
      <Header />

      <Hero />
      <CompanyStory />
      <MissionVision />
      <WhyAgrosyne />
      <GlobalPresence />
      <Industries />
      <Timeline />

      <Footer />
    </>
  );
}