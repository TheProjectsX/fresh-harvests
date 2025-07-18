import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wrapper from "@/component/Wrapper";

export const metadata: Metadata = {
    title: "Fresh Harvests  - Buy Fresh Fruits & Vegetables Online",
    description:
        "Get farm-fresh vegetables and juicy fruits delivered to your doorstep. Shop now for organic and locally sourced produce.",
    keywords: [
        "buy vegetables online",
        "fresh fruits delivery",
        "organic produce",
        "online vegetable store",
        "fruit and vegetable shop",
        "farm fresh fruits",
        "local produce delivery",
    ],
    openGraph: {
        title: "Fresh Harvests - Fresh Fruits & Veggies at Your Doorstep",
        description:
            "Order organic fruits and vegetables online with fast home delivery. Stay healthy with FreshHarvest.",
        type: "website",
    },
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="">
            <body className="font-primary min-h-screen">
                <Wrapper>
                    <header>
                        <Navbar />
                    </header>

                    <main className="space-y-20 mb-20">{children}</main>

                    <footer>
                        <Footer />
                    </footer>
                </Wrapper>
            </body>
        </html>
    );
}
