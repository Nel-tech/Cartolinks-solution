import Header from "@/components/header";
import { HeroCarousel } from "@/components/HeroCarousel";
import Generate from "@/components/Generate";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <Generate />
      <Footer />
    </div>
  );
}
