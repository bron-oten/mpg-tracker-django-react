import React from "react";

const MPGDisplay = ({ entries }) => {
  const lastEntry = entries[entries.length - 1];

  return (
    <div className="flex flex-col max-w-sm p-6 mx-auto my-36 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {lastEntry ? (
        <h2 className='text-2xl font-bold my-2 text-gray-900 dark:text-white'>Last MPG: {lastEntry.mpg}</h2>
      ) : (
        <h2 className='text-2xl font-bold my-2 text-gray-900 dark:text-white'>No MPG Calculated Yet</h2>
      )}
    </div>
  );
};

export default MPGDisplay;
