import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';

import './scss/home.scss';

const Cart = React.lazy(() => import('./components/pages/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
