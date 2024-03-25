import { FC, useEffect } from 'react';
import { AppDispatch, useAppDispatch, useAppSelector } from '@/redux/store';
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
  const { cartToggle } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (typeof window != 'undefined' && window.document && cartToggle) {
      document.body.style.overflow = 'hidden';
    }
  }, [cartToggle]);

  const handleToggle = () => {
    dispatch(addToCart(product));
  };
  return (
    <article className={styles.card}>
      <div className={styles.imageBlock}>
        <img src={image} alt={title} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        <span>${price}</span>
        <button onClick={handleToggle}>Add</button>
      </footer>
    </article>
  );
};
