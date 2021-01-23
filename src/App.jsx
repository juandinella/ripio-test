import React from 'react'
import Sidebar from "./components/Sidebar/index";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
// import Icon from "./Icon";
import './assets/styles/App.scss'

const App = () => (
  <div className='app'>
    {/* <Icon className="icon" name="unicorn" /> */}
    <Sidebar/>
    <Header/>
    <Main />
  </div>
);

export default App
