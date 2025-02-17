
import { FormField } from "./FormField";
// import ProductTable from "../../ProductDetails/productList/ProductList";
import { useNavigate } from "react-router-dom";
const formFields = [
  { label: "Product Name:", type: "text", placeholder: "Product Name" },
  { label: "Product Category:", type: "text", placeholder: "Product Category" },
  {
    label: "Product Description:",
    type: "textarea",
    placeholder: "Product Description",
  },
  { label: "Product Price:", type: "text", placeholder: "Product Price" },
  { label: "Location:", type: "text", placeholder: "Location" },
];

export default function ProductForm() {
  
    const navigate = useNavigate(); // Initialize the navigate function
  
    const handleNext = () => {
      navigate("/ProductUpload"); // Navigate to the ProductUpload component
    };
  
  return (
    <form
    className="container my-2 p-4 bg-white border rounded shadow"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Header */}
      <div className="bg-danger text-white text-center py-3">
        <h2 className="mb-0">Add Product</h2>
      </div>

      {/* Tabs */}
      <div className="d-flex border-bottom rounded">
        <div className="flex-fill text-center py-2 border-bottom border-danger py-3" >
          <strong>Product Info</strong>
        </div>
        <div className="flex-fill text-center py-2 border-bottom py-3 text-white mx-1" style={{ backgroundColor: 'darkred' }}>
          Product Photos
        </div>
        <div className="flex-fill text-center py-2 border-bottom py-3 text-white" style={{ backgroundColor: 'darkred' }}>
          Seller Info
        </div>
      </div>

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

      {/* Submit Button */}
      <div className="text-end mt-4">
        <button type="submit" className="btn btn-danger px-4 py-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </form>
  );
  }
