import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFEBE9] text-[#333333]">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
