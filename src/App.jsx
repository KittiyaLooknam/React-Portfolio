
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './pages/footer';
import React from "react";

function App() {
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