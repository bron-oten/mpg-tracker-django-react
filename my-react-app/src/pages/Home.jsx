
// import React, { useState } from "react";
// import AppBar from "../Components/AppBar";


// function MpgCalculator() {
//   const [totalMiles, setTotalMiles] = useState("");
//   const [totalGallons, setTotalGallons] = useState("");
//   const [mpg, setMpg] = useState("");

//   const calculateMpg = () => {
//     const miles = parseFloat(totalMiles);
//     const gallons = parseFloat(totalGallons);

//     if (!isNaN(miles) && !isNaN(gallons) && gallons !== 0) {
//       const calculatedMpg = miles / gallons;
//       setMpg(calculatedMpg.toFixed(2));
//     } else {
//       setMpg("");
//     }
//   };

//   return (
//     <>
//     <AppBar />
//     <div className='flex flex-col max-w-sm p-6 mx-auto my-36 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
//       <h2 className='text-xl font-bold my-2 text-gray-900 dark:text-white'>MPG Calculator</h2>
//       <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
//         Total Miles Driven:
//         <input
//           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
//           placeholder="Miles Driven"
//           type="number"
//           value={totalMiles}
//           onChange={(e) => setTotalMiles(e.target.value)}
//         />
//       </label>
//       <br />
//       <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
//         Total Gallons Consumed:
//         <input 
//           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
//           placeholder="Gallons Consumed"
//           type="number"
//           value={totalGallons}
//           onChange={(e) => setTotalGallons(e.target.value)}
//         />
//       </label>
//       <br />
//       <button 
//       className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
//       onClick={calculateMpg}>Calculate MPG</button>
//       <br />
//       {mpg && <p className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>MPG: {mpg}</p>}
//       </div>
//     </> 
//   );
// }

// export default MpgCalculator;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { MdOutlineAdd, MdOutlineDelete, MdOutlineInfo, MdOutlineEditNote } from 'react-icons/md';
import AppBar from "../Components/AppBar";


const AppTest = () => {
  const [ entry, setEntry ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    axios
    .get('http://localhost:5556/mpg')
    .then((response) => {
      setEntry(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-4 m-8">
      <AppBar />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Entry List</h1>
        <Link to='/mpg/create'>
          <MdOutlineAdd className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-4xl cursor-auto'>Add</MdOutlineAdd>
        </Link>
      </div>
      {loading ? ('loading') : (
        <table className="w-full text-sm text-left rtl:text-right dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th className="px-6 py-3">Entry#</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Miles</th>
            <th className="px-6 py-3">Gallons</th>
            <th className="px-6 py-3">Mpg</th>
            <th className="px-6 py-3 text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {entry.map((entry, index) => (
            <tr key={entry._id} className="bg-blue-500 border-b border-blue-400">
              <td className="px-6 py-4 max-md:hidden">{index + 1}</td>
              <td className="px-6 py-4 max-md:hidden">{entry.title}</td>
              <td className="px-6 py-4">{entry.miles}</td>
              <td className="px-6 py-4">{entry.gallons}</td>
              <td className="px-6 py-4">{entry.mpg}</td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/mpg/info/${entry._id}`}>
                    <MdOutlineInfo className="text-2xl text-white" />
                  </Link>
                  <Link to={`/mpg/edit/${entry._id}`}>
                    <MdOutlineEditNote className="text-2xl text-white" />
                  </Link>
                  <Link to={`/mpg/delete/${entry._id}`}>
                    <MdOutlineDelete className="text-2xl text-white" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) }
    </div>
  )
};

export default AppTest;

