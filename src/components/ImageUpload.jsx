import React from 'react';

const ImageUpload = (props) => {

    const showImageHandler = (event) => {
        const file = event.target.files[0];
        if(file) {
            props.uploadImageHandler(file);
        }

    }

    return (
        <div className='shadow-lg rounded-2xl p-6 min-w-70 max-w-90'>
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-5 text-center hover:border-blue-500 transition-all flex flex-col gap-5"
            >
                <input type="file" id="fileInput" name="fileInput" className="hidden" onChange={showImageHandler} />
                <span className="text-center">Upload Image or drag and drop</span>
            </label>
        </div>
    );
};

export default ImageUpload;
