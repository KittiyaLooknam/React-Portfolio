// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom'; // Page the  user is currently on.
import Nav from './components/NavTabs';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
    
  );
}

export default App;
