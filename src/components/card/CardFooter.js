import React from 'react';

const ShareBtn = () => {
  function handleShare() {}

  return (
    <button onClick={handleShare} style={{ color: '#4a4a4a' }}>
      <i className="fas fa-share-alt" />
    </button>
  )
}

export default function CardFooter() {

  return (
    <div className="row justify-content-between" style={{margin: '1em 0 0', padding: '1em 0 0', borderTop: '1px solid #d8d8d8'}}>
      <div style={{ color: '#9b9b9b', fontSize: '0.75em' }}>
        <i className="fas fa-user" />
        <span style={{ padding: '0 6px' }}>10</span>
        <span style={{ fontWeight: '300', fontStyle: 'italic' }}>คนที่สนใจ</span>
      </div>
      <ShareBtn />
    </div>
  )
}