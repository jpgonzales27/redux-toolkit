import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

/**
 * RTK query nos provee custom Hooks y middlewares
 *
 * las peticiones GET tienen el mismo nombre que nuestros endpoints
 * empiezan con use y terminan con Query
 *
 * las peticiones POST/PUT/DELETE tienen el mismo nombre que nuestros endpoints
 * empiezan con use y terminan con Mutation
 */
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
