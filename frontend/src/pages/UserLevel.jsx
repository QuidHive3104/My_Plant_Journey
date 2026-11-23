import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; 
import myBackground from '../assets/bg1.png'; 

export default function UserLevel() {
  const navigate = useNavigate();
  const [checkingLevel, setCheckingLevel] = useState(true); 

  // 1. Check if the user already has a level saved in the database
  useEffect(() => {
    const checkExistingLevel = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('level')
          .eq('id', user.id)
          .single();

        // If a level is found, skip this page and go straight to the E-Garden
        if (data && data.level) {
          navigate('/e-garden'); 
          return;
        }
      }
      // If no level found (new user), show the buttons
      setCheckingLevel(false);
    };

    checkExistingLevel();
  }, [navigate]);

  // 2. Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  // 3. Save level function
  const selectLevel = async (level) => {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) throw new Error("Could not find user session.");

      const { error: dbError } = await supabase
        .from('users')
        .upsert({ 
          id: user.id, 
          level: level 
        });

      if (dbError) throw dbError;

      localStorage.setItem('userLevel', level);
      navigate('/e-garden'); // Navigate to your teammate's E-Garden page

    } catch (error) {
      alert("Error saving level: " + error.message);
    }
  };

  // 4. Show a loading screen while checking the database
  if (checkingLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-xl font-bold text-[#0d3b2e] animate-pulse">Loading your garden...</p>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${myBackground})` }}
    >
      {/* The Glassmorphism Card */}
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 text-center">
        
        <h1 className="text-3xl font-extrabold mb-2 text-[#0d3b2e]">Select Your Gardening Level</h1>
        <p className="text-[#0d3b2e]/80 font-medium mb-8">This helps us give you the right care tips!</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          {['BEGINNER', 'MODERATE', 'PRO'].map((level) => (
            <button
              key={level}
              onClick={() => selectLevel(level)}
              className="bg-linear-to-b from-green-200 to-green-600 w-full md:w-48 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-white transition-all duration-300"
            >
              <span className="text-2xl font-bold text-[#0d3b2e]">{level}</span>
            </button>
          ))}
        </div>

        <button 
          onClick={handleLogout}
          className="mt-4 text-[#0d3b2e] font-bold bg-white/50 px-8 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md"
        >
          Log Out
        </button>

      </div>
    </div>
  );
}