import { baseApi } from "../../api/BaseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: () => ({
        url: "/blog/all",
        method: "GET",
      }),
      providesTags: ["blog"]
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"]
    })

  }),
})

export const { useGetAllBlogQuery, useGetBlogByIdQuery, useDeleteBlogMutation } = blogApi;