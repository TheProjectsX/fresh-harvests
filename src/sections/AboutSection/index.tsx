import AboutImage from "@/assets/images/about-image.png";
import LogoWithTextImage from "@/assets/images/logo-with-text.png";
import ProductPreview from "@/assets/images/about-product-preview.png";
import LeafImage from "@/assets/images/leaf.png";
import ThoughtLinesImage from "@/assets/images/thought-lines.png";

import { SectionHeading } from "@/component/Heading";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
    return (
        <section className="max-width flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="relative md:bottom-10 w-full flex-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-96 md:max-w-lg">
                    {/* Image */}
                    <Image
                        width={AboutImage.width}
                        height={AboutImage.height}
                        src={AboutImage.src}
                        alt="About Image"
                        className="w-full rounded-full"
                    />
                    <div className="absolute right-12 -bottom-4 flex flex-col items-end gap-2">
                        <Image
                            width={LogoWithTextImage.width}
                            height={LogoWithTextImage.height}
                            src={LogoWithTextImage.src}
                            alt="Logo with Text"
                            className="w-[35%] rounded-md drop-shadow-2xl relative right-[5%]"
                        />
                        <Image
                            width={ProductPreview.width}
                            height={ProductPreview.height}
                            src={ProductPreview.src}
                            alt="About Product Preview"
                            className="w-[30%] rounded-xl drop-shadow-2xl"
                        />

                        {/* Thought Lines */}
                        <Image
                            src={ThoughtLinesImage.src}
                            alt="Thought Lines"
                            width={ThoughtLinesImage.width}
                            height={ThoughtLinesImage.height}
                            className="absolute -right-8 sm:-right-10 top-2 w-8 sm:w-12 h-auto rotate-[15deg] drop-shadow-2xl"
                        />
                    </div>

                    {/* Leaf */}
                    <Image
                        src={LeafImage.src}
                        alt="Leaf"
                        width={LeafImage.width}
                        height={LeafImage.height}
                        className="absolute right-[4%] top-[15%] w-14 sm:w-18 h-auto rotate-[-45deg] drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Content */}
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
