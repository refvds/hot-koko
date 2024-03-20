import { FC } from 'react';
import styles from './styles.module.css';

type PostCardProps = {
  title: string;
  image: string;
  price: number;
  description: string;
};

export const ProductCard: FC<PostCardProps> = ({ title, image, price, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageBlock}>
        <img src={image} alt={title} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        <span>${price}</span>
        <button>Add</button>
      </footer>
    </article>
  );
};
