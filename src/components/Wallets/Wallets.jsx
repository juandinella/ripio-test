import React from 'react';
import Button from '../Button'
import SVG from 'react-svg-inline';
import ars from '../../assets/Icons/ars.svg'
import btc from '../../assets/Icons/btc.svg'
import eth from '../../assets/Icons/eth.svg'
import usdc from '../../assets/Icons/usdc.svg'
import dai from '../../assets/Icons/dai.svg'
import ltc from '../../assets/Icons/ltc.svg'
import './styles.scss';

// Se que esto no es lo mas óptimo y que se podria
// hacer un componente por cada row y pasarle los elementos por props
// pero es domíngo

const Wallets = () => (
  <div className='wallets'>
    <h2>Billeteras</h2>
    <div className='table'>
      <div className='table-header dn flex-sm justify-between'>
        <div className='table-header_item wallet-id dn db-sm'>#</div>
        <div className='table-header_item justify-between justify-start-sm wallet-currency'>Moneda</div>
        <div className='table-header_item wallet-balance'>Balance</div>
        <div className='table-header_item wallet-equivalent'>Equivalente</div>
        <div className='table-header_item wallet-percentage'>Porcentaje balance</div>
        <div className='table-header_item wallet-action'></div>
      </div>
      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'>-</div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ ars } className='currency-icon currency-icon--ars dn flex-sm align-center justify-center' />
          <span>Pesos - ARS</span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>$0</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>-</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--secondary' size='btn--small'>Depositar</Button>
        </div>
      </div>
      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'></div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ btc } className='currency-icon currency-icon--btc dn flex-sm align-center justify-center' />
          <span>Bitcoin - BTC</span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>0 BTC</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>≈$0</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'></div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ eth } className='currency-icon currency-icon--eth dn flex-sm align-center justify-center' />
          <span>Ethereum - ETH </span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>0 ETH</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>≈$0</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'></div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ usdc } className='currency-icon currency-icon--usdc dn flex-sm align-center justify-center' />
          <span>USD Coin - USDC</span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>0 USDC</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>≈$0</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'></div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ dai } className='currency-icon currency-icon--dai dn flex-sm align-center justify-center' />
          <span>Dai - DAI</span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>0 DAI</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>≈$0</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>

      <div className='table-row db flex-sm align-center justify-between'>
        <div className='table-row_item wallet-id dn db-sm'></div>
        <div data-title='Moneda' className='table-row_item flex align-center justify-between justify-start-sm wallet-currency'>
          <SVG svg={ ltc } className='currency-icon currency-icon--ltc dn flex-sm align-center justify-center' />
          <span>Litecoin - LTC</span>
        </div>
        <div data-title='Balance' className='table-row_item justify-between flex db-sm wallet-balance'>0.0000 LTC</div>
        <div data-title='Equivalente' className='table-row_item justify-between flex db-sm wallet-equivalent'>≈$23.442,48</div>
        <div data-title='Porcentaje' className='table-row_item justify-between flex db-sm wallet-percentage'>0%</div>
        <div className='table-row_item  db-sm wallet-action'>
          <Button link='/' variant='btn--primary' size='btn--small'>Comprar</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Wallets
