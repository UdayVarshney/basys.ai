
import './App.css';
import SideNavBar from './components/Navbar.js';
import TopHeader from './components/Header.js';
import CustomizedProgressBars from './components/Progressbar.js';
import BoxSx from './components/bars.js';
import Circularbar from './components/Circularbar';
import Verticalbar from './components/Verticalbar';
import ThreeColorProgressBar from './components/Horizontalbar';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


import { borderRadius } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



let theme = createTheme({
  palette: {
    primary: {
      main: '#182947',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

 
function App() {
  const progressValue = 100;
  return (
    <div className="App">
      <SideNavBar></SideNavBar>
      <TopHeader></TopHeader>
      
      
      <div>
      
      
    </div>

      
      <div className="flexbox">
      <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        borderRadius:"11px"
      }}>
        
        
        <div style={{width:1068,height:120, backgroundColor: 'white',borderRadius:"11px" }}>
        
          <div className='first'>
            <div className='sept'>
              <h3>Patient Count</h3> 
              <h2> 45,954 </h2>   
              <h4>↑ 7.6% from September</h4>
            </div>

            <div className='threecolor1'>
              <ThreeColorProgressBar value={progressValue} />
            </div>

            <div className='threecolor2'>
              <ThreeColorProgressBar value={progressValue} />
            </div>
      </div>
        
        <div className="flexbox5">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"center",
        paddingBottom:100,
        alignItems:"center",
        width:350 ,
        height:26,
        backgroundColor:"white",
        borderRadius:"11px"

        
      }}>
         
        </div>
        
        <div className='text7'>
        <h3>Risk adjusted pmpm</h3>
        <h1>$331</h1>
        <h4>↓ 5.4% from September</h4>
        
       
        <div className='fourth'>
        
        <div style={{width:90,height:20, background: '#182947' }}>
        
          </div>
          </div>
          <div className='fifth'>
        
        <div style={{width:85,height:20, background: '#d4dcf1' }}>
        
          </div>
          </div>
        </div>
       
        
      </div>
       
      </div>
      
      
      
      </div>
      </div>
      
        <div className='text1'>
        <h4>Clinical Risk</h4>
       
        <p4>23.2%</p4>                            
        <p4>46.7%</p4>
        <p4>30.1%</p4>
        
        </div>
        
        
        <div className='text2'>
        <h4>Social Risk</h4>
        <p4>15%</p4>                            
        <p4>56.7%</p4>
        <p4>28.3%</p4>
        </div>
       
        <div className="flexbox2">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:350 ,
        height:180,
        backgroundColor:"white",
        borderRadius:"11px"
        
      }}>
        <div className="photo">
        <div className='text3'>
          <h2>Score</h2>
        </div>
        
        <img src="/logo.jpg" alt="" />
        <div className='text4'>
        <h3>Hospital Average</h3>
        <h1>63.7%</h1>
        <h4>↑ 0.1% from September</h4>
        <div className="progressBar1">    
          {/* <ThemeProvider theme={theme}> */}
          <CustomizedProgressBars color="primary"></CustomizedProgressBars>
          {/* </ThemeProvider> */}
        </div>
        

        </div>
        </div>

        <div className="flexbox3">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:250 ,
        height:40,
        backgroundColor:"white",
        borderRadius:"11px"
        
      }}>
        <div className="flexbox6">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"center",
        paddingBottom:100,
        alignItems:"center",
        width:320 ,
        height:146,
        backgroundColor:"white",
        borderRadius:"11px"
        
      }}>
         
        <div className='text8'>
          <h2>HCC Gap</h2>
        <h3>Closure Rate</h3>
        <h1>64.1%</h1>
        <h4>↑ 2.3% from September</h4>
       
        </div>

        <div className="progressBar2">    
          {/* <ThemeProvider theme={theme}> */}
          <CustomizedProgressBars color="primary"></CustomizedProgressBars>
          {/* </ThemeProvider> */}
        </div>
        
        <div className="flexbox7">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"center",
        paddingBottom:100,
        alignItems:"center",
        width:333 ,
        height:146,
        backgroundColor:"white",
        borderRadius:"11px"
        
      }}>
        <Circularbar></Circularbar>
        <div className='text9'>
          <h2>ED Visits per 1000</h2>
          <h1>495</h1>
          <h5>↑ 8.9% from September</h5>
          <h4>143 Potentially Avoidable</h4>        
        </div>
        </div>
      </div>
        </div>
      </div>
        <div className='text5'>
        <h3>30-day Readmissions</h3>
        <h1>17.8%</h1>
        <h4>↑ 8.8% from September</h4>
        </div>
        <div className="flexbox4">
        <div style={{
        display:"flex",
        flexdirection:"row",
        justifyContent:"top",
        paddingBottom:100,
        alignItems:"center",
        width:400 ,
        height:40,
        backgroundColor:"white",
        borderRadius:"11px"
        
      }}>
        <Verticalbar></Verticalbar>
        <div className='text6'>
        <h3>IP Visits per 1000</h3>
        <h1>42</h1>
        <h4>↓ 1.5% from September</h4>
        <div className='text10'>
          <h3>17.1%</h3>
          <p>Potentially</p>
          <p>Avoidable</p>
        </div>
        </div>

        
       
        </div>
        
        
        </div>
        </div>
        
      </div>
        
        </div>
          
        </div>
  
       
    </div>

  
    
  );
}

export default App;
