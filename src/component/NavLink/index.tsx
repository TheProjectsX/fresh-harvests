import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { UrlObject } from "url";

const NavLink = ({
    children,
    className,
    href,
    label,
}: {
    children?: React.ReactNode;
    href: string | UrlObject;
    label?: string | React.ReactElement;
    className?: string;
}) => {
    const currentPathname = usePathname();

    return (
        <Link
            href={href}
            className={`flex flex-col items-center px-5 active:scale-95 transition-[scale] duration-300 md:duration-100 group group- ${
                href === currentPathname ? "active" : ""
            } ${className ?? ""}`}
        >
            <span className="w-4 h-1"></span>
            <span className="text-sm">{children ?? label}</span>
            <span className="w-4 h-1 bg-secondary rounded-2xl invisible group-hover:visible group-[.active]:visible"></span>
        </Link>
    );
};

export default NavLink;
