import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserLevel from './pages/UserLevel';
import EGarden from './pages/EGarden'; 
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The App now starts at the Splash Screen */}
        <Route path="/" element={<SplashScreen />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected Routes (Requires Login) */}
        <Route 
          path="/user-level" 
          element={
            <ProtectedRoute>
              <UserLevel />
            </ProtectedRoute>
          } 
        />
        
        {/* THIS IS THE MISSING ROUTE! */}
        <Route 
          path="/EGarden" 
          element={
            <ProtectedRoute>
              <EGarden />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;