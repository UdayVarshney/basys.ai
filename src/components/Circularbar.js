import React from 'react';
import {Circle} from "rc-progress";

function Circularbar() {
  return (
    <div>
        <div className='circular'>
      <div style={{margin:20 , height:60, width:150}}>
        <Circle
         percent={40}
         strokeColor='#d4dcf1'
         strokeWidth={8}
         trailColor='#182947'
         trailWidth={8}
         strokeLinecap='square'
         />
      </div>
    </div>
    </div>

  )
}

export default Circularbar;
