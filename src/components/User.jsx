import React from 'react';

function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center shrink-0'>
      <img className="w-10 h-10 rounded-full mr-2" src={photoURL} alt={displayName} />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}

export default User;
