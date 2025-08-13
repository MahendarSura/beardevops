
import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // fade out transition time
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';
  const icon =
    type === 'success' ? (
      <CheckCircle2 className="h-5 w-5 text-green-500" />
    ) : (
      <AlertCircle className="h-5 w-5 text-red-500" />
    );

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed top-4 right-4 z-50 flex items-center ${bgColor} border-l-4 ${borderColor} ${textColor} p-4 rounded shadow-md transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>

      <p className="ml-3 text-sm font-medium">{message}</p>

      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        aria-label="Close notification"
        className="ml-auto pl-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-500 rounded"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Toast;

