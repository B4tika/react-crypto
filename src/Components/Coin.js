import React from 'react'

const Coin = ({name, icon, price, symbol}) => {
  return (
    <div className='coin'>
        <h2>Név: {name}</h2>
        <img src={icon} alt="coin" />
        <h3>Ár: {price*397} HUF</h3>
        <h3>Ikon: {symbol}</h3>
        <button>Vétel</button>
    </div>
  )
}

export default Coin