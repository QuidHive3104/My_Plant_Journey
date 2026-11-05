import { useNavigate } from 'react-router-dom';
import myBackground from '../assets/bg1.png'; 

export default function UserLevel() {
  const navigate = useNavigate();

  const selectLevel = (level) => {
    localStorage.setItem('userLevel', level);
    // Later, you will change this to navigate('/garden')
    alert(`You selected: ${level}. (Welcome To MyPlantJourneY!)`); 
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${myBackground})` }}
    >
      
      {/* The Glassmorphism Card */}
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 text-center">
        
        <h1 className="text-3xl font-extrabold mb-2 text-[#0d3b2e]">Select Your Gardening Level</h1>
        <p className="text-[#0d3b2e]/80 font-medium mb-8">This helps us give you the right care tips!</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {['BEGINNER', 'MODERATE', 'PRO'].map((level) => (
            <button
              key={level}
              onClick={() => selectLevel(level)}
              className="bg-gradient-to-b from-green-200 to-green-600 w-full md:w-48 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-white transition-all duration-300"
            >
              <span className="text-2xl font-bold text-[#0d3b2e]">{level}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}