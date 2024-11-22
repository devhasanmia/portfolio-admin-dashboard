import { baseApi } from "../../api/BaseApi";

const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
        }),
    }),
})

export const { useLoginMutation } = loginApi;