"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const [navOpened, setNavOpened] = useState<boolean>(false);

    const NavLinks = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/shop",
            label: "Shop",
        },
        {
            href: "/about",
            label: "About Us",
        },
        {
            href: "/blog",
            label: "Blog",
        },
    ];

    return (
        <nav className="relative w-full">
            <div className="max-width py-6 flex items-center justify-between gap-4 z-[999] relative">
                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        alt="Logo"
                        src={"/logo.png"}
                        width={35}
                        height={35}
                    />
                    <h3 className="text-4xl font-medium sm:text-2xl sm:font-semibold">
                        Fresh Harvests
                    </h3>
                </Link>

                {/* Navigation */}
                <ul className="hidden lg:flex">
                    {NavLinks.map((link) => (
                        <li key={link.href}>
                            <NavLink href={link.href} label={link.label} />
                        </li>
                    ))}
                </ul>

                {/* Last Part */}
                <div className="flex items-center gap-3 lg:gap-5 text-sm">
                    <Link
                        href={"/me/favorites"}
                        className="hidden md:flex items-center gap-2 text-white"
                    >
                        <FaHeart className="text-lg" />
                        <span className="hidden lg:inline">Favorites</span>
                    </Link>
                    <Link
                        href={"/me/cart"}
                        className="flex items-center gap-2 text-white"
                    >
                        <FaShoppingCart className="text-lg" />
                        <span className="hidden lg:inline">Cart</span>
                    </Link>

                    <button className="hidden lg:inline px-5 py-1.5 border-2 border-white text-white rounded-sm cursor-pointer active:scale-95 transition-all duration-300 md:duration-100">
                        Sign In
                    </button>

                    {/* Menu Button */}
                    <button
                        onClick={() => setNavOpened((prev) => !prev)}
                        className="lg:hidden cursor-pointer text-white"
                    >
                        <GiHamburgerMenu className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Smaller Device Navigation  */}
            <div
                className={`lg:hidden absolute left-0 right-0 z-[999] ${
                    navOpened ? "block" : "hidden"
                }`}
            >
                <ul className="p-4 bg-white shadow-2xl">
                    {NavLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="flex justify-center gap-2 px-5 py-2.5 hover:bg-slate-100 rounded-sm active:scale-95 transition-[scale] duration-300 "
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side design */}
            <div className="bg-secondary h-full absolute left-[72%] right-0 top-0 bottom-0"></div>
        </nav>
    );
};

export default Navbar;
