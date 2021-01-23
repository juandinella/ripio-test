import React from 'react';
import Button from '../Button'
import SVG from 'react-svg-inline';
import ars from '../Icons/ars.svg'
import btc from '../Icons/btc.svg'
import eth from '../Icons/eth.svg'
import usdc from '../Icons/usdc.svg'
import dai from '../Icons/dai.svg'
import ltc from '../Icons/ltc.svg'

import './index.scss';

const Wallets = () => (
  <div className="wallets">
    <h2>Billeteras</h2>
    <div className="table">
      <div className="table-header dn flex-sm justify-between">
        <div className="table-header_item wallet-id dn db-sm">#</div>
        <div className="table-header_item wallet-currency">Moneda</div>
        <div className="table-header_item wallet-balance">Balance</div>
        <div className="table-header_item wallet-equivalent">Equivalente</div>
        <div className="table-header_item wallet-percentage">Porcentaje balance</div>
        <div className="table-header_item wallet-action"></div>
      </div>
      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm">-</div>
        <div data-title='Moneda' className="table-row_item flex align-center wallet-currency">
          <SVG svg={ ars } className='dn currency-icon currency-icon--ars flex-sm align-center justify-center' />
          <span>Pesos - ARS</span>
        </div>
        <div data-title='Balance' className="table-row_item wallet-balance">$0</div>
        <div data-title='Equivalente' className="table-row_item wallet-equivalent">-</div>
        <div data-title='Porcentaje' className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--secondary' size='btn--small'>Depositar</Button>
        </div>
      </div>
      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm"></div>
        <div className="table-row_item flex align-center wallet-currency">
          <SVG svg={ btc } className='dn currency-icon currency-icon--btc flex-sm align-center justify-center' />
          <span>Bitcoin - BTC</span>
        </div>
        <div className="table-row_item wallet-balance">0 BTC</div>
        <div className="table-row_item wallet-equivalent">≈$0</div>
        <div className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm"></div>
        <div className="table-row_item flex align-center wallet-currency">
          <SVG svg={ eth } className='dn currency-icon currency-icon--eth flex-sm align-center justify-center' />
          <span>Ethereum - ETH </span>
        </div>
        <div className="table-row_item wallet-balance">0 ETH</div>
        <div className="table-row_item wallet-equivalent">≈$0</div>
        <div className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm"></div>
        <div className="table-row_item flex align-center wallet-currency">
          <SVG svg={ usdc } className='dn currency-icon currency-icon--usdc flex-sm align-center justify-center' />
          <span>USD Coin - USDC</span>
        </div>
        <div className="table-row_item wallet-balance">0 USDC</div>
        <div className="table-row_item wallet-equivalent">≈$0</div>
        <div className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm"></div>
        <div className="table-row_item flex align-center wallet-currency">
          <SVG svg={ dai } className='dn currency-icon currency-icon--dai flex-sm align-center justify-center' />
          <span>Dai - DAI</span>
        </div>
        <div className="table-row_item wallet-balance">0 DAI</div>
        <div className="table-row_item wallet-equivalent">≈$0</div>
        <div className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className="table-row flex align-center justify-between">
        <div className="table-row_item wallet-id dn db-sm"></div>
        <div className="table-row_item flex align-center wallet-currency">
          <SVG svg={ ltc } className='dn currency-icon currency-icon--ltc flex-sm align-center justify-center' />
          <span>Litecoin - LTC</span>
        </div>
        <div className="table-row_item wallet-balance">0.0000 LTC</div>
        <div className="table-row_item wallet-equivalent">≈$23.442,48</div>
        <div className="table-row_item wallet-percentage">0%</div>
        <div className="table-row_item wallet-action">
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Wallets
