import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from "next-redux-wrapper";

export const todoApi = createApi({
    // reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },

    tagTypes: [],
    endpoints: (build) => ({
        getTodoById: build.query({
            query: (id) => `todos/${id}`,
        }),
        getTodoList: build.query({
            query: (arg) => ({
                url: `todos?_start=${arg._start}&_limit=${arg._limit}`,
                params: { ...arg },
                method: 'GET',
            }),
        }),
        createTodo: build.mutation({
            query: (request) => ({
                url: `todos`,
                method: 'POST',
                body: request,
            }),
        }),
    }),
});
// Export hooks for usage in functional components
export const {
    useGetTodoByIdQuery,
    useGetTodoListQuery,
    useGetCreateTodoQuery,
    util: { getRunningQueriesThunk },
} = todoApi;

// export endpoints for use in SSR
export const { getTodoById, getTodoList, createTodo } = todoApi.endpoints;