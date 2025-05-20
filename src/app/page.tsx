import Footer from "../components/footer";
import Header from "../components/header";
import FurnitureRecommendations from "../components/sections/furniture-recomendation";
import Hero from "../components/sections/hero";
import LimitedDeals from "../components/sections/limited-deals";
import Partners from "../components/sections/partners";
import ProductShowcase from "../components/sections/product-showcase";
import WhyUs from "../components/sections/why-us";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="bg-background">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Partner Section */}
        <Partners />

        {/* Furniture Recommendation Section */}
        <FurnitureRecommendations />

        {/* Our Products Section */}
        <ProductShowcase />

        {/* Limited Deals Section */}
        <LimitedDeals />

        {/* Footer Section */}
        <Footer />
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  );
}
