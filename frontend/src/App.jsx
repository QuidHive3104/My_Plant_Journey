import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserLevel from './pages/UserLevel';
import EGarden from './pages/EGarden';
import GardenPlantDetails from './pages/GardenPlantDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The App now starts at the Splash Screen */}
        <Route path="/" element={<SplashScreen />} />
        
        {/* The Login page is now at /login */}
        <Route path="/login" element={<Login />} />
        
        {/* The Sign Up page is now at /signup */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* The User Level page stays here */}
        <Route path="/user-level" element={<UserLevel />} />

        <Route path="/e-garden" element={<EGarden />} />
        <Route path="/e-garden/:plantId" element={<GardenPlantDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;