"use client";

import { SectionHeading } from "@/component/Heading";
import React, { useEffect, useState } from "react";

type Product = {
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

type Category = {
    id: string;
    categoryName: string;
    createdAt: string;
    updatedAt: string;
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// TEMP
const InitialProducts = [
    {
        id: "67514a611cdb919fe028cf09",
        productName: "Banana",
        description:
            "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
        price: 20.99,
        stock: 50,
        images: ["https://i.ibb.co.com/cyCs2B7/banana.jpg"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T06:38:25.687Z",
        updatedAt: "2024-12-05T06:38:25.687Z",
    },
    {
        id: "675153ac1cdb919fe028cf0a",
        productName: "Coconut",
        description:
            "Coconut is a versatile tropical fruit widely used in culinary dishes and beverages. It offers various edible parts, including the water, tender flesh, and mature meat. Coconut can be consumed fresh, dried, or processed into products like coconut oil, milk, cream, and flour. Its mildly sweet flavor and rich texture make it a popular ingredient in both savory and sweet dishes, particularly in Asian, Caribbean, and tropical cuisines. Additionally, it's valued for its nutritional benefits, providing healthy fats, fiber, and essential minerals like potassium and magnesium.",
        price: 200,
        stock: 50,
        images: ["https://i.ibb.co.com/pWpwg7h/coconut.jpg"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T07:18:04.783Z",
        updatedAt: "2024-12-06T09:54:40.366Z",
    },
    {
        id: "675154d81cdb919fe028cf0b",
        productName: "Guava",
        description:
            "Guava is a tropical fruit known for its sweet and tangy flavor, often enjoyed fresh, juiced, or in desserts. It has a soft, edible skin and a juicy interior filled with tiny seeds. Guava is rich in vitamin C, fiber, and antioxidants, making it a nutritious choice. Its unique taste and aroma make it a popular ingredient in smoothies, jams, and salads, as well as in savory dishes in some cuisines. Guava is also prized for its health benefits, including boosting immunity and aiding digestion.",
        price: 20,
        stock: 500,
        images: ["https://i.ibb.co.com/J7CXmBQ/Guava.png"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T07:23:04.640Z",
        updatedAt: "2024-12-06T09:56:22.205Z",
    },
    {
        id: "6751559b1cdb919fe028cf0c",
        productName: "Pomegranate",
        description:
            "Pomegranate is a nutrient-rich fruit prized for its vibrant red seeds, known as arils, which are juicy, sweet, and slightly tart. It is often eaten fresh, added to salads, or used in juices, sauces, and desserts. Pomegranate is a powerhouse of antioxidants, vitamins (especially vitamin C), and fiber, contributing to numerous health benefits, including improved heart health and reduced inflammation. Its bold flavor and visual appeal make it a favorite in both savory and sweet dishes across various cuisines.",
        price: 100,
        stock: 200,
        images: ["https://i.ibb.co.com/3p2VXxn/pomegrate.webp"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T07:26:19.680Z",
        updatedAt: "2024-12-06T09:57:55.466Z",
    },
    {
        id: "6751563d1cdb919fe028cf0d",
        productName: "Kiwi",
        description:
            "Kiwi is a small, nutrient-packed fruit with a fuzzy brown skin and bright green or golden flesh dotted with tiny black seeds. It has a sweet and tangy flavor, making it a refreshing snack or addition to salads, smoothies, and desserts. Kiwi is an excellent source of vitamin C, fiber, and antioxidants, supporting immunity and digestion. Its vibrant color and unique taste also make it a popular choice for garnishing dishes and beverages.",
        price: 70,
        stock: 400,
        images: ["https://i.ibb.co.com/QCVLYj2/Kiwi.jpg"],
        categoryId: "6751516f9c52879c1fde6558",
        isDeleted: false,
        createdAt: "2024-12-05T07:29:01.734Z",
        updatedAt: "2024-12-06T09:59:17.593Z",
    },
    {
        id: "675157591cdb919fe028cf0e",
        productName: "Mustard",
        description:
            "Mustard greens are leafy vegetables from the mustard plant, known for their peppery and slightly bitter flavor. They are commonly used in salads, stir-fries, soups, and stews, as well as in pickling and traditional dishes like Indian saag or Southern-style greens. Mustard greens are rich in vitamins A, C, and K, along with fiber and antioxidants, making them a highly nutritious choice. Their bold taste and tender texture add depth to a variety of savory dishes.",
        price: 30,
        stock: 200,
        images: ["https://i.ibb.co.com/bKBD5V5/mustard.png"],
        categoryId: "6751569e0e539396658e60a9",
        isDeleted: false,
        createdAt: "2024-12-05T07:33:45.060Z",
        updatedAt: "2024-12-06T10:00:42.627Z",
    },
];

const ProductsSection = () => {
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

    const [products, setProducts] = useState<Product[]>(InitialProducts);

    const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

    useEffect(() => {
        if (filter === null) return setProducts(InitialProducts);

        setProducts(
            InitialProducts.filter(
                (product) => product.categoryId === filter.id
            )
        );
    }, [filter]);

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
                        className={`px-4 sm:px-5 py-1.5 text-sm sm:text-base border rounded-md cursor-pointer ${
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
                            className={`px-4 sm:px-5 py-1.5 text-sm sm:text-base border rounded-md cursor-pointer ${
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {products
                    .slice(0, showAllProducts ? undefined : maxItems)
                    .map((product) => (
                        <div
                            key={product.id}
                            className="p-2.5 shadow-xl rounded-lg"
                        >
                            <div className="w-full aspect-square flex items-center justify-center rounded-xl overflow-hidden mb-3 bg-[#F4F6F6]">
                                <img
                                    src={product.images[0]}
                                    alt="Product Image"
                                    className="w-full h-full object-content"
                                />
                            </div>

                            <h6 className="font-medium sm:text-lg">
                                {product.productName}
                            </h6>
                            <p className="text-[#4A4A52] sm:text-lg mb-2 font-primary">
                                ${product.price}/kg
                            </p>
                            <button className="w-full py-2 rounded-lg bg-primary text-white cursor-pointer active:scale-95 transition-[scale] duration-300 text-sm sm:text-base">
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>

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
