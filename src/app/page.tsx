import Header from "@/components/header";
import { HeroCarousel } from "@/components/HeroCarousel";
import IconsGallery from "@/components/IconsGallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <IconsGallery />
      <Footer />
    </div>
  );
}
