// import React, { useState } from "react";
// import { X, ArrowLeft } from "lucide-react";

// const LocationModal = () => {
//   const [open, setOpen] = useState(true); // modal visible
//   const [openForm, setOpenForm] = useState(false);

//   if (!open) return null; // modal बंद

//   return (
//     <div className="fixed inset-0 bg-white w-full h-full overflow-y-auto">
//       {/* Header */}
//       <div className="p-4 border-b flex items-center gap-3">
//         {/* Back Icon */}
//         <button onClick={() => setOpen(false)} className="p-1">
//           <ArrowLeft className="w-6 h-6 text-gray-700" />
//         </button>
//         <h2 className="text-lg font-semibold">Your Location</h2>
//       </div>

//       {/* Search Box */}
//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search a new address"
//           className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
//         />
//       </div>

//       {/* Current Location */}
//       <div className="px-4">
//         <div className="flex items-center justify-between border rounded-xl p-4 mb-3 shadow-sm">
//           <div>
//             <p className="font-medium text-pink-600">Use My Current Location</p>
//             <p className="text-gray-500 text-sm">
//               Enable your current location for better services
//             </p>
//           </div>
//           <button className="border border-pink-500 text-pink-600 px-4 py-1 rounded-full text-sm">
//             Enable
//           </button>
//         </div>

//         {/* Add New Address */}
//         <div
//           onClick={() => setOpenForm(!openForm)}
//           className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer shadow-sm"
//         >
//           <span className="text-pink-600 text-xl">+</span>
//           <p className="font-medium text-pink-600">Add New Address</p>
//         </div>

//         {/* Dropdown Form */}
//         {openForm && (
//           <div className="mt-3 border rounded-xl p-4 bg-gray-50 shadow-inner">
//             {/* Form Header with X */}
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-lg font-semibold">Add New Address</h3>
//               <button onClick={() => setOpenForm(false)}>
//                 <X className="w-6 h-6 text-gray-600" />
//               </button>
//             </div>

//             <form className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Flat / House No."
//                 className="w-full border p-3 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Street / Locality"
//                 className="w-full border p-3 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="w-full border p-3 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Pincode"
//                 className="w-full border p-3 rounded-lg"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 text-white py-3 rounded-lg"
//               >
//                 Save Address
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LocationModal;
import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

const LocationModal = ({ onClose }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="bg-white w-full pb-14 overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3">
        {/* Back Icon */}
        <button onClick={onClose} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold">Your Location</h2>
      </div>

      {/* Search Box */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search a new address"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Current Location */}
      <div className="px-4">
        <div className="flex items-center justify-between border rounded-xl p-4 mb-3 shadow-sm">
          <div>
            <p className="font-medium text-pink-600">Use My Current Location</p>
            <p className="text-gray-500 text-sm">
              Enable your current location for better services
            </p>
          </div>
          <button className="border border-pink-500 text-pink-600 px-4 py-1 rounded-full text-sm">
            Enable
          </button>
        </div>

        {/* Add New Address */}
        <div
          onClick={() => setOpenForm(!openForm)}
          className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer shadow-sm"
        >
          <span className="text-pink-600 text-xl">+</span>
          <p className="font-medium text-pink-600">Add New Address</p>
        </div>

        {/* Dropdown Form */}
        {openForm && (
          <div className="mt-3 border rounded-xl p-4 bg-gray-50 shadow-inner">
            {/* Form Header with X */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Add New Address</h3>
              <button onClick={() => setOpenForm(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Flat / House No."
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Street / Locality"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="w-full border p-3 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg"
              >
                Save Address
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationModal;