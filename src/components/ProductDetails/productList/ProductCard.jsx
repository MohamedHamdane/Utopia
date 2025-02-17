// // import React from "react";
// import PropTypes from "prop-types";

// function ProductCard({ category, price, details }) {
//   return (
//     <div className="flex flex-col w-full">
//       <div className="flex gap-5 max-md:flex-col">
//         <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col grow mt-4 max-md:mt-10">
//             <img
//               loading="lazy"
//               src={details.image}
//               className="object-contain aspect-[1.45] w-[182px]"
//               alt={details.title}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col items-start text-2xl font-light text-stone-700 max-md:mt-6">
//             <div className="text-zinc-950">{details.title}</div>
//             {details.features.map((feature, index) => (
//               <div key={index} className="mt-5 text-red-400">
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="z-10 self-center text-2xl font-light text-black">
//         {category}
//       </div>
//       <div className="self-start -mt-2.5 text-4xl text-zinc-950">${price}</div>
//       <div className="flex z-10 self-end mt-0">
//         <button
//           className="flex items-center"
//           tabIndex={0}
//           aria-label="Edit product"
//         >
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac83a60cc4d42b3b6256ecc07a350f8366bd0841aaaf3edd474f4f610ace264d?placeholderIfAbsent=true&apiKey=4598c04e45ef438489953343a862f3de"
//             className="object-contain shrink-0 aspect-square w-[39px]"
//             alt="Edit"
//           />
//         </button>
//         <button
//           className="flex items-center"
//           tabIndex={0}
//           aria-label="Delete product"
//         >
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a04821796911a9bbb2e3a4b151bcfee0eacbaebf7b2926fc9dde5209393d9b0f?placeholderIfAbsent=true&apiKey=4598c04e45ef438489953343a862f3de"
//             className="object-contain shrink-0 aspect-square w-[39px]"
//             alt="Delete"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// // PropTypes Validation
// ProductCard.propTypes = {
//   category: PropTypes.string.isRequired, // Ensures category is a required string
//   price: PropTypes.number.isRequired, // Ensures price is a required number
//   details: PropTypes.shape({
//     image: PropTypes.string.isRequired, // Ensures details.image is a required string
//     title: PropTypes.string.isRequired, // Ensures details.title is a required string
//     features: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures details.features is a required array of strings
//   }).isRequired,
// };

// export default ProductCard;
