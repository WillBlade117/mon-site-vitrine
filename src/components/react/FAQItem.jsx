// src/components/react/FAQItem.jsx
import React, { useState } from 'react';

// Composant React classique avec un état (useState)
export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {/* Icône de flèche qui tourne avec l'état */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : 'rotate-0 text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {/* La réponse est affichée uniquement si isOpen est vrai */}
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}