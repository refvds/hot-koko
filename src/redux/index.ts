import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProductsApi } from '@/types';
import { groupObjectByType } from '@/utils';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65f80ab3b4f842e80886b248.mockapi.io' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      transformResponse: (data) => {
        const test = groupObjectByType<IProductsApi>(data);
        console.log(test);
        return test;
      },
    }),
    getProduct: builder.query<IProductsApi, number>({
      query: (id) => `/products/:${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
