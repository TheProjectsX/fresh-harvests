import { fetchProductServerSide } from "@/store/features/products/productsApiSlice";
import ProductDesc from "./ProductDesc";
import { toast } from "react-toastify";
import { notFound, redirect } from "next/navigation";
import type { Product } from "@/sections/ProductsSection";

const SingleProduct = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const productId = (await params).id;

    let productData: Product;

    try {
        const resp = await fetchProductServerSide(productId);

        if (resp.success) {
            productData = resp.data as Product;
        } else {
            return notFound();
        }
    } catch (error) {
        return notFound();
    }

    return <ProductDesc productData={productData} />;
};

export default SingleProduct;
