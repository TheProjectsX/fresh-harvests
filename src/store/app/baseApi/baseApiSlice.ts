import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
});

const baseApiSlice = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});

export default baseApiSlice;
