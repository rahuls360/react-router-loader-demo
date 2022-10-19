import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const { data } = useLoaderData();
  return (
    <main>
      <Navbar />
      {/* Child routes will be rendered in the Outlet */}
      <pre>{JSON.stringify(data[0], null, 2)}</pre>
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
