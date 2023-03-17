import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { HYDRATE } from "next-redux-wrapper";

export const todoApi = createApi({
    reducerPath: 'todoApi',
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
            query: (start) => `todos?_start=${start}&_limit=10`
        }),
        createTodo: build.mutation({
            query: (request) => ({
                url: `todos`,
                method: 'POST',
                body: request,
            }),
        }),
        photos: build.query({
            query: () => "/photos",
        }),
    }),
});
// Export hooks for usage in functional components
export const {
    useGetTodoById,
    useGetTodoListQuery,
    usePostCreateTodo,
    util: { getRunningQueriesThunk },
} = todoApi;

export const { usePhotosQuery } = todoApi;
// export const { useTodoListQuery } = todoApi;

// export endpoints for use in SSR
export const { getTodoById, getTodoList, createTodo } = todoApi.endpoints;