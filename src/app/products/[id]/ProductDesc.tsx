"use client";

import type { Category, Product } from "@/sections/ProductsSection";
import { SectionHeading } from "@/component/Heading";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductDesc = ({
    productData,
    categoryData,
}: {
    productData: Product;
    categoryData: Category;
}) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="flex items-center gap-6">
            {/* Images */}
            <div className="flex-1/2">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    emulateTouch
                    swipeable
                    autoPlay
                >
                    {productData.images.map((image, idx) => (
                        <div key={idx} className="aspect-square">
                            <Image
                                src={image}
                                alt={`Product Image ${idx + 1}`}
                                className="w-full h-full"
                                width={450}
                                height={450}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Data */}
            <div className="flex-1/2 flex flex-col">
                <div className="flex-1">
                    <SectionHeading content={categoryData.categoryName} />

                    <h2 className="font-medium text-xl sm:text-3xl md:text-5xl mb-2">
                        {productData.productName}
                    </h2>

                    <div className="flex items-center gap-1.5 mb-4">
                        <span className="text-lg text-yellow-500 flex items-center gap-1">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </span>
                        <p className="font-medium">
                            <span className="text-lg">5.0 </span>
                            <span>(1 review)</span>
                        </p>
                    </div>

                    <p className="font-semibold text-lg sm:text-3xl mb-2">
                        ${productData.price}/kg
                    </p>
                    <p className="text-sm font-primary mb-7 text-[#4A4A52]">
                        {productData.description}
                    </p>
                </div>

                {/* Add to Cart */}
                <div className="flex items-center gap-2 mb-4">
                    <p className="font-semibold">Quantity</p>
                    <p className="flex">
                        <button
                            className="border border-[#D9D9D9] text-center block w-10 py-0.5 cursor-pointer"
                            onClick={() =>
                                setQuantity((prev) =>
                                    prev === 1 ? prev : prev - 1
                                )
                            }
                        >
                            -
                        </button>
                        <span className="border-y border-[#D9D9D9] text-xl font-semibold text-center block w-10 py-0.5">
                            {quantity}
                        </span>
                        <button
                            className="border border-[#D9D9D9] text-center block w-10 py-0.5 cursor-pointer"
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            +
                        </button>
                    </p>
                    <span>/kg</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2.5">
                    <button className="flex-1/2 py-3 rounded-sm flex items-center justify-center gap-2 bg-[#F4F6F6] hover:text-white hover:bg-primary group cursor-pointer">
                        <FaHeart className="text-2xl text-[#D9D9D9] group-hover:text-white" />
                        Save as Favorite
                    </button>
                    <button className="flex-1/2 py-3 rounded-sm flex items-center justify-center gap-2 bg-[#F4F6F6] hover:text-white hover:bg-primary group cursor-pointer">
                        <FaShoppingCart className="text-2xl text-[#D9D9D9] group-hover:text-white" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDesc;
