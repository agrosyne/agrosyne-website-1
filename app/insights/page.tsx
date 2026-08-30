import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/insights/Hero";
import FeaturedPost from "@/components/insights/FeaturedPost";
import InsightsContent from "@/components/insights/InsightsContent";
import Newsletter from "@/components/insights/Newsletter";

export default function InsightsPage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedPost />
      <InsightsContent />
      <Newsletter />
      
      <Footer />
    </>
  );
}