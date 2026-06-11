/**
 * API client for communicating with the Django backend.
 * Handles JWT token storage, refresh, and authenticated requests.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// ─── Token Storage ──────────────────────────────────────────────────────────

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('access_token');
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refresh_token');
}

export function setTokens(access: string, refresh: string): void {
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
}

export function clearTokens(): void {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}

// ─── User data in localStorage ──────────────────────────────────────────────

export interface UserData {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  curso: string;
  edad: number | null;
  rol_id: number;
  is_admin: boolean;
  activo: boolean;
}

export function getStoredUser(): UserData | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem('user_data');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setStoredUser(user: UserData): void {
  localStorage.setItem('user_data', JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem('user_data');
}

// ─── API Calls ──────────────────────────────────────────────────────────────

interface LoginResponse {
  tokens: { access: string; refresh: string };
  user: UserData;
}

interface MeResponse {
  user: UserData;
}

interface ApiError {
  error: string;
}

/**
 * Login with email and password.
 */
export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error((data as ApiError).error || 'Error al iniciar sesión');
  }

  const loginData = data as LoginResponse;

  // Store tokens and user
  setTokens(loginData.tokens.access, loginData.tokens.refresh);
  setStoredUser(loginData.user);

  return loginData;
}

/**
 * Get current authenticated user info.
 */
export async function getCurrentUser(): Promise<UserData | null> {
  const token = getAccessToken();
  if (!token) return null;

  const res = await fetch(`${API_URL}/auth/me/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    // Try refreshing
    const refreshed = await tryRefreshToken();
    if (!refreshed) return null;

    // Retry with new token
    const retryRes = await fetch(`${API_URL}/auth/me/`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    if (!retryRes.ok) return null;
    const retryData = (await retryRes.json()) as MeResponse;
    setStoredUser(retryData.user);
    return retryData.user;
  }

  const data = (await res.json()) as MeResponse;
  setStoredUser(data.user);
  return data.user;
}

/**
 * Try to refresh the access token using the stored refresh token.
 */
async function tryRefreshToken(): Promise<boolean> {
  const refresh = getRefreshToken();
  if (!refresh) return false;

  try {
    const res = await fetch(`${API_URL}/auth/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) {
      clearTokens();
      clearStoredUser();
      return false;
    }

    const data = (await res.json()) as LoginResponse;
    setTokens(data.tokens.access, data.tokens.refresh);
    setStoredUser(data.user);
    return true;
  } catch {
    clearTokens();
    clearStoredUser();
    return false;
  }
}

/**
 * Logout — clear all stored auth data.
 */
export function logoutUser(): void {
  clearTokens();
  clearStoredUser();
}
