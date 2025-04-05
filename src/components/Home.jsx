import ImagePreviwe from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import {enhancedImageAPI} from "../utils/enhanceImageApi";

const home = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const uploadImageHandler = async (file) => {
        setOriginalImage(URL.createObjectURL(file));
        setloading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            console.log(enhancedURL);
            setEnhancedImage(enhancedURL.image);
            setloading(false);
        } catch (error) {
            console.log(error.message);
            alert("Error: " + error.message);
        }
    }

    return (
        <div className="flex flex-col gap-8 justify-center w-full items-center">
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreviwe
                loading={loading} 
                uploaded={originalImage} 
                enhanced={enhancedImage} 
            />
        </div>
    )
}

export default home