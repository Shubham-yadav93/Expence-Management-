
import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
