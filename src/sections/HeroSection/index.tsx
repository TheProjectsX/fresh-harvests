import HeroOfferImage from "@/assets/images/hero-offer.png";
import AppStoreImage from "@/assets/images/app-store.png";
import PlayStoreImage from "@/assets/images/play-store.png";

import Image from "next/image";
import Link from "next/link";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { SectionHeading } from "@/component/Heading";

const HeroSection = () => {
    return (
        <section className="relative pt-10 bg-slate-50">
            <div className="max-width py-20">
                <div className="max-w-[550px] relative z-10">
                    <SectionHeading content="Welcome to Fresh Harvest" />
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium mb-5">
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
                            className="rounded-2xl"
                        />
                    </div>

                    {/* App */}
                    <div>
                        <p className="text-sm font-primary mb-2">
                            Download App:
                        </p>

                        <div className="flex items-center gap-3">
                            <Link href={"#"}>
                                <Image
                                    alt="App Store"
                                    src={AppStoreImage.src}
                                    width={130}
                                    height={40}
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    alt="Play Store"
                                    src={PlayStoreImage.src}
                                    width={130}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side design */}
            <div className="bg-secondary h-full absolute left-[72%] right-0 top-0 bottom-0"></div>
        </section>
    );
};

export default HeroSection;
