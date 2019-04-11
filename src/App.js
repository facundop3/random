import React from 'react';
import './App.css'
import Message from './components/Message/Message'

import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
const App  = () => 
    <div className="App">
      <header className="App-header" >
      <SmoothScroll />
       Hello 😘
      </header>
      <div className="app-body">
         <Message title="Adventure awaits 👾" message="// Now is when you scroll :) "/>
      </div>
    </div>



export default App
