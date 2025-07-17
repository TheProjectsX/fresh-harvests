"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const currentPathname = usePathname();

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
        <nav
            className={`${
                currentPathname === "/" ? "absolute" : ""
            } top-0 w-full`}
        >
            <div className="max-width py-6 flex items-center justify-between gap-4 z-[999] relative">
                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        alt="Logo"
                        src={"/logo.png"}
                        width={35}
                        height={35}
                    />
                    <h3 className="text-2xl font-medium sm:text-4xl sm:font-semibold">
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
                <div
                    className={`flex items-center gap-3 lg:gap-5 text-sm ${
                        currentPathname === "/" ? "text-white" : "text-black"
                    }`}
                >
                    <Link
                        href={"/me/favorites"}
                        className="hidden md:flex items-center gap-2"
                    >
                        <FaHeart className="text-xl" />
                        <span className="hidden lg:inline">Favorites</span>
                    </Link>
                    <Link href={"/me/cart"} className="flex items-center gap-2">
                        <FaShoppingCart className="text-xl" />
                        <span className="hidden lg:inline">Cart</span>
                    </Link>

                    <button
                        className={`hidden lg:inline px-5 py-1.5 border-2 rounded-sm cursor-pointer active:scale-95 transition-all duration-300 md:duration-100 ${
                            currentPathname === "/"
                                ? "border-white"
                                : "border-black"
                        }`}
                    >
                        Sign In
                    </button>

                    {/* Menu Button */}
                    <button
                        onClick={() => setNavOpened((prev) => !prev)}
                        className="lg:hidden cursor-pointer"
                    >
                        <GiHamburgerMenu className="text-xl" />
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
        </nav>
    );
};

export default Navbar;
