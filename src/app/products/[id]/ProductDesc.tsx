"use client";

import { capitalize, type Product } from "@/sections/ProductsSection";
import { SectionHeading } from "@/component/Heading";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import ProductCard from "@/component/ProductCard";
import { useFetchSingleCategoryQuery } from "@/store/features/categories/categoriesApiSlice";
import { useFetchProductsQuery } from "@/store/features/products/productsApiSlice";
import ReactHead from "@theprojectsx/react-head";

const ProductDesc = ({ productData }: { productData: Product }) => {
    const { data: categoryData } = useFetchSingleCategoryQuery({
        id: productData.categoryId,
    });
    const { data: InitialProducts, isLoading: isProductsLoading } =
        useFetchProductsQuery({});

    const [quantity, setQuantity] = useState<number>(1);
    const [relatedProducts, setRelatedProducts] = useState<Product[] | null[]>(
        Array(4).fill(null)
    );

    const GenerateDescription = ({ productName }: { productName: string }) => {
        const lowerName = productName.toLowerCase();
        return (
            <>
                <p className="mb-3">
                    Our {lowerName}s are carefully selected to ensure top-notch
                    freshness and quality. Grown with care and harvested at peak
                    ripeness, each {lowerName} brings natural flavor and
                    essential nutrients to your table. Rich in vitamins,
                    minerals, and health benefits, {lowerName}s are a perfect
                    choice for those seeking both taste and wellness.
                </p>
                <p>
                    Perfect for salads, snacks, meals, or smoothies — let the
                    natural goodness of {lowerName}s enhance your daily routine.
                    Enjoy them fresh, cooked, or blended — however you like it,{" "}
                    {lowerName}s deliver delicious, wholesome satisfaction.
                </p>
            </>
        );
    };

    useEffect(() => {
        if (isProductsLoading) return;
        if (!InitialProducts.success) {
            setRelatedProducts([]);
            return;
        }

        const filteredProducts = (InitialProducts.data as Product[]).filter(
            (product) => product.categoryId === productData.categoryId
        );
        setRelatedProducts(filteredProducts);
    }, [InitialProducts, isProductsLoading]);

    return (
        <>
            <ReactHead>
                <title>{`${productData.productName} - Fresh Harvests`}</title>
                <meta
                    name="description"
                    content={productData.description.slice(0, 25)}
                />
            </ReactHead>
            <section className="max-width flex flex-col md:flex-row items-center gap-8">
                {/* Images */}
                <div className="flex-1/2 border border-[#0000001A] rounded-lg overflow-hidden">
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
                        {categoryData && (
                            <SectionHeading
                                content={capitalize(
                                    categoryData.data.categoryName
                                )}
                                className="!mb-2 md:!mb-6"
                            />
                        )}

                        <h2 className="font-medium text-xl sm:text-3xl md:text-5xl md:mb-2">
                            {productData.productName}
                        </h2>

                        <div className="flex items-center gap-1.5 mb-4">
                            <span className="text-lg text-yellow-500 flex items-center gap-2">
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
                    <div className="flex flex-col sm:flex-row gap-2.5">
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
            </section>
            {/* Description and Reviews Section */}
            <section className="max-width">
                <div className="flex items-center gap-3 mb-4">
                    <button className="px-5 py-2 rounded-md hover:text-[#A6A6A6] border hover:border-[#A6A6A6] bg-secondary hover:bg-white text-white border-secondary cursor-pointer">
                        Description
                    </button>
                    <button className="px-5 py-2 rounded-md text-[#A6A6A6] border border-[#A6A6A6] hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer">
                        Reviews (1)
                    </button>
                </div>

                <div className="px-3 py-5 bg-[#F4F6F6] font-secondary max-w-[800px]">
                    <GenerateDescription
                        productName={productData.productName}
                    />
                </div>
            </section>

            {/* Related Products */}
            <section className="max-width">
                <div className="max-w-[500px] mx-auto mb-6">
                    <SectionHeading
                        content="Our Products"
                        className="mx-auto"
                    />
                    <h3 className="font-medium text-3xl md:text-5xl mb-5 text-center">
                        Related Products
                    </h3>
                    <p className="text-sm text-center font-primary">
                        We pride ourselves on offering a wide variety of fresh
                        and flavorful fruits, vegetables, and salad ingredients.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6">
                    {relatedProducts.slice(0, 4).map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductDesc;
