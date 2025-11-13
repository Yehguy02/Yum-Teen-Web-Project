/**
 * API Service - Handles all backend API calls
 * Backend URL: http://localhost:8000
 */

const API_BASE_URL = "http://localhost:8000";

// Helper function to get auth token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

// Helper function to make authenticated requests
const makeRequest = async (
  endpoint: string,
  method: string = "GET",
  body?: unknown
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = getAuthToken();
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "API request failed");
  }

  return response.json();
};

/**
 * Auth APIs
 */
export const authAPI = {
  // Login with email and password
  login: async (email: string, password: string) => {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Login failed");
    }

    return response.json();
  },

  // Signup with email and password
  signup: async (email: string, password: string) => {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Signup failed");
    }

    return response.json();
  },

  // Logout - clears local token
  logout: () => {
    localStorage.removeItem("token");
  },

  // Check if user is logged in
  isLoggedIn: (): boolean => {
    return !!localStorage.getItem("token");
  },

  // Get stored token
  getToken: (): string | null => {
    return localStorage.getItem("token");
  },
};

/**
 * Store APIs
 */
export const storeAPI = {
  // Get home page with popular and trending stores
  getHome: async () => {
    return makeRequest("/");
  },

  // Get store by ID
  getStore: async (storeId: number) => {
    return makeRequest(`/store/${storeId}`);
  },

  // Search stores by name
  searchByName: async (name: string) => {
    return makeRequest(`/search/name/${name}`);
  },

  // Search stores by category
  searchByCategory: async (category: string) => {
    return makeRequest(`/search/category/${category}`);
  },
};

/**
 * User APIs (require authentication)
 */
export const userAPI = {
  // Get current order
  getCurrentOrder: async () => {
    return makeRequest("/user/current");
  },

  // Get order history
  getOrderHistory: async () => {
    return makeRequest("/user/history");
  },

  // Get favorite stores
  getFavorites: async () => {
    return makeRequest("/user/favorites");
  },

  // Get coupons
  getCoupons: async (code?: string) => {
    if (code) {
      return makeRequest(`/user/coupons/${code}`);
    }
    // If no code provided, try to get all coupons (may need backend endpoint)
    return makeRequest("/user/coupons");
  },
};

export default {
  authAPI,
  storeAPI,
  userAPI,
};
