import { baseApi } from "../../api/BaseApi";

const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSkill: builder.mutation({
            query: (data) => ({
                url: "/skills/create",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["skill"]
        })
        ,
        getAllSkills: builder.query({
            query: () => ({
                url: "/skills/all",
                method: "GET",
            }),
            providesTags: ["skill"]
        }),
        deleteSkillById: builder.mutation({
            query: (id) => ({
                url: `/skills/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["skill"]
        })
    }),
})

export const { useGetAllSkillsQuery, useDeleteSkillByIdMutation, useCreateSkillMutation } = skillApi;