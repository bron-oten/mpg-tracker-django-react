import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import AppBar from "./AppBar";

const CreateEntry = () => {
  const [title, setTitle] = useState("");
  const [miles, setMiles] = useState("");
  const [gallons, setGallons] = useState("");
  const [mpg, setMpg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const calculateMpg = () => {
    const calcMiles = parseFloat(miles);
    const calcGallons = parseFloat(gallons);

    if (!isNaN(calcMiles) && !isNaN(calcGallons) && calcGallons !== 0) {
      const calculatedMpg = calcMiles / calcGallons;
      setMpg(calculatedMpg.toFixed(2));
    } else {
      setMpg("");
    }
  };

  const handleSaveEntry = () => {
    const data = {
      title,
      miles,
      gallons,
      mpg,
    };
    console.log("Data being sent", data)
    setLoading(true);
    axios
      .post("http://localhost:5556/mpg", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Entry Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An Error Happened. Please Check Console');
        enqueueSnackbar("Error", { variant: "error" });
        if (error.response) {
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
      });
  };

  return (
    <div className="flex flex-col max-w-sm p-6 mx-auto my-36 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <AppBar />
      <h1 className="text-xl font-bold my-2 text-gray-900 dark:text-white">
        Create Entry
      </h1>
      {loading ? "" : ""}
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <div className="my-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Where did you travel today?
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Miles:
            <input
              type="number"
              placeholder="Miles Driven"
              value={miles}
              onChange={(e) => setMiles(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </label>
        </div>
        <div className="my-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Gallons:
            <input
              type="number"
              placeholder="Gallons Consumed"
              value={gallons}
              onChange={(e) => setGallons(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </label>
        </div>
        {mpg && (
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            MPG: {mpg}
          </p>
        )}
        <br />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={calculateMpg}
        >
          Calculate MPG
        </button>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleSaveEntry}
          
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default CreateEntry;
