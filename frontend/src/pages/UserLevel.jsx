import { useNavigate } from 'react-router-dom';

export default function UserLevel() {
  const navigate = useNavigate();

  const selectLevel = (level) => {
    localStorage.setItem('userLevel', level);
    // We will change this to navigate('/garden') later when the garden page is built
    alert(`You selected: ${level}. (Garden page coming next!)`); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <h1 className="text-3xl font-bold mb-2 text-green-800 text-center">Select Your Gardening Level</h1>
      <p className="text-gray-600 mb-8 text-center">This helps us give you the right care tips!</p>
      
      <div className="flex flex-col md:flex-row gap-6">
        {['Beginner', 'Moderate', 'Pro'].map((level) => (
          <button
            key={level}
            onClick={() => selectLevel(level)}
            className="bg-white w-64 p-8 rounded-xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-green-500 transition-all duration-300"
          >
            <span className="text-2xl font-semibold text-green-700">{level}</span>
          </button>
        ))}
      </div>
    </div>
  );
}