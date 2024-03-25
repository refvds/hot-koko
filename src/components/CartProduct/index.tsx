import { FC } from 'react';
import styles from './styles.module.css';

type CardProductProps = {
  id: string;
  title: string;
  imageUrl: string;
  sizes?: Array<string> | [];
};

const CartPorduct: FC<CardProductProps> = ({ id, title, imageUrl, sizes }) => {
  return (
    <article className={styles.container}>
      <article className={styles.infoBlock}>
        <img className={styles.img} src={imageUrl} alt={title} />
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <ul className={styles.badges}>
            {sizes?.map((size: string, index: number) => (
              <li className={styles.badge} key={index}>
                {size}
              </li>
            ))}
          </ul>
          <span className={styles.details}>350 kl</span>
        </div>
        <button className={styles.removeBtn}>X</button>
      </article>
      <footer className={styles.footer}>
        <span className={styles.price}>$23.5</span>
        <div className={styles.btnControlBlock}>
          <button className={styles.control}>-</button>
          <span className={`${styles.control} ${styles.count}`}>0</span>
          <button className={styles.control}>+</button>
        </div>
      </footer>
    </article>
  );
};

export default CartPorduct;
