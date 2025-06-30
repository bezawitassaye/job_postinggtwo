// components/RegisterModal.jsx
'use client';

import RegisterForm from './RegisterForm';

export default function RegisterModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black text-3xl font-bold"
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        {/* Register Form */}
        <RegisterForm onSuccess={onClose} />

        {/* Cancel button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
