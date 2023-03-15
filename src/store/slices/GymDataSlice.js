import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gymDataApi = createApi({
  reducerPath: "gymDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: (id) => `all_walk_data/${id}`,
    }),
    postWalk: builder.mutation({
      query: (walk) => ({
        url: "input_exercise",
        method: "POST",
        body: walk,
      }),
    }),
  }),
});

export const { useGetAllDataQuery, usePostWalkMutation } = gymDataApi;
