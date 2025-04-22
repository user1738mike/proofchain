import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/useAuth";

export default function WorkspaceSetup() {
  const [workspaceData, setWorkspaceData] = useState({
    name: "",
    type: "personal",
    industry: "",
    size: "small",
  });
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically save the workspace settings to your backend
    navigate("/profile-setup"); // Proceed to profile setup
  };

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Other",
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Side - Gradient Panel */}
      <div className="w-1/2 bg-gradient-to-b from-purple-600 to-purple-900 flex flex-col items-center justify-center p-8">
        <div className="flex items-center mb-6">
          <div className="h-6 w-6 rounded-full border-2 border-white mr-2"></div>
          <span className="font-medium">ProofChain</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Set Up Your Workspace</h2>
        <p className="text-sm text-center mb-8">
          Customize your workspace to match your needs.
        </p>

        <div className="w-full max-w-xs space-y-3">
          <button className="w-full bg-black bg-opacity-20 rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-white bg-opacity-20 rounded-full mr-2 flex items-center justify-center text-xs">
              1
            </span>
            Sign up your account
          </button>

          <button className="w-full bg-white text-black rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-black rounded-full mr-2 flex items-center justify-center text-white text-xs">
              2
            </span>
            Set up your workspace
          </button>

          <button className="w-full bg-black bg-opacity-20 rounded-full py-3 px-4 font-medium flex items-center justify-center">
            <span className="h-4 w-4 bg-white bg-opacity-20 rounded-full mr-2 flex items-center justify-center text-xs">
              3
            </span>
            Set up your profile
          </button>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <h1 className="text-xl font-bold mb-1">Workspace Setup</h1>
          <p className="text-sm text-gray-400 mb-6">
            Configure your workspace environment.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Workspace Name</label>
              <input
                type="text"
                value={workspaceData.name}
                onChange={(e) =>
                  setWorkspaceData({ ...workspaceData, name: e.target.value })
                }
                placeholder="Enter workspace name"
                className="w-full bg-black border border-gray-800 rounded p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Workspace Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setWorkspaceData({ ...workspaceData, type: "personal" })
                  }
                  className={
                    workspaceData.type === "personal"
                      ? "p-4 border rounded-lg text-center transition-colors border-purple-500 bg-purple-500/10"
                      : "p-4 border rounded-lg text-center transition-colors border-gray-800 hover:border-gray-700"
                  }
                >
                  <div className="font-medium mb-1">Personal</div>
                  <div className="text-xs text-gray-400">
                    For individual use
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setWorkspaceData({ ...workspaceData, type: "team" })
                  }
                  className={
                    workspaceData.type === "team"
                      ? "p-4 border rounded-lg text-center transition-colors border-purple-500 bg-purple-500/10"
                      : "p-4 border rounded-lg text-center transition-colors border-gray-800 hover:border-gray-700"
                  }
                >
                  <div className="font-medium mb-1">Team</div>
                  <div className="text-xs text-gray-400">For collaboration</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Industry</label>
              <select
                value={workspaceData.industry}
                onChange={(e) =>
                  setWorkspaceData({
                    ...workspaceData,
                    industry: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-800 rounded p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              >
                <option value="">Select industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Team Size</label>
              <div className="grid grid-cols-3 gap-4">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setWorkspaceData({ ...workspaceData, size })}
                    className={
                      workspaceData.size === size
                        ? "p-2 border rounded-lg text-center transition-colors border-purple-500 bg-purple-500/10"
                        : "p-2 border rounded-lg text-center transition-colors border-gray-800 hover:border-gray-700"
                    }
                  >
                    <div className="font-medium capitalize">{size}</div>
                    <div className="text-xs text-gray-400">
                      {size === "small"
                        ? "1-10"
                        : size === "medium"
                        ? "11-50"
                        : "50+"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                className="w-full bg-white text-black rounded py-2 font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Continue to Profile Setup
              </motion.button>

              <button
                type="button"
                onClick={() => navigate("/profile-setup")}
                className="w-full mt-3 bg-transparent text-gray-400 hover:text-white py-2 font-medium transition-colors"
              >
                Skip for now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
