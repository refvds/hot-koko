import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './app.module.css';
import { useAppSelector } from './redux/store';

function App() {
  const toggled = useAppSelector((state) => state.cart.cartToggle);
  return (
    <div className={`${styles.app} ${!toggled && styles.dark}`}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
