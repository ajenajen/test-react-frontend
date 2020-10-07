import React, { useState } from 'react';
import engi from '../../engineer.png';

const FavoriteBtn = () => {
  const [status, setStatus] = useState(true)

  function handleClick(e) {
    return setStatus(!status)
  }

  return (
    <button onClick={handleClick}>
      <i style={{ color: status ? '#ff5a5a' : '#4a4a4a' }} className="fas fa-lg fa-heart" />
    </button>
  )
}

export default function CardHeader() {
  return (
    <div className="row" style={{ margin: '0 0 1em', padding: '0 0 1em', borderBottom: '1px solid #d8d8d8' }}>
      <div className="col-3 d-flex pl-0 pr-2">
        <img src={engi} alt="engineering" />
      </div>
      <div className="col-9 d-flex" style={{ flexDirection: 'column', position: 'relative', paddingRight: '40px' }}>
        <h1 style={{ margin: '0', color: '#ff5a5a', fontWeight: '700', fontSize: '1.5em', lineHeight: '1' }}>คณะวิศวกรรมศาสตร์</h1>
        <h2 style={{ margin: '0', color: '#9b9b9b', fontWeight: '600', fontSize: '1.25em' }}>สาขาวิศวกรรมทั่วไป</h2>
        <h4 style={{ margin: 'auto 0 0', color: '#9b9b9b', fontWeight: '300', fontSize: '1.25em' }}>จุฬาลงกรณ์มหาวิทยาลัย</h4>
        
        <div style={{ position: 'absolute', right: '0px', top: '4px' }}>
          <FavoriteBtn />
        </div>
      </div>
      
    </div>
  )
}