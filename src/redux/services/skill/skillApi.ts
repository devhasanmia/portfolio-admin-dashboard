import { baseApi } from "../../api/BaseApi";

const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSkills: builder.query({
            query: () => ({
                url: "/skills/all",
                method: "GET",
            }),
            providesTags: ["skill"]
        }),
    }),
})

export const { useGetAllSkillsQuery } = skillApi;