import Link from "next/link";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const TwitterPosts = () => {
  return (
    <div className="bg-white text-black rounded-xl shadow-md overflow-hidden max-h-[230px] flex flex-col">
      {/* First Post */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-start space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Dev Sethi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <h2 className="font-bold text-sm truncate">Dev Prasad Sethi</h2>
              <BsPatchCheckFill className="text-blue-600" />
            </div>
            <p className="text-gray-500 text-xs">@Devsethi</p>
            <p className="mt-1 text-xs line-clamp-2">
              🚧 Currently building an AI-powered productivity app with Next.js
              + TypeScript! Integrating
              <span className="text-blue-500"> Gemini AI API</span> for enhanced
              functionality. More to come! #Nextjs #AI
            </p>
          </div>
          <FaSquareXTwitter size={25} />
        </div>
        <div className="mt-2 flex justify-between ml-12 mr-6 text-gray-500 text-xs">
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>747</span>
          </button>
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>345</span>
          </button>
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>1.5k</span>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Post with Overlay */}
      <div className="relative flex-1 overflow-hidden">
        <div className="p-3">
          <div className="flex items-start space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Dev Sethi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <h2 className="font-bold text-sm truncate">Dev Prasad Sethi</h2>
                <BsPatchCheckFill className="text-blue-600" />
              </div>
              <p className="text-gray-500 text-xs">@Devsethi</p>
              <p className="mt-1 text-xs line-clamp-2">
                🚧 Currently building an AI-powered productivity app with
                Next.js + TypeScript! Integrating
                <span className="text-blue-500"> Gemini AI API</span> for
                enhanced functionality. More to come! #Nextjs #AI
              </p>
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <Link href="https://twitter.com/DevSethi45" target="_blank">
            <button className="w-full bg-black text-white py-3 px-4 rounded-lg text-sm font-bold hover:bg-gray-800 transition duration-300">
              Follow me @DevSethi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwitterPosts;
