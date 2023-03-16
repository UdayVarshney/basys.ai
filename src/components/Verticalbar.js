import React from 'react';
import {Line} from "rc-progress";

function Verticalbar() {
  return (
    <div>
        <div className='vertical'>
      <div style={{margin:20, height:200, width:200}}>
        <Line
         percent={17}
         strokeColor='#d4dcf1'
         strokeWidth={15}
         trailColor='#182947'
         trailWidth={15}
         strokeLinecap='square'
         />
      </div>
    </div>
    </div>

  )
}

export default Verticalbar;