import React from 'react';
import './App.css'
import Message from './components/Message/Message'

import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
const App  = () => 
    <div className="App">
      {/* <header className="App-header" >
      <SmoothScroll />
       Hello 😘
      </header> */}
      <div className="app-body">
         <Message title='CRM (Cool Random Message)' message={sampleText}/>
      </div>
    </div>



export default App
