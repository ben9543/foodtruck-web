import Authentication from './components/Authentication';
import Geolocator from './components/Geolocator';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
    <Authentication />
    {
      user.loggedIn ? 
      <Geolocator/>
        :
      null
    }
    </>
  );
}

export default App;
