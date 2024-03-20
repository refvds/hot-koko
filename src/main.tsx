import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/index.tsx';
import Profile from './pages/Profile/index.tsx';
import App from './App.tsx';
import Bonuses from './pages/Bonuses/index.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index path='/' element={<Menu />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/bonuses' element={<Bonuses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
