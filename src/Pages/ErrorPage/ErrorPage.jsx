import React from "react";
import { useNavigate } from "react-router";
import { Briefcase } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Briefcase className="h-10 w-10 text-blue-500" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          It looks like you might be lost in your job search journey.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
