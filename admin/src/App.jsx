import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Home from './pages/Home'
import Lists from './pages/Lists'
import Login from './pages/Login'
import Orders from './pages/Orders'
import { adminDataContext } from './context/AdminContext'

const App = () => {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
    {!adminData ? <Login /> :   <>
      <Routes>
      <Route path='/' element={<Home />}/>  
      <Route path='/add' element={<Add />}/>
      <Route path='/list' element={<Lists />}/>
      <Route path='/orders' element={<Orders />}/>        
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
    }
    </>
  )
}

export default App