import { Link } from 'react-router-dom';
import { headerNav } from '@/constants';
import { INavButton } from '@/types';
import CoinSvg from '../../../public/assets/icons/coins.svg?react';
import ProfileSvg from '../../../public/assets/icons/settings.svg?react';
import styles from './styles.module.css';

const Header = () => {
  return (
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
          <Link to='/bonuses'>
            <CoinSvg width={20} height={20} />
            Chunky coins
          </Link>
          <Link to='/profile'>
            <ProfileSvg width={20} height={20} />
            Profile
          </Link>
        </div>
      </div>
      <nav className={styles.stickyNav}>
        <ul>
          {headerNav.map((item: INavButton) => (
            <li>{item.title}</li>
          ))}
        </ul>
        <button>Cart</button>
      </nav>
    </header>
  );
};

export default Header;
