import { FC } from 'react';
import { AppDispatch, useAppDispatch } from '@/redux/store';
import { addToCart } from '@/redux/cartSlice';
import { IProductsApi } from '@/types';
import styles from './styles.module.css';

type PostCardProps = {
  title: string;
  image: string;
  price: number;
  description: string;
  product: IProductsApi;
};

export const ProductCard: FC<PostCardProps> = ({ title, image, price, description, product }) => {
  const dispatch: AppDispatch = useAppDispatch();
  return (
    <article className={styles.card}>
      <div className={styles.imageBlock}>
        <img src={image} alt={title} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        <span>${price}</span>
        <button onClick={() => dispatch(addToCart(product))}>Add</button>
      </footer>
    </article>
  );
};
