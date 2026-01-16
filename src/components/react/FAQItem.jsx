import React, { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-2">
      <button
        className="flex justify-between items-center w-full text-left py-6 group transition-all"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'}`}>
          {question}
        </span>

        <svg
          className={`w-5 h-5 transform transition-all duration-500 ${isOpen ? 'rotate-180 text-brand-primary' : 'rotate-0 text-slate-500'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 font-light leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
}