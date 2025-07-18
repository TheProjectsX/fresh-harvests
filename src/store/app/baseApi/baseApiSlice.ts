import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

const baseApiSlice = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});

export default baseApiSlice;
