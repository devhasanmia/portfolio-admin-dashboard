import { baseApi } from "../../api/BaseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "/project/create",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["project"]
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: "/project/all",
        method: "GET",
      }),
      providesTags: ["project"]
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["project"]
    }),
    deleteProjectbyId: builder.mutation({
      query: (id) => ({
        url: `/project/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"]
    })
  }),
})

export const { useGetAllProjectsQuery, useGetProjectByIdQuery, useDeleteProjectbyIdMutation, useCreateProjectMutation } = projectApi;