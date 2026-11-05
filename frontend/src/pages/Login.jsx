import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// 1. IMPORT YOUR IMAGE HERE
import myBackground from '../assets/bg1.png'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Later, connect this to the backend
    navigate('/user-level'); 
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      // 2. USE THE IMPORTED IMAGE HERE
      style={{ backgroundImage: `url(${myBackground})` }} 
    >
      {/* The Glassmorphism Card */}
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40">
        
        <h2 className="text-4xl font-extrabold text-[#0d3b2e] mb-8">Sign In</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block text-[#0d3b2e] font-bold mb-2">Enter email</label>
            <input
              type="email"
              className="w-full p-3 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#0d3b2e] font-bold mb-2">Enter Password</label>
            <input
              type="password"
              className="w-full p-3 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#22c55e] text-black text-lg font-bold py-3 rounded-lg hover:bg-green-500 transition-colors shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* The "Or" Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t-2 border-[#0d3b2e]/20"></div>
          <span className="px-3 text-[#0d3b2e] font-medium">Or</span>
          <div className="flex-grow border-t-2 border-[#0d3b2e]/20"></div>
        </div>

        {/* Google Sign In */}
        <div className="text-center">
          <p className="text-[#0d3b2e] font-bold mb-3">Sign up with</p>
          <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            {/* Google Icon SVG */}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-[#0d3b2e] text-sm">
          Don't have an account? <Link to="/register" className="text-[#22c55e] font-bold hover:underline">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}