import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createWrapper } from "next-redux-wrapper";
import { todoApi } from './services/todo_api'


export const makeStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(makeStore.dispatch) 
