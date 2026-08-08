import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import SupplySection from "./components/SupplySection";
import OilPortfolio from "./components/OilPortfolio";
import Industries from "./components/Industries";
import Quality from "./components/Quality"
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

export default function SugarPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
   <Hero /> 
   <SupplySection /> 
   <OilPortfolio /> 
   <Industries /> 
   <Quality />  
   <WhyChooseUs /> 
   <FAQ /> 
</main>

      <Footer />
    </>
  );
}