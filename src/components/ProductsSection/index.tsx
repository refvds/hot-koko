import React from 'react';
import { ProductCard } from '../ProductCard';
import styles from './styles.module.css';
import { IProductsApi } from '@/types';

const ProductsSection = ({ group }) => {
  return (
    <section>
      <h2>{group.type}</h2>
      <div className={styles.sectionGrid}>
        {group.data?.map((item: IProductsApi) => (
          <ProductCard title={item.title} image={item.imageUrl} price={item.price!} description={item.description!} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
