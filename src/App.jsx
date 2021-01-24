import React, { useState, useEffect } from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import './assets/styles/App.scss'

// agregar el estado acá

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => (
    setOpenMenu(!openMenu)
  )

  return (
    <div className='app'>
      <Sidebar openMenu={openMenu} onClickOpenMenu={handleOpenMenu}/>
      <Header openMenu={openMenu} onClickOpenMenu={handleOpenMenu}/>
      <Main />
    </div>
  )
};

export default App
