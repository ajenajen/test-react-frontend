import React from 'react';
import icEdit from '../../images/ic-edit.svg';
import icReward from '../../images/ic-reward.svg';


const ItemList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      {data.map((item, index) => {
        return (
          <ItemRounder key={index} title={index+1} isActive={item} /> 
        )
      })}
    </div>
  )
}

const ItemRounder = ({ title, isActive }) => {
  return (
    <div style={{
      display: 'block',
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      borderRadius: '30px',
      color: '#fff',
      textAlign: 'center',
      marginRight: '8px',
      background: isActive ? '#2ecc71' : '#d8d8d8',
    }}>
      {title}
    </div>
  )
}

export default function CardBody() {
  const openRound = [true, true, false, true, false]
  
  return (
    <div>
      <div className="row align-items-center mb-3">
        <div className="col-3 pr-2">
          <h4 style={{ margin: '0', color: '#9b9b9b', fontWeight: '300', fontSize: '1.25em' }}>รอบที่เปิด</h4>
        </div>
        <div className="col-9">
          <ItemList data={openRound} />
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col">
          <h4 style={{ margin: '0', color: '#ff5a5a', fontWeight: '600', fontSize: '1em' }}>รอบที่ 4 : Admission</h4>
        </div>
        <div className="col-auto">
          <button style={{
            borderRadius: '30px',
            border: 'solid 1px #ff5a5a',
            color: '#ff5a5a',
            fontWeight: '500', 
            fontSize: '0.75em',
            padding: '6px 10px 6px 16px'
          }}>แก้ไขคะแนน <img style={{ marginTop: '-2px', marginLeft: '6px', height: '12px' }} src={icEdit} /></button>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-4 text-center">
          <img src={icReward} />
        </div>
        <div className="col-8 text-right">
          <div style={{ fontWeight: '300', fontSize: '0.75em', color: '#4a4a4a' }}>คะแนนของคุณคือ</div>
          <div style={{ fontWeight: '300', fontSize: '2.5em', color: '#4a4a4a' }}>23,453</div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-4 text-center border-right">
          <div style={{ fontSize: '1.2em', color: '#5f5f5f' }}>20,845</div>
          <div style={{ fontSize: '0.75em', color: '#5f5f5f' }}>คะแนนต่ำสุด 60</div>
        </div>
        <div className="col-4 text-center border-right">
          <div style={{ fontSize: '1.2em', color: '#5f5f5f' }}>21,345</div>
          <div style={{ fontSize: '0.75em', color: '#5f5f5f' }}>คะแนนเฉลี่ย 60</div>
        </div>
        <div className="col-4 text-center">
          <div style={{ fontSize: '1.2em', color: '#5f5f5f' }}>23,415</div>
          <div style={{ fontSize: '0.75em', color: '#5f5f5f' }}>คะแนนสูงสุด 60</div>
        </div>
      </div>

      <div className="row align-items-center" style={{margin: '1em 0 0', padding: '1em 0 0', borderTop: '1px solid #d8d8d8'}}>
        <div className="col p-0">
          <a href="#">
            <h4 style={{ margin: '0', color: '#48b6a3', fontWeight: '300', fontSize: '1em', display: 'flex', alignItems: 'center' }}>
              <span style={{
                display: 'inline-block',
                width: '0',
                height: '0',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #48b6a3',
                marginRight: '15px'
              }}></span>
              ดูสัดส่วนคะแนน
            </h4>
          </a>
        </div>
      </div>

    </div>
  )
}