import { Navigate } from "react-router";
import type { ReactNode } from "react";
import { authAPI } from "@/services/api";

type ProtectedRouteProps = {
  children: ReactNode;
};


export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = authAPI.isLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = authAPI.isLoggedIn();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
