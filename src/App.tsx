import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
