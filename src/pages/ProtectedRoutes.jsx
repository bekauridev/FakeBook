import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  // useEffect(
  //   function () {
  //     if (!isAuthenticated) navigate("/");
  //   },
  //   [isAuthenticated, navigate]
  // );
  return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoutes;
