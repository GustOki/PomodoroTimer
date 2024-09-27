import React from 'react';
import './info.css';

const Info = ({ setWorkTime, setRelaxTime, workTime, relaxTime }) => {
  return (
    <>
    <div className='infoMenu'>
      <div className="info">
        <p>Work:</p>
        <input
          type="time"
          id="work-time"
          step="1"
          value={workTime}
          onChange={(e) => setWorkTime(e.target.value)}
        />
      </div>

      <div className="info">
        <p>Relax:</p>
        <input
          type="time"
          id="relax-time"
          step="1"
          value={relaxTime}
          onChange={(e) => setRelaxTime(e.target.value)}
        />
      </div>
    </div>
      
    </>
  );
};

export default Info;
