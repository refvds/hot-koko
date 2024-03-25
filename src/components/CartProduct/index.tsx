import React from 'react';
import styles from './styles.module.css';

const CartPorduct = () => {
  return (
    <article className={styles.container}>
      <article className={styles.infoBlock}>
        <img className={styles.img} src='/assets/images/bg.png' alt='burger' />
        <div className={styles.description}>
          <h4 className={styles.title}>Bacon, Egg, & Cheese Croissant</h4>
          <div className={styles.badges}>
            <span className={styles.badge}>md</span>
          </div>
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
