import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserLevel from './pages/UserLevel';
import ProtectedRoute from './components/ProtectedRoute'; 

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
        
        {/* 🚨 SECURED ROUTE: Wrap UserLevel in ProtectedRoute 🚨 */}
        <Route 
          path="/user-level" 
          element={
            <ProtectedRoute>
              <UserLevel />
            </ProtectedRoute>
          } 
        />
        
        {/* Note: When you add Garden and CareLog to App.jsx later, wrap them the exact same way! */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;