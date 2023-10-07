import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main
      style={{
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
      className='flex-1 mx-auto mt-24 mb-6 bg-white p-8 max-w-4xl'
    >
      <Outlet />
    </main>
  )
}

export default Main