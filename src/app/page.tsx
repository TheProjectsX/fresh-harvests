import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/ProductsSection";
import SpecialOfferSection from "@/sections/SpecialOfferSection";

export default function Home() {
    return (
        <>
            {/* hero / Home Section */}
            <HeroSection />

            {/* Our Product Section */}
            <ProductsSection />

            {/* About Us Section */}
            <AboutSection />

            {/* Spacial Offer Section */}
            <SpecialOfferSection />
        </>
    );
}
