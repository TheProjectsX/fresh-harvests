import baseApiSlice from "@/store/app/baseApi/baseApiSlice";

const categoriesApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchCategories: builder.query({
            query: (data) => ({
                url: "/category",
            }),
        }),
        fetchSingleCategory: builder.query({
            query: (data) => ({
                url: `/category/${data.id}`,
            }),
        }),
    }),
});

export const { useFetchCategoriesQuery, useFetchSingleCategoryQuery } =
    categoriesApiSlice;
export default categoriesApiSlice;
