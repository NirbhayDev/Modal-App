import React from 'react'
import Spinner from '../../../assets/spinner.gif';

const fullPage = ()=>{
    return(
        <div style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            backgroundColor: 'white'
        }}>
         <img src={Spinner}  
         alt="loading"
         style={{
             top: '50%',
             left: '48%',
             zIndex: 1000,
             position: 'absolute',
         }}
          />
          <h1 style={{
              position: 'fixed',
              color: 'black',
              fontSize: 30,
              top: '65%',
              left: '46%'
          }}>loading ...</h1>
        </div>
    )
}

export default fullPage;