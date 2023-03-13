import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gymDataApi = createApi({
  reducerPath: "gymDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: (id) => `all_walk_data/${id}`,
    }),
  }),
});

export const { useGetAllDataQuery } = gymDataApi;
