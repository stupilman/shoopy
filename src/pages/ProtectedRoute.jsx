import React from 'react';
import { useAuthContext } from '../components/context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to={'/'} replace />;
  }

  return children;
}

export default ProtectedRoute;
