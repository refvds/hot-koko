import { ProductCard } from '@/components/ProductCard';
import ProductsSection from '@/components/ProductsSection';
import { useGetAllProductsQuery } from '@/redux';
import { IProductsApi } from '@/types';
import { groupObjectByType } from '@/utils';
import React, { useEffect, useState } from 'react';

const Menu = () => {
  const { data, error, isLoading, isFetching, refetch } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div>
      {data?.map((group) => {
        console.log(group);
        return <ProductsSection group={group} />;
      })}
    </div>
  );
};

export default Menu;
