import React from 'react';
import { BiSolidError } from "react-icons/bi";

const ErrorPage = ({
  title = "Oops! Something Went Wrong",
  message = "We're sorry, but an unexpected error occurred.",
  buttonText = "Return to Home",
  onReturnHome = () => {
    // Default behavior to redirect to home
    window.location.href = '/';
  }
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <BiSolidError
          className="mx-auto mb-6 text-red-500"
          size={64}
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h1>

        <p className="text-gray-600 mb-6">
          {message}
        </p>

        <button
          onClick={onReturnHome}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;