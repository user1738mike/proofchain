import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import AnimatedGrid from "../components/magicui/AnimatedGrid";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");
  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      setError("Please accept the terms and conditions");
      return;
    }

    const result = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });

    if (result.success) {
      navigate("/profile-setup");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#6bd6ff] relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedGrid />

      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center px-4 py-8">
        {/* Header */}
        <Link
          to="/"
          className="flex items-center gap-2 text-black font-bold text-lg mb-12"
        >
          <ShieldCheckIcon className="h-6 w-6" />
          ProofChain
        </Link>

        {/* Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create your account
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
                required
                minLength={6}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="acceptTerms"
                className="ml-2 block text-sm text-gray-700"
              >
                I accept the{" "}
                <Link
                  to="/terms"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>

            <div className="relative flex items-center justify-center text-sm my-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-4 bg-white/0 text-gray-500">
                Or continue with
              </span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <motion.button
                type="button"
                onClick={googleLogin}
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </motion.button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              to="/signin"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
