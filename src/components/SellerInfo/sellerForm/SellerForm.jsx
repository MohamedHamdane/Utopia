
// import { FormInput } from "./FormInput";
// import { NavigationButton } from "./NavigationButton";
import { FormField } from "../../AddProduct/productForm/FormField";
import { useNavigate } from "react-router-dom";
const formFields = [
  { label: "Seller Name", placeholder: "Seller Name" },
  { label: "Seller Phone Number", placeholder: "Seller Phone Number" },
  { label: "Seller Email", placeholder: "Seller Email", type: "email" },
  { label: "About Seller", placeholder: "About Seller", minHeight: "162px" },
  { label: "Location", placeholder: "Location" },
];
// const formFields = [
//   { label: "Seller Name:", type: "text", placeholder: "Product Name" },
//   { label: "Product Category:", type: "text", placeholder: "Product Category" },
//   {
//     label: "Product Description:",
//     type: "textarea",
//     placeholder: "Product Description",
//   },
//   { label: "Product Price:", type: "text", placeholder: "Product Price" },
//   { label: "Location:", type: "text", placeholder: "Location" },
// ];

export function SellerForm() {
  const navigate = useNavigate(); // Initialize the navigate function
  
    const handleNext = () => {
      navigate("/ProductTable"); // Navigate to the ProductUpload component
    };
    const handlePrevious = () => {
      navigate("/ProductUpload"); // Navigate to the previous page (update this path)
    };
  return (
    <form className="container my-2 p-2 bg-white border rounded shadow">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
      <div className="text-center bg-danger text-white py-3">
        <h2 className="mb-0">Add Product</h2>
      </div>

        <div className="d-flex border-bottom rounded">
      <div className="flex-fill text-center py-2 border-bottom py-3 text-white" style={{ backgroundColor: 'darkred' }}>
        
          Product Info
        </div>
        <div className="flex-fill text-center py-2 border-bottom py-3 text-white mx-1" style={{ backgroundColor: 'darkred' }}>
        
          Product Photos
        </div>
        <div className="flex-fill text-center py-2 border-bottom border-danger py-3" >
        <strong>Seller Info</strong>
        </div>
      </div>

        {/* {formInputs.map((input, index) => (
          <FormInput
            key={index}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            minHeight={input.minHeight}
          />
        ))} */}
        
      
              {/* Form Fields */}
              <div className="mt-4">
                {formFields.map((field, index) => (
                  <FormField
                    key={index}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>
        
              
              
           

              <div className="flex justify-between mt-2">
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
        
      </div>
    </form>
  );
}
