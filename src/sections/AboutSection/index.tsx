import AboutImage from "@/assets/images/about-image.png";
import ProductPreview from "@/assets/images/about-product-preview.png";
import { SectionHeading } from "@/component/Heading";
import React from "react";

const AboutSection = () => {
    return (
        <section className="max-width flex flex-col md:flex-row items-center gap-10">
            <div className="relative md:bottom-10 w-full flex-1/2 flex items-center justify-center">
                {/* BG */}

                <div className="relative w-full max-w-96 md:max-w-lg">
                    {/* Image */}
                    <img
                        src={AboutImage.src}
                        alt="About Image"
                        className="w-full rounded-full"
                    />
                    <img src={ProductPreview.src} alt="About Product Preview" className="w-2/6 rounded-xl absolute right-10 bottom-0 shadow-2xl"/>

                    {/* <div className="absolute bottom-0 left-0 right-0 aspect-square bg-secondary rounded-full"></div> */}
                </div>
            </div>

            <div className="flex-1/2">
                <SectionHeading content="About Us" />
                <h3 className="font-medium text-3xl md:text-5xl mb-5">
                    About Fresh Harvest
                </h3>
                <p className="text-sm font-primary mb-7">
                    Welcome to Fresh Harvest, your premier destination for
                    high-quality and fresh produce. We are passionate about
                    providing you with the finest fruits, vegetables, and salad
                    ingredients to nourish your body and delight your taste
                    buds. With a commitment to excellence, sustainability, and
                    customer satisfaction, Fresh Harvest is here to
                    revolutionize your grocery shopping experience.
                </p>

                <button className="px-6 py-2 rounded-md font-medium text-primary border border-primary hover:bg-primary hover:text-white hover:border-white cursor-pointer active:scale-95 transition-[scale] duration-300">
                    Read More
                </button>
            </div>
        </section>
    );
};

export default AboutSection;
