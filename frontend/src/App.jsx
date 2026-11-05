import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import UserLevel from './pages/UserLevel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The App now starts at the Splash Screen */}
        <Route path="/" element={<SplashScreen />} />
        
        {/* The Login page is now at /login */}
        <Route path="/login" element={<Login />} />
        
        {/* The User Level page stays here */}
        <Route path="/user-level" element={<UserLevel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;