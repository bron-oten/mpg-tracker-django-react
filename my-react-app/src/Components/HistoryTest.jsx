import AppBar from "../Components/AppBar";
import React from "react";
import MPGTable from "./MPGTable";

const HistoryTest = ({ entries }) => {
  {
    console.log(entries);
  }
  return (
    <>
      <div className="flex flex-col max-w-sm p-6 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xl font-bold my-2 text-gray-900 dark:text-white">
          Calculation History
        </h3>
        <MPGTable entries={entries} />
      </div>
      <AppBar />
    </>
  );
};

export default HistoryTest;
