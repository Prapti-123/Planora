import React from 'react';

export default function Loader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="125 125"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-8 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="80 200"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-16 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Fetching AI Data...
          </h2>
          <p className="text-gray-600 animate-pulse">
            Please wait while we process your request
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}