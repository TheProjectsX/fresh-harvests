"use client";

import BannerImage from "@/assets/images/offer-banner.jpg";
import { SectionHeading } from "@/component/Heading";
import Countdown from "react-countdown";

const SpecialOfferSection = () => {
    const offerTime =
        Date.now() + (3 * 24 * 60 * 60 + 18 * 60 * 60 + 54 * 60 + 21) * 1000;

    return (
        <section
            className="w-full py-10 md:py-14 bg-no-repeat bg-center bg-auto text-center md:text-left"
            style={{ backgroundImage: `url(${BannerImage.src})` }}
        >
            <div className="max-width">
                <SectionHeading content="Special Offer" className="mx-auto md:mx-0"/>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-3">
                    Seasonal Fruit Bundle
                </h3>
                <p className="text-xl sm:text-3xl font-medium mb-4">
                    Discount up to <span className="text-primary">80% OFF</span>
                </p>

                {/* Countdown */}
                <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
                    <Countdown
                        date={offerTime}
                        renderer={({ days, hours, minutes, seconds }) => {
                            return (
                                <>
                                    <p className="flex-1 min-w-16 max-w-[82px] flex flex-col items-center px-2 sm:px-4 py-3 bg-white rounded-2xl shadow-sm">
                                        <span className="text-xl sm:text-2xl">
                                            {days.toString().padStart(2, "0")}
                                        </span>
                                        <span className="font-secondary text-xs sm:text-sm">
                                            Days
                                        </span>
                                    </p>
                                    <p className="flex-1 min-w-16 max-w-[82px] flex flex-col items-center px-2 sm:px-4 py-3 bg-white rounded-2xl shadow-sm">
                                        <span className="text-xl sm:text-2xl">
                                            {hours.toString().padStart(2, "0")}
                                        </span>
                                        <span className="font-secondary text-xs sm:text-sm">
                                            Hours
                                        </span>
                                    </p>
                                    <p className="flex-1 min-w-16 max-w-[82px] flex flex-col items-center px-2 sm:px-4 py-3 bg-white rounded-2xl shadow-sm">
                                        <span className="text-xl sm:text-2xl">
                                            {minutes
                                                .toString()
                                                .padStart(2, "0")}
                                        </span>
                                        <span className="font-secondary text-xs sm:text-sm">
                                            Minutes
                                        </span>
                                    </p>
                                    <p className="flex-1 min-w-16 max-w-[82px] flex flex-col items-center px-2 sm:px-4 py-3 bg-white rounded-2xl shadow-sm">
                                        <span className="text-xl sm:text-2xl">
                                            {seconds
                                                .toString()
                                                .padStart(2, "0")}
                                        </span>
                                        <span className="font-secondary text-xs sm:text-sm">
                                            Seconds
                                        </span>
                                    </p>
                                </>
                            );
                        }}
                    />
                </div>

                <p className="font-semibold uppercase px-4 py-1.5 rounded-full bg-[#176D38] w-fit text-lg mx-auto md:mx-0">
                    <span className="text-white">Code: </span>
                    <span className="text-[#FAC714]">Fresh28</span>
                </p>
            </div>
        </section>
    );
};

export default SpecialOfferSection;
