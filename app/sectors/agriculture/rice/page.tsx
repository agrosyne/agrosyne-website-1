import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import SupplySection from "./components/SupplySection";
import RicePortfolio from "./components/RicePortfolio";
import Industries from "./components/Industries";
import Quality from "./components/Quality";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

export default function RicePage() {
  return (
    <>
      <Header />

      <main className="bg-white">
   <Hero /> 
   <SupplySection /> 
   <RicePortfolio /> 
   <Industries /> 
   <Quality /> 
   <Timeline /> 
   <WhyChooseUs /> 
   <FAQ /> 
</main>

      <Footer />
    </>
  );
}