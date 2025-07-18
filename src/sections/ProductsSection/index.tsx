"use client";

import { SectionHeading } from "@/component/Heading";
import ProductCard from "@/component/ProductCard";
import { useFetchCategoriesQuery } from "@/store/features/categories/categoriesApiSlice";
import { useFetchProductsQuery } from "@/store/features/products/productsApiSlice";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type Product = {
    id: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

export type Category = {
    id: string;
    categoryName: string;
    createdAt: string;
    updatedAt: string;
};

export const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

const ProductsSection = () => {
    const { data: InitialProducts, isLoading: isProductsLoading } =
        useFetchProductsQuery({});
    const { data: InitialCategories, isLoading: isCategoriesLoading } =
        useFetchCategoriesQuery({});

    const maxItems = 6;

    const [categories, setCategories] = useState<Category[]>([
        {
            id: "6751516f9c52879c1fde6558",
            categoryName: "Fruits",
            createdAt: "2024-12-05T07:08:31.499Z",
            updatedAt: "2024-12-05T07:08:31.499Z",
        },
        {
            id: "6751569e0e539396658e60a9",
            categoryName: "Salad",
            createdAt: "2024-12-05T07:30:38.699Z",
            updatedAt: "2024-12-05T07:30:38.699Z",
        },
        {
            id: "6751584feaeaa5cc21bbe21b",
            categoryName: "Vegetable",
            createdAt: "2024-12-05T07:37:51.344Z",
            updatedAt: "2024-12-05T07:37:51.344Z",
        },
        {
            id: "6786bb84c64b5838b8a572d2",
            categoryName: "Drinks",
            createdAt: "2025-01-14T19:31:16.329Z",
            updatedAt: "2025-01-14T19:31:16.329Z",
        },
    ]);
    const [filter, setFilter] = useState<Category | null>(null);

    const [products, setProducts] = useState<Product[] | null[]>(
        Array(maxItems).fill(null)
    );

    const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

    useEffect(() => {
        if (products.length > 0 && products[0] === null) return;
        if (filter === null) return setProducts(InitialProducts.data ?? []);

        setProducts(
            (InitialProducts.data ?? []).filter(
                (product: Product) => product.categoryId === filter.id
            )
        );
    }, [filter]);

    // If Products Data Loaded
    useEffect(() => {
        if (isProductsLoading) return;
        if (!InitialProducts) return;
        if (!InitialProducts.success) {
            toast.error("Failed to Fetch Products");
            setProducts([]);
            return;
        }

        setProducts(InitialProducts.data);
    }, [InitialProducts, isProductsLoading]);

    // If Categories Data Loaded
    useEffect(() => {
        if (isCategoriesLoading) return;
        if (!InitialCategories) return;
        if (!InitialCategories.success) return;

        setCategories(InitialCategories.data);
    }, [InitialCategories, isCategoriesLoading]);

    return (
        <section className="max-width text-center">
            <div className="max-w-[500px] mx-auto mb-6">
                <SectionHeading content="Our Products" className="mx-auto" />
                <h3 className="font-medium text-3xl md:text-5xl mb-5">
                    Our Fresh Products
                </h3>
                <p className="text-sm font-primary">
                    We pride ourselves on offering a wide variety of fresh and
                    flavorful fruits, vegetables, and salad ingredients.
                </p>
            </div>

            {/* Filters */}
            <div className="w-full overflow-x-auto">
                <div className="inline-flex gap-2 sm:gap-4 mb-7">
                    <button
                        onClick={() => setFilter(null)}
                        className={`px-4 sm:px-5 py-1.5 text-sm sm:text-base border rounded-md cursor-pointer hover:text-white hover:border-secondary hover:bg-secondary ${
                            filter === null
                                ? "text-white border-secondary bg-secondary"
                                : "text-[#A6A6A6] border-[#A6A6A6] bg-white"
                        }`}
                    >
                        All
                    </button>
                    {categories.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setFilter(item)}
                            className={`px-4 sm:px-5 py-1.5 text-sm sm:text-base border rounded-md cursor-pointer hover:text-white hover:border-secondary hover:bg-secondary ${
                                filter?.id === item.id
                                    ? "text-white border-secondary bg-secondary"
                                    : "text-[#A6A6A6] border-[#A6A6A6] bg-white"
                            }`}
                        >
                            {capitalize(item.categoryName)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products */}
            {products.length === 0 && (
                <p className="py-4 italic font-secondary font-semibold text-lg">
                    No Products to Show!
                </p>
            )}

            {products.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    {products
                        .slice(0, showAllProducts ? undefined : maxItems)
                        .map((product, idx) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                </div>
            )}

            {products.length > maxItems && (
                <button
                    className="px-6 py-2 rounded-md font-medium text-primary border border-primary hover:bg-primary hover:text-white hover:border-white cursor-pointer active:scale-95 transition-[scale] duration-300"
                    onClick={() => setShowAllProducts((prev) => !prev)}
                >
                    {showAllProducts ? "Hide Products" : "See All Products"}
                </button>
            )}
        </section>
    );
};

export default ProductsSection;
