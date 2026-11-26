import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserLevel from './pages/UserLevel';
import EGarden from './pages/EGarden'; 
import GardenPlantDetails from './pages/GardenPlantDetails';
import DrPlant from './pages/DrPlant';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected Routes */}
        <Route 
          path="/user-level" 
          element={
            <ProtectedRoute>
              <UserLevel />
            </ProtectedRoute>
          } 
        />
        
        {/* E-Garden Routes */}
        <Route path="/e-garden" element={<EGarden />} />
        <Route path="/e-garden/:plantId" element={<GardenPlantDetails />} />

        {/* Dr. Plant Route */}
        <Route path="/dr-plant" element={<DrPlant />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;