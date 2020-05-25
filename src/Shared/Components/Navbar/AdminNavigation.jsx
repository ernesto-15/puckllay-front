import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import AdminNavLinks from './AdminNavLinks'
import SideDrawer from './SideDrawer'
import './MainNavigation.css'

const AdminNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

	const spanClass = drawerIsOpen ? 'open' : ''

  return (
    <>
      <SideDrawer show={drawerIsOpen} onClick={toggleDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <AdminNavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={`main-navigation__menu-btn ${spanClass}`}
          onClick={toggleDrawerHandler}
        >
          <span className='line1 ' />
          <span className='line2 ' />
          <span className='line3 ' />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>
            <img className='logo' src='../../../../js.png' alt='' />
            <h1 className='logo-title'>Puckllay</h1>
          </Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <AdminNavLinks/>
        </nav>
      </MainHeader>
    </>
  )
}

export default AdminNavigation
