import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

// The Home component is a functional component used to structure the main page layout
const Home = () => {
  return (
    <>
    <main>
        <Header />
        <Outlet /> {/* Outlet component renders the current route's child routes */}
    </main>
    </>
  )
}

export default Home
