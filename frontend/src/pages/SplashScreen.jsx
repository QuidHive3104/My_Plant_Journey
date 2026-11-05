import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import your logo (make sure the name matches your file)
import splashLogo from '../assets/logo.png'; 

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer for 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      // After 3 seconds, automatically go to the login page
      navigate('/login');
    }, 3000);

    // Clean up the timer if the user leaves the page early
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b132b]"
    >
      {/* Logo */}
      <img 
        src={splashLogo} 
        alt="My Plant Journey Logo" 
        className="w-48 h-auto mb-4 animate-pulse" 
        
      />
      
      
       <h1 className="text-3xl font-bold text-[#22c55e] tracking-widest mt-4 w-48 h-auto mb-4 animate-pulse">MyPlantJourneY</h1> 
    </div>
  );
}