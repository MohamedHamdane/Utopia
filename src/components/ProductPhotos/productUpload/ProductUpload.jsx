// import * as React from "react";
// import PropTypes from "prop-types";
// import UploadBox from "./UploadBox";
// import StepIndicator from "./StepIndicator";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router-dom";

function ProductUpload() {
  const [images, setImages] = useState([[], [], [], []]); // Four separate upload areas

  const onChange = (imageList, index) => {
    const updatedImages = [...images];
    updatedImages[index] = imageList;
    setImages(updatedImages);
  };
  const navigate = useNavigate(); // Initialize the navigate function
  
    const handleNext = () => {
      navigate("/SellerForm"); // Navigate to the ProductUpload component
    };
    const handlePrevious = () => {
      navigate("/"); // Navigate to the previous page (update this path)
    };
  return (

    <form className="container my-2 p-4 bg-white border rounded shadow">
      <div className="text-center bg-danger text-white py-3">
        <h2 className="mb-0">Add Product</h2>
      </div>
      <div className="d-flex border-bottom rounded">
      <div className="flex-fill text-center py-2 border-bottom py-3 text-white" style={{ backgroundColor: 'darkred' }}>
        
          <strong>Product Info</strong>
        </div>
        <div className="flex-fill text-center py-2 border-bottom border-danger py-3" >
          Product Photos
        </div>
        <div className="flex-fill text-center py-2 border-bottom py-3 text-white" style={{ backgroundColor: 'darkred' }}>
          Seller Info
        </div>
      </div>
      {/* Upload Section with Flexbox (2x2 layout) */}
      <div className="flex flex-wrap gap-5 p-5 bg-gray-100 rounded-md shadow-md">
        {images.map((imageList, index) => (
          <div key={index} className="flex flex-col items-center border rounded-lg p-3 bg-white shadow-md w-1/2">
            <ImageUploading
              multiple
              value={imageList}
              onChange={(imageList) => onChange(imageList, index)}
              maxNumber={5}
              dataURLKey="data_url"
              acceptType={["jpg", "png", "jpeg", "gif"]}
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div className="upload__image-wrapper text-center">
                  <button
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg"
                  >
                    <img src="image-uploader.png" width="150px" alt="Upload" />
                  </button>

                  {/* Display Uploaded Images */}
                  <div className="mt-3 flex flex-wrap gap-3">
                    {imageList.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative">
                        <img
                          src={image.data_url}
                          alt=""
                          className="w-24 h-24 object-cover rounded-md border"
                        />
                        <button
                          onClick={() => onImageRemove(imgIndex)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-5">
      <button 
  className="px-6 py-3 border-0 rounded-pill mr-sm-3 mr-md-5 text-white" 
  style={{ backgroundColor: 'red', width: '120px', marginRight: '100px' }}
  onClick={handlePrevious}>
  Previous
</button>
<button 
  className="px-6 py-3 border-0 rounded-pill mr-sm-3 mr-md-5 text-white" 
  style={{ backgroundColor: 'red', width: '120px', marginRight: '20px' }}
  onClick={handleNext}>
  Next
</button>

      </div>
    </form>
  );
}

export default ProductUpload;



