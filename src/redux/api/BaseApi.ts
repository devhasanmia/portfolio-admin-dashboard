import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-server-one-olive.vercel.app/api/v1",
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState)?.auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),

  tagTypes: ["blog", "skill", "project"],
  endpoints: () => ({}),
});

