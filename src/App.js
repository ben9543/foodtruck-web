import Authentication from './components/Authentication';
import Geolocator from './components/Geolocator';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App text-gray-800">
      <Authentication />
      {
        user.loggedIn ? 
        <Geolocator/>
          :
        null
      }
    </div>
  );
}

export default App;
