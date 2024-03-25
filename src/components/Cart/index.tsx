import { AppDispatch, useAppSelector } from '@/redux/store';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { toggle } from '@/redux/cartSlice';
import CartPorduct from '../CartProduct';

const Cart = () => {
  const cartToggle = useAppSelector((state) => state.cart.cartToggle);
  const dispatch: AppDispatch = useDispatch();

  return (
    <aside className={styles.cart}>
      <button className={styles.closeBtn} onClick={() => dispatch(toggle(!cartToggle))}></button>
      <div className={styles.cartContent}>
        <CartPorduct />
      </div>
    </aside>
  );
};

export default Cart;
