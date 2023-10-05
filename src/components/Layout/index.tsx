import React from 'react';
import './styles.css'
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout