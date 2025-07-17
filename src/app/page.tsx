import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/ProductsSection";

export default function Home() {
    return (
        <>
            {/* hero / Home Section */}
            <HeroSection />

            {/* Our Product Section */}
            <ProductsSection />

            {/* About Us Section */}
            <AboutSection />
        </>
    );
}
