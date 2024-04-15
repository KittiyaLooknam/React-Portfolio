// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom'; // Page the  user is currently on.
import Nav from './components/NavTabs';
import Footer from './pages/Footer';
import React from "react";


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className='App'>
      <Nav />
      <main className="mx-3">
        <Outlet />
        </main>
      <div className="footer pt-1 mt-3">
        <Footer />
      </div>
      </div>
      </>    
  );
}

export default App;