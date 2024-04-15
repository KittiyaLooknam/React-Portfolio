import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './pages/Footer';
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