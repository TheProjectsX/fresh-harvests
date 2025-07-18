import type { Product } from "@/sections/ProductsSection";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product | null }) => {
    if (product === null) {
        return (
            <div className="p-2.5 shadow-xl rounded-lg animate-pulse">
                <div className="w-full aspect-square rounded-xl bg-gray-200 mb-3"></div>
                <p className="h-5 w-[80%] bg-gray-200 mb-2"></p>
                <button className="w-full py-2 h-10 rounded-lg bg-gray-200"></button>
            </div>
        );
    }

    return (
        <div key={product.id} className="p-2.5 shadow-xl rounded-lg">
            <div className="w-full aspect-square flex items-center justify-center rounded-xl overflow-hidden mb-3 bg-[#F4F6F6]">
                <img
                    src={product.images[0]}
                    alt="Product Image"
                    className="w-full h-full object-content"
                />
            </div>

            <Link
                href={`/products/${product.id}`}
                className="font-medium sm:text-lg hover:underline underline-offset-4"
            >
                {product.productName}
            </Link>
            <p className="text-[#4A4A52] sm:text-lg mb-2 font-primary">
                ${product.price}/kg
            </p>
            <button className="w-full py-2 rounded-lg bg-primary text-white cursor-pointer active:scale-95 transition-[scale] duration-300 text-sm sm:text-base">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
