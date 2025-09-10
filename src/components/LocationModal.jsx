// import React, { useState } from "react";
// import { X, ArrowLeft } from "lucide-react";

// const LocationModal = ({ onClose }) => {
//   const [openForm, setOpenForm] = useState(false);

//   return (
//     <div className="bg-white w-full pb-14 overflow-y-auto">
//       {/* Header */}
//       <div className="p-4 border-b flex items-center gap-3">
//         {/* Back Icon */}
//         <button onClick={onClose} className="p-1">
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
//           <div className="flex flex-col">
//             <p className="font-medium text-pink-600">Enter Your PIN Code</p>
//             <p className="text-gray-500 text-sm">
//               Provide your delivery PIN code to check service availability
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Enter PIN"
//               maxLength={6}
//               className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//             <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
//               Check
//             </button>
//           </div>
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
        <div className="border rounded-xl p-4 mb-3 shadow-sm">
          {/* PIN Code Section - Mobile Responsive */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col">
              <p className="font-medium text-pink-600">Enter Your PIN Code</p>
              <p className="text-gray-500 text-sm">
                Provide your delivery PIN code to check service availability
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:flex-shrink-0">
              <input
                type="text"
                placeholder="Enter PIN"
                maxLength={6}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-24"
              />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
                Check
              </button>
            </div>
          </div>
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

            <div className="space-y-3">
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
                type="button"
                className="w-full bg-pink-600 text-white py-3 rounded-lg"
              >
                Save Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationModal;