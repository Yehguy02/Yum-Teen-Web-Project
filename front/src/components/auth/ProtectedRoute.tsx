import { Navigate } from "react-router";
import type { ReactNode } from "react";
import { authAPI } from "@/services/api";

type ProtectedRouteProps = {
  children: ReactNode;
};

/**
 * ProtectedRoute component - redirects to login if user is not authenticated
 * Wrap this around any route that requires authentication
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = authAPI.isLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

/**
 * PublicRoute component - redirects to home if user is already authenticated
 * Use this for login/signup pages to prevent authenticated users from accessing them
 */
export const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = authAPI.isLoggedIn();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
