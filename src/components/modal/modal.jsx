'use client';

import { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({conditions}) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => {

      cancelAnimationFrame(raf);
      setIsVisible(false);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-10 transition-colors duration-300 ${
        isVisible ? 'bg-black/30' : 'bg-transparent pointer-events-none'
      }`}
    >
      <div
        className={`bg-white flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-400 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        {conditions.success ? <AiFillCheckCircle size={32} className="text-green-500" /> : <AiFillCloseCircle size={32} color='red' />}
        <p className="text-lg font-semibold text-gray-700">{conditions.messages}</p>
      </div>
    </div>
  );
}
