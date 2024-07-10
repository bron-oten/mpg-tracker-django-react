import React from "react";

const MPGTable = ({ entries }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th className="px-6 py-3">Entry#</th>
            <th className="px-6 py-3">Miles</th>
            <th className="px-6 py-3">Gallons</th>
            <th className="px-6 py-3">Mpg</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry} className="bg-blue-500 border-b border-blue-400">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{entry.miles}</td>
              <td className="px-6 py-4">{entry.gallons}</td>
              <td className="px-6 py-4">{entry.mpg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MPGTable;
