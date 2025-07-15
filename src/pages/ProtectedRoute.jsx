import React from 'react';
import { useAuthContext } from '../components/context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (user === undefined) {
    return null; // 아직 초기 로딩 중이면 아무 것도 렌더링하지 않음
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to={'/'} replace />;
  }

  return children;
}

export default ProtectedRoute;

