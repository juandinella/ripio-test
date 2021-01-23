import React from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import './assets/styles/App.scss'

const App = () => (
  <div className='app'>
    <Sidebar/>
    <Header/>
    <Main />
  </div>
);

export default App
