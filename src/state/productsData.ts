import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { product } from './types'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_KEY}/api` }),
  endpoints: (builder) => ({
    getProductByName: builder.query
      // <product, string>
      ({
        query: (name) => `${name}`,
      }),
  }),
})

export const { useGetProductByNameQuery } = productApi