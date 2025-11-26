import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/check-auth", {
      method: "GET",
      credentials: "include",
    })
      .then(res => {
        if (res.ok) setAuthenticated(true);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
