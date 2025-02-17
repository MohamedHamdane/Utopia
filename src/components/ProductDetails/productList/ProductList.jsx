import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const products = [
  {
    image: "shall.png",
    title: "Shawl",
    description: "+10 colors",
    extraInfo: "Good quality",
    price: "4.99",
    category: "Fashion",
  },
  {
    image: "chair.png",
    title: "Modern Grey Stool",
    description: "Set-bar stool (30”H)",
    extraInfo: "",
    price: "14.49",
    category: "Furnitures",
  },
  {
    image: "laptop.png",
    title: "Laptop",
    description: "Dell Latitude-7900",
    extraInfo: "256GB 16RAM",
    price: "100.00",
    category: "Electronics",
  },
  {
    image: "car.png",
    title: "Super Car",
    description: "Mercedes Benz",
    extraInfo: "S47 Wl3amal",
    price: "199.00",
    category: "Cars",
  },
];

const ProductTable = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/logged-in"); // Navigate to the ProductUpload component
  };
  console.log("Products available:", products);

  if (products.length === 0) {
    return <div className="text-center text-danger">No products available.</div>;
  }
   // Initialize the navigate function
  
    
  return (
    <div className="container py-4">
      <div className="bg-danger text-white text-center py-3">
        <h2 className="mb-0">My Products</h2>
      </div>
      <div className="text-center my-4 display-6 fw-semibold">
        Check out the ads that need to be edited!
      </div>

      <div className="d-flex justify-content-center align-items-center min-vh-100">
      <table className="table w-75 my-custom-table">
          <thead>
            <tr>
              <th className="p-3">Product Details</th>
              <th className="p-3">Price</th>
              <th className="p-3">Category</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="p-3 d-flex align-items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid rounded"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }} // Fixed image size
                  />
                  <div>
                    <div className="font-weight-bold">{product.title}</div>
                    <div className="text-muted">{product.description}</div>
                    {product.extraInfo && (
                      <div className="text-danger italic">{product.extraInfo}</div>
                    )}
                  </div>
                </td>
                <td className="p-3 text-center font-weight-bold align-middle">${product.price}</td>
                <td className="p-3 text-center align-middle">{product.category}</td>
                <td className="p-3 text-center align-middle">
                  <button className="text-primary border-0 bg-transparent">
                    <FaEdit size={20} />
                  </button>
                  <button className="text-danger border-0 bg-transparent">
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-danger px-5 py-3 btn-lg shadow"
        onClick={handleNext}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ProductTable;