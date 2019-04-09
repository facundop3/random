import React from 'react';
import './App.css'
import Message from './components/Message/Message'

import SmoothScroll from './components/SmoothScroll/SmoothScroll'
const App  = () => 
    <div className="App">
      <header className="App-header" >
      {/* <SmoothScroll /> */}
       Hello 😘
      </header>
       <Message title='Hola guapo' message='lorem ipsum dolor sit amet'/>
    </div>



export default App
