import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "./components/Hero";
import Overview from "./components/Overview";
import GlobalSupply from "./components/GlobalSupply";
import SupplyProcess from "./components/SupplyProcess";

export default function SectorsPage() {
  return (
    <>
      <Header />

      <main>

        <Hero />
        <Overview />
        <GlobalSupply />
        <SupplyProcess />

      </main>

      <Footer />
    </>
  );
}