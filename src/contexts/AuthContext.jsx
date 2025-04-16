import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    // Check if user is logged in
    const checkUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/me', {
                withCredentials: true
            });
            setUser(res.data.data);
        } catch (error) {
            setUser(null);
        }
        setLoading(false);
    };

    // Register user
    const register = async (userData) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', userData, {
                withCredentials: true
            });
            setUser(res.data.user);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Something went wrong'
            };
        }
    };

    // Login user
    const login = async (userData) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', userData, {
                withCredentials: true
            });
            setUser(res.data.user);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Invalid credentials'
            };
        }
    };

    // Logout user
    const logout = async () => {
        try {
            await axios.get('http://localhost:5000/api/auth/logout', {
                withCredentials: true
            });
            setUser(null);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Something went wrong'
            };
        }
    };

    // Google OAuth login
    const googleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            register,
            login,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}