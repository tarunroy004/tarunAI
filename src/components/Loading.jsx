import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full inset-0 flex items-center justify-center bg-gray-400 bg-opacity-80  backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
        <p className="mt-4 text-white text-lg font-semibold">Processing Image...</p>
      </div>
    </div>
  );
};

export default Loading;
