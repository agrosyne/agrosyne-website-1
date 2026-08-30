import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ContactForm />
        <ContactDetails />
      </main>

      <Footer />
    </>
  );
}