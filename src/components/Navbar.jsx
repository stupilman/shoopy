import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User.jsx';
import Button from './ui/Button.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import CartStatus from './CartStatus.jsx';

function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to={'/'} className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to={'/products'}>Products</Link>
        {user && (
          <Link to={'/carts'}>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to={'/products/new'} className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text="Login" />}
        {user && <Button onClick={logout} text="Logout" />}
      </nav>
    </header>
  );
}

export default Navbar;
