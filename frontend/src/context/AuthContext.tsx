"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import {
  UserData,
  loginUser as apiLogin,
  logoutUser as apiLogout,
  getStoredUser,
  getAccessToken,
  getCurrentUser,
} from "@/src/lib/api";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<UserData>;
  logout: () => void;
}

// ─── Context ────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount: restore session from localStorage
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          setIsLoading(false);
          return;
        }

        // Try to get current user from stored data first (fast)
        const storedUser = getStoredUser();
        if (storedUser) {
          setUser(storedUser);
        }

        // Then verify with the server (async)
        const serverUser = await getCurrentUser();
        if (serverUser) {
          setUser(serverUser);
        } else {
          // Token expired and refresh failed
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<UserData> => {
    const response = await apiLogin(email, password);
    setUser(response.user);
    return response.user;
  }, []);

  const logout = useCallback(() => {
    apiLogout();
    setUser(null);
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = !!user?.is_admin;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
