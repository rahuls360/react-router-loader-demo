import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      {/* Child routes will be rendered in the Outlet */}
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
