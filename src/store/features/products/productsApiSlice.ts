import baseApiSlice, { baseQuery } from "@/store/app/baseApi/baseApiSlice";
import store from "@/store/app/store";

const productsApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: (data) => ({
                url: "/products",
            }),
        }),
        fetchSingleProduct: builder.query({
            query: (data) => ({
                url: `/products/${data.id}`,
            }),
        }),
    }),
});

// For server side to use await
export const fetchProductServerSide = async (id: string) => {
    const result = await store.dispatch(
        productsApiSlice.endpoints.fetchSingleProduct.initiate({ id })
    );

    if ("error" in result) throw new Error("Failed to fetch product");
    return result.data;
};

export const { useFetchProductsQuery, useFetchSingleProductQuery } =
    productsApiSlice;
export default productsApiSlice;
