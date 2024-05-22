
import React, { useState } from "react";
import AppBar from "../Components/AppBar";


function MpgCalculator() {
  const [totalMiles, setTotalMiles] = useState("");
  const [totalGallons, setTotalGallons] = useState("");
  const [mpg, setMpg] = useState("");

  const calculateMpg = () => {
    const miles = parseFloat(totalMiles);
    const gallons = parseFloat(totalGallons);

    if (!isNaN(miles) && !isNaN(gallons) && gallons !== 0) {
      const calculatedMpg = miles / gallons;
      setMpg(calculatedMpg.toFixed(2));
    } else {
      setMpg("");
    }
  };

  return (
    <>
    <AppBar />
    <div className='flex flex-col max-w-sm p-6 mx-auto my-36 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <h2 className='text-xl font-bold my-2 text-gray-900 dark:text-white'>MPG Calculator</h2>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        Total Miles Driven:
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
          placeholder="Miles Driven"
          type="number"
          value={totalMiles}
          onChange={(e) => setTotalMiles(e.target.value)}
        />
      </label>
      <br />
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        Total Gallons Consumed:
        <input 
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
          placeholder="Gallons Consumed"
          type="number"
          value={totalGallons}
          onChange={(e) => setTotalGallons(e.target.value)}
        />
      </label>
      <br />
      <button 
      className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
      onClick={calculateMpg}>Calculate MPG</button>
      <br />
      {mpg && <p className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>MPG: {mpg}</p>}
      </div>
    </> 
  );
}

export default MpgCalculator;
