import * as React from 'react';
import Box from '@mui/material/Box';
import { padding } from '@mui/system';

export default function BoxSx() {
  return (
    <div className='box1'>
    <Box
      sx={{
        width: 30,
        height: 60,
       backgroundColor:'#182947',
       alignItems:'center',
       
      }}
    />
    </div>
  );
}