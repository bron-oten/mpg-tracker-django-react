import React, { useState } from "react";

const InputForm = ({ addEntry }) => {
  const [miles, setMiles] = useState("");
  const [gallons, setGallons] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (miles && gallons) {
      const mpg = (parseFloat(miles) / parseFloat(gallons)).toFixed(2);
      addEntry({ miles, gallons, mpg });
      setMiles("");
      setGallons("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-sm p-6 mx-auto my-36 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl font-bold my-2 text-gray-900 dark:text-white">
          MPG Calculator Tester
        </h2>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Total Miles Driven:
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="number"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
            placeholder="Miles Driven"
            required
          />
        </label>
        <br />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Total Gallons Used:
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="number"
            value={gallons}
            onChange={(e) => setGallons(e.target.value)}
            placeholder="Gallons Used"
            required
          />
        </label>
        <br />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          type="submit"
        >
          Calculate MPG
        </button>
        <br />
      </div>
    </form>
  );
};

export default InputForm;
