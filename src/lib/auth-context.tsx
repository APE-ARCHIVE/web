'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { apiClient } from './api';

// User type based on /api/v1/auth/me response
interface User {
    id: string;
    email: string;
    name: string;
    avatar: string | null;
    role: 'GUEST' | 'STUDENT' | 'TEACHER' | 'ADMIN';
    isOnboarded: boolean;
    school?: string;
    batch?: string;
    bio?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://server-apearchive.freeddns.org';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch user profile from API
    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            setUser(null);
            setIsLoading(false);
            return;
        }

        try {
            const response = await apiClient.get('/api/v1/auth/me');
            if (response.data?.success && response.data?.data) {
                setUser(response.data.data);
            } else {
                setUser(null);
                localStorage.removeItem('accessToken');
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setUser(null);
            localStorage.removeItem('accessToken');
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Check for token on mount
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    // Login - redirect to Google OAuth
    const login = useCallback(() => {
        window.location.href = `${API_BASE_URL}/api/v1/auth/google`;
    }, []);

    // Logout - clear localStorage and reset state
    const logout = useCallback(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        setUser(null);
    }, []);

    // Refresh user data
    const refreshUser = useCallback(async () => {
        setIsLoading(true);
        await fetchUser();
    }, [fetchUser]);

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
