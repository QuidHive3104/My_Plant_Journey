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
          element={<ProtectedRoute><UserLevel /></ProtectedRoute>} 
        />
        
        <Route 
          path="/e-garden" 
          element={<ProtectedRoute><EGarden /></ProtectedRoute>} 
        />
        
        <Route 
          path="/e-garden/:id" 
          element={<ProtectedRoute><GardenPlantDetails /></ProtectedRoute>} 
        />

        <Route 
          path="/dr-plant" 
          element={<ProtectedRoute><DrPlant /></ProtectedRoute>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;