import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      navigate("/workspace-setup");
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Side - Gradient Panel */}
      <div className="w-1/2 bg-gradient-to-b from-purple-600 to-purple-900 flex flex-col items-center justify-center p-8">
        <div className="flex items-center mb-6">
          <div className="h-6 w-6 rounded-full border-2 border-white mr-2"></div>
          <span className="font-medium">ProofChain</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
        <p className="text-sm text-center mb-8">Complete these easy steps to register your account.</p>
        
        <div className="w-full max-w-xs space-y-3">
          <button className="w-full bg-white text-black rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-black rounded-full mr-2 flex items-center justify-center text-white text-xs">1</span>
            Sign up your account
          </button>
          
          <button className="w-full bg-black bg-opacity-20 rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-white bg-opacity-20 rounded-full mr-2 flex items-center justify-center text-xs">2</span>
            Set up your workspace
          </button>
          
          <button className="w-full bg-black bg-opacity-20 rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-white bg-opacity-20 rounded-full mr-2 flex items-center justify-center text-xs">3</span>
            Set up your profile
          </button>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <h1 className="text-xl font-bold mb-1">Sign Up Account</h1>
          <p className="text-sm text-gray-400 mb-6">Enter your personal data to create your account.</p>
          
          <div className="flex gap-4 mb-4">
            <button 
              onClick={googleLogin}
              className="flex-1 border border-gray-700 rounded py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex-1 border border-gray-700 rounded py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
              </svg>
              Github
            </button>
          </div>
          
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-800"></div>
            <span className="text-sm text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="eg. John" 
                  className="w-full bg-black border border-gray-800 rounded p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input 
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="eg. Francisco" 
                  className="w-full bg-black border border-gray-800 rounded p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="eg. johnfrancis@gmail.com" 
                className="w-full bg-black border border-gray-800 rounded p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password" 
                  className="w-full bg-black border border-gray-800 rounded p-2 text-sm pr-10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                  minLength={8}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-purple-500 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye size={16} className="text-gray-500" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters.</p>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black rounded py-2 font-medium mt-2 hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </button>
            
            <p className="text-sm text-center">
              Already have an account? <Link to="/sign-in" className="text-purple-500 hover:text-purple-400 transition-colors">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
