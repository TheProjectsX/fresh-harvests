import HeroImage from "@/assets/images/hero-image.png";
import HeroOfferImage from "@/assets/images/hero-offer.png";
import AppStoreImage from "@/assets/images/app-store.png";
import PlayStoreImage from "@/assets/images/play-store.png";
import LeafImage from "@/assets/images/leaf.png";

import Image from "next/image";
import Link from "next/link";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { SectionHeading } from "@/component/Heading";

const HeroSection = () => {
    return (
        <section className="relative pt-10 bg-slate-50 pb-15 sm:pb-0 overflow-x-hidden">
            <div className="max-width py-20 z-10 relative">
                <div className="max-w-[550px] relative z-10">
                    <SectionHeading content="Welcome to Fresh Harvest" />
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium mb-3 lg:mb-5">
                        Fresh Fruits and Vegetables
                    </h3>
                    <p className="text-sm font-primary mb-7">
                        At Fresh Harvests, we are passionate about providing you
                        with the freshest and most flavorful fruits and
                        vegetables
                    </p>

                    <button className="bg-primary px-8 py-2 rounded-md text-white mb-6">
                        Shop Now
                    </button>

                    <div className="flex gap-3 mb-5">
                        <div className="hidden md:flex w-40 justify-end text-5xl text-secondary">
                            <PiArrowBendDownRightBold />
                        </div>
                        <Image
                            alt="Offer"
                            src={HeroOfferImage.src}
                            width={330}
                            height={155}
                            className="rounded-2xl w-60 sm:w-80"
                        />
                    </div>

                    {/* App */}
                    <div className="relative top-20 sm:top-0">
                        <p className="text-sm font-primary mb-2">
                            Download App:
                        </p>

                        <div className="flex items-center gap-3">
                            <Link href={"#"}>
                                <Image
                                    alt="App Store"
                                    src={AppStoreImage.src}
                                    className="w-[130px] h-auto"
                                    width={130}
                                    height={40}
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    alt="Play Store"
                                    src={PlayStoreImage.src}
                                    className="w-[130px] h-auto"
                                    width={130}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side design */}
            <div className="bg-secondary h-full absolute left-[75%] sm:left-[72%] xl:left-[65%] right-0 top-0 bottom-0"></div>
            <Image
                src={HeroImage.src}
                alt="Hero Image"
                width={770}
                height={860}
                className="absolute translate-x-12 sm:translate-x-0 right-0 lg:right-[10%] bottom-0 w-[80%] max-w-[400px] md:max-w-[535px] md:w-[40%] h-auto"
            />
            {/* Leaf */}
            <Image
                src={LeafImage.src}
                alt="Leaf"
                width={LeafImage.width}
                height={LeafImage.height}
                className="absolute right-[50%] md:right-[40%] top-[20%] w-14 sm:w-20 h-auto rotate-[-26deg] drop-shadow-2xl"
            />
            <Image
                src={LeafImage.src}
                alt="Leaf"
                width={LeafImage.width}
                height={LeafImage.height}
                className="absolute -left-[80px] top-[6%] rotate-[200deg] w-40 h-auto hidden md:inline drop-shadow-2xl"
            />
        </section>
    );
};

export default HeroSection;
