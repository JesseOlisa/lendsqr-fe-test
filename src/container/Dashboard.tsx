import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from '../components/User'
import UserInfo from '../components/UserInfo'

const Dashboard = () => {
  return (
    <div className='dashboard-content--container'>
      <Routes>
        <Route path='/*' element={<User />}/>
        <Route path='/user/:id' element={<UserInfo />}/>
      </Routes>
    </div>
  )
}

export default Dashboard