"use client";

import AboutSection from "@/sections/AboutSection";
import BlogSection from "@/sections/BlogSection";
import HeroSection from "@/sections/HeroSection";
import ProductsSection from "@/sections/ProductsSection";
import SpecialOfferSection from "@/sections/SpecialOfferSection";
import TestimonialSection from "@/sections/TestimonialSection";
import store from "@/store/app/store";
import { Provider } from "react-redux";

export default function Home() {
    return (
        <Provider store={store}>
            {/* hero / Home Section */}
            <HeroSection />

            {/* Our Product Section */}
            <ProductsSection />

            {/* About Us Section */}
            <AboutSection />

            {/* Spacial Offer Section */}
            <SpecialOfferSection />

            {/* Testimonial Section */}
            <TestimonialSection />

            {/* Blog Posts Section */}
            <BlogSection />
        </Provider>
    );
}
