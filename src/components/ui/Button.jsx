import React from 'react';

function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand text-white rounded-sm hover:brightness-110 cursor-pointer py-2 px-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
