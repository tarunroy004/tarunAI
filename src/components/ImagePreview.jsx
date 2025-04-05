import React, { useState } from 'react';
import Loading from './Loading';

const ImagePreview = (props) => {

  const originalImage = props.uploaded;
  const enhancedImage = props.enhanced;
  const loading = props.loading;


  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">

      <div className="flex flex-row gap-6 w-full">
        {/* Original Image Preview */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-1/2 h-80">
          <h2 className="text-xl font-semibold text-center bg-gray-500 text-white py-2">
            Original Image
          </h2>
          <div className="pb-10 flex items-center justify-center h-full bg-gray-200">
            {originalImage ? (
              <img src={originalImage} alt="Original" className="w-full h-full object-cover" />
            ) : (
              "No Image Selected"
            )}
          </div>
        </div>

        {/* Enhanced Image Preview */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-1/2 h-80">
          <h2 className="text-xl font-semibold text-center bg-blue-500 text-white py-2">
            Enhanced Image
          </h2>
          <div className=" pb-10 flex items-center justify-center w-full h-full bg-blue-100">
            {enhancedImage && !loading && (
                <img src={enhancedImage} alt="Enhanced" className="w-full h-full object-cover" />
            )}
            {loading ? (
                <Loading />
            ) : (
              ""
            )}
            {!enhancedImage && !loading && (
              "I'm Waiting when you upload your Image..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
