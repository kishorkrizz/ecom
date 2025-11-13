import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
    const navigate = useNavigate();
  return (
    <>
    <p className='bg-green-500'>Welcome to the Login Page</p>
    <button className='bg-blue-500 text-xl text-white hover:bg-blue-400 hover:-scale-x-200 p-5 rounded-lg'
    
    ><a href="/">Home</a></button>
    <button className='bg-blue-500 text-xl text-white hover:bg-blue-400 hover:-scale-x-200 p-5 rounded-lg'
    onClick={() => navigate('/form')} >Forms</button>
    <button className='bg-blue-500 text-xl text-white hover:bg-blue-400 hover:-scale-x-200 p-5 rounded-lg'
    onClick={() => navigate('/list')} >List</button>
    </>
  )
}

export default login
