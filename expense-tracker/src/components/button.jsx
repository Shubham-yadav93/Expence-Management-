import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-200"
    >
      {children}
    </button>
  );
}
