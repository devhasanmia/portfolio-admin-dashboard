import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { logout } from "../../redux/services/auth/authSlice";
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  if (!token || token.length === 0) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded.exp || decoded.exp * 1000 < Date.now()) {
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
