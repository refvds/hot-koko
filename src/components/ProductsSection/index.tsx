import React from 'react';
import { ProductCard } from '../ProductCard';
import styles from './styles.module.css';

const ProductsSection = ({ group }) => {
  return (
    <section>
      <h2>{group.type}</h2>
      <div className={styles.sectionGrid}>
        {group.data?.map((item) => (
          <ProductCard title={item.title} image={item.image} price={item.price} description={item.desc} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
