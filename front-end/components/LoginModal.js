'use client';

import LoginForm from './LoginForm';

export default function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-gray-700 text-3xl font-bold"
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <LoginForm onSuccess={onClose} />

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
