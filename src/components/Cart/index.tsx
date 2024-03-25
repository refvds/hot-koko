import { AppDispatch, useAppSelector } from '@/redux/store';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { toggle } from '@/redux/cartSlice';
import CartPorduct from '../CartProduct';

const Cart = () => {
  const { cartToggle, cart } = useAppSelector((state) => state.cart);
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle(!cartToggle));
    document.body.style.overflow = 'unset';
  };

  return (
    <aside className={styles.cart}>
      <button className={styles.closeBtn} onClick={handleToggle}></button>
      <div className={styles.cartContent}>
        {cart.map((product) => (
          <CartPorduct id={product.id} title={product.title} imageUrl={product.imageUrl} sizes={product.size} />
        ))}
      </div>
    </aside>
  );
};

export default Cart;
