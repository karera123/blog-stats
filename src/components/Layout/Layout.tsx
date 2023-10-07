import React from 'react';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='flex flex-row'>
        <Sidebar />
        <div style={{ width: '256px' }} />
        <Main />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout