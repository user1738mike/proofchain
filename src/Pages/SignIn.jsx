import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import AnimatedGrid from "../components/magicui/AnimatedGrid";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#6bd6ff] relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedGrid />

      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/" className="flex items-center gap-2 justify-center text-black font-bold text-lg mb-8">
            <ShieldCheckIcon className="h-6 w-6" />
            ProofChain
          </Link>
          <h2 className="text-center text-2xl font-bold tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-lg bg-white/80 backdrop-blur-md px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-lg bg-white/80 backdrop-blur-md px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </motion.button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-black">
            Not a member?{" "}
            <Link
              to="/sign-up"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up now
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
