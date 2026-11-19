import { supabase } from '../lib/supabaseClient';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import myBackground from '../assets/bg1.png'; 

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
  e.preventDefault();
  
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Call Supabase to create the user
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name, // Saves the name to the user's profile
      }
    }
  });

  if (error) {
    alert("Error signing up: " + error.message);
  } else {
    alert("Account created successfully! Please log in.");
    navigate('/login');
  }
};

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${myBackground})` }} 
    >
      {/* The Glassmorphism Card */}
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40">
        
        <h2 className="text-4xl font-extrabold text-[#0d3b2e] mb-6">Sign Up</h2>
        
        <form onSubmit={handleSignUp}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-[#0d3b2e] font-bold mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-[#0d3b2e] font-bold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-[#0d3b2e] font-bold mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-[#0d3b2e] font-bold mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border-2 border-[#0d3b2e] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-600"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#22c55e] text-black text-lg font-bold py-3 rounded-lg hover:bg-green-500 transition-colors shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-6 text-[#0d3b2e] text-sm">
          Already have an account? <Link to="/login" className="text-[#22c55e] font-bold hover:underline">Sign In</Link>
        </p>

      </div>
    </div>
  );
}