import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import AppStoreImage from "@/assets/images/app-store.png";
import PlayStoreImage from "@/assets/images/play-store.png";
import VisaImage from "@/assets/logos/visa.png";
import PaypalImage from "@/assets/logos/paypal.png";
import PayImage from "@/assets/logos/apple-pay.png";

const Footer = () => {
    return (
        <div className="w-full pt-10 pb-4 bg-[#F4F6F6]">
            <div className="max-width">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-10">
                    <Link
                        href={"/"}
                        className="flex items-center gap-2 flex-2/5"
                    >
                        <Image
                            alt="Logo"
                            src={"/logo.png"}
                            width={35}
                            height={35}
                        />
                        <h3 className="text-2xl font-medium sm:text-4xl sm:font-semibold whitespace-nowrap">
                            Fresh Harvests
                        </h3>
                    </Link>

                    {/* Internal Links */}
                    <div className="flex justify-between w-full md:w-auto md:flex-3/5 mb-6 md:mb-0 flex-wrap md:flex-nowrap gap-4">
                        <ul className="font-secondary text-xs md:text-sm space-y-2.5 z-10">
                            <li className="font-primary font-semibold text-xs md:text-base">
                                Quick links 1
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Detail Blog
                                </Link>
                            </li>
                        </ul>
                        <ul className="font-secondary text-xs md:text-sm space-y-2.5 z-10">
                            <li className="font-primary font-semibold text-xs md:text-base">
                                Quick links 2
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Favorites
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#"}
                                    className="hover:underline underline-offset-4"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                        <ul className="font-secondary text-xs md:text-sm space-y-2.5">
                            <li className="font-primary font-semibold text-xs md:text-base">
                                Contact us
                            </li>
                            <li>
                                <Link
                                    href={"tel:+1234567890"}
                                    className="flex items-center gap-1 hover:underline underline-offset-4"
                                >
                                    <BsTelephone /> 1234 5678 90
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"mailto:freshharvests@gmail.com"}
                                    className="flex items-center gap-1 hover:underline underline-offset-4"
                                >
                                    {" "}
                                    <IoMailOutline />
                                    freshharvests@gmail.com
                                </Link>
                            </li>
                            <li className="flex items-center gap-1 whitespace-pre-wrap">
                                <IoLocationOutline />
                                Tanjung Sari Street, Pontianak, Indonesia
                            </li>
                        </ul>
                    </div>
                </div>

                {/* External Links */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 relative md:bottom-6 mb-4 md:mb-0">
                    <div>
                        <p className="text-sm font-primary mb-2 font-medium">
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
                    <div>
                        <p className="text-sm font-primary mb-2 font-medium">
                            Accepted Payment Methods:
                        </p>

                        <div className="flex items-center gap-3">
                            <Image
                                alt="Visa"
                                src={VisaImage.src}
                                className="bg-white rounded-sm w-[70px] h-auto"
                                width={70}
                                height={50}
                            />
                            <Image
                                alt="Paypal"
                                src={PaypalImage.src}
                                className="bg-white rounded-sm w-[70px] h-auto"
                                width={70}
                                height={50}
                            />
                            <Image
                                alt="Google Pay"
                                src={PayImage.src}
                                className="bg-white rounded-sm w-[70px] h-auto"
                                width={70}
                                height={50}
                            />
                        </div>
                    </div>
                </div>

                <div className="border-b mb-4 border-[#D9D9D9]"></div>

                {/* Copyright and Social Media */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#212337] font-medium text-xs">
                        &copy; Copyright {new Date().getFullYear()}. All Rights
                        Reserved by Banana Studio
                    </p>

                    <div className="flex items-center gap-2">
                        <Link
                            href={"#"}
                            className="bg-black text-white p-1.5 rounded-full"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-black text-white p-1.5 rounded-full"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-black text-white p-1.5 rounded-full"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
