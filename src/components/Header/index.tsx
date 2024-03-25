import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { headerNav } from '@/constants';
import { INavButton } from '@/types';
import IconLink from '../IconLink';
import CoinSVG from '../../../public/assets/icons/coins.svg?react';
import ProfileSVG from '../../../public/assets/icons/settings.svg?react';
import ArrowSVG from '../../../public/assets/icons/cart-arrow.svg?react';
import styles from './styles.module.css';
import { AppDispatch, useAppDispatch, useAppSelector } from '@/redux/store';
import { toggle } from '@/redux/cartSlice';
import Cart from '../Cart';

const Header = () => {
  const cartCount = useAppSelector((state) => state.cart.cart.length);
  const cartTogle = useAppSelector((state) => state.cart.cartToggle);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <Link to='/' className={styles.logoBlock}>
            <img src='/assets/images/logo.png' alt='logo' width={80} height={80} />
            <div className={styles.textBlock}>
              <h1 className={styles.title}>Chunky 'n Clunky</h1>
              <p className={styles.slogan}>Flavorful Feasts for Every Bite!</p>
            </div>
          </Link>
          <div className={styles.rightColumn}>
            <IconLink icon={<CoinSVG width={20} height={20} />} path='/bonuses' title=' Chunky coins' />
            <IconLink icon={<ProfileSVG width={20} height={20} />} path='/profile' title='Profile' />
          </div>
        </div>
        <nav className={styles.stickyNav}>
          <ul>
            {headerNav.map((item: INavButton) => {
              const Svg = lazy(() => import(`../../../public${item.icon}?react`));
              return (
                <Suspense fallback={<div>Loading...</div>} key={v4()}>
                  <li className={styles.headerItem}>
                    <Svg width={20} height={20} />
                    {item.title}
                  </li>
                </Suspense>
              );
            })}
          </ul>
          <button className={styles.cartBtn} onClick={() => dispatch(toggle(!cartTogle))}>
            <span>Cart</span>
            <span className={styles.count}>{cartCount}</span>
            <ArrowSVG className={styles.cartIcon} width={20} height={20} />
          </button>
        </nav>
      </header>
      {cartTogle && <Cart />}
    </>
  );
};

export default Header;
