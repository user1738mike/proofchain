import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./context";

const API_URL = "http://localhost:5000/api/auth";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add interceptor to add token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  // Check if user is logged in
  const checkUser = async () => {
    try {
      const res = await axiosInstance.get("/me");
      setUser(res.data.data);
    } catch (error) {
      setUser(null);
      // Only log actual errors, not unauthorized responses
      if (error.response?.status !== 401) {
        console.error("Error checking user status:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (userData) => {
    try {
      const res = await axiosInstance.post("/register", userData);
      setUser(res.data.user);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration failed. Please try again.",
      };
    }
  };

  // Login user
  const login = async (userData) => {
    try {
      const res = await axiosInstance.post("/login", userData);
      setUser(res.data.user);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Invalid credentials",
      };
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await axiosInstance.get("/logout");
      setUser(null);
      localStorage.removeItem("token");
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Logout failed",
      };
    }
  };

  // Google OAuth login
  const googleLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      `${API_URL}/google`,
      "Google Login",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (popup) {
      // Poll the popup to check if it's closed
      const checkPopup = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(checkPopup);
          checkUser(); // Check if user was authenticated
        }
      }, 1000);

      // Handle success message from popup
      const handleMessage = async (event) => {
        // Check if the message is from our popup and contains oauth data
        if (
          event.origin === window.location.origin &&
          event.data?.type === "oauth-callback" &&
          event.data?.success
        ) {
          clearInterval(checkPopup);
          window.removeEventListener("message", handleMessage);
          if (event.data.token) {
            localStorage.setItem("token", event.data.token);
          }
          await checkUser();
        }
      };

      window.addEventListener("message", handleMessage);
    } else {
      console.error(
        "Failed to open Google login popup. Please check if popups are blocked."
      );
    }
  };

  // GitHub OAuth login
  const githubLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      `${API_URL}/github`,
      "GitHub Login",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (popup) {
      const checkPopup = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(checkPopup);
          checkUser();
        }
      }, 1000);

      const handleMessage = async (event) => {
        if (
          event.origin === window.location.origin &&
          event.data?.type === "oauth-callback" &&
          event.data?.success
        ) {
          clearInterval(checkPopup);
          window.removeEventListener("message", handleMessage);
          if (event.data.token) {
            localStorage.setItem("token", event.data.token);
          }
          await checkUser();
        }
      };

      window.addEventListener("message", handleMessage);
    } else {
      console.error(
        "Failed to open GitHub login popup. Please check if popups are blocked."
      );
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    googleLogin,
    githubLogin,
    refreshUser: checkUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
