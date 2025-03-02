import React from "react";

export function List({ children }) {
  return <ul className="mt-4 space-y-2">{children}</ul>;
}

export function ListItem({ children }) {
  return (
    <li className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm">
      {children}
    </li>
  );
}
