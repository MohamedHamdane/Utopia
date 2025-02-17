// import PropTypes from "prop-types";

// function UploadBox({ imageUrls }) {
//   return (
//     <div className="grid grid-cols-2 gap-4 px-20 py-28 border-dashed border-[21px] border-zinc-300 max-md:grid-cols-1 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
//       {imageUrls.map((url, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <div className="relative flex w-full aspect-[0.982]">
//             <img
//               loading="lazy"
//               src={url}
//               alt={`Upload ${index}`}
//               className="object-contain w-full"
//             />
//           </div>
//           <div className="z-10 mt-2 text-2xl text-neutral-400">Upload</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// UploadBox.propTypes = {
//   imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired, // Accepts an array of image URLs
// };

// export default UploadBox;
