import React from 'react';
import './index.scss';
import Rates from '../Rates'
import Wallets from "../Wallets";

const Main = () => (
  <main className="main">
    <Rates/>
    <Wallets />
  </main>
);

export default Main
