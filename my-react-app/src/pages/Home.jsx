// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [miles, setMiles] = useState("");
//   const [gallons, setGallons] = useState("");
//   const [mpg, setMpg] = useState("")

//   function handleMileChange(event) {
//     setMiles(event.target.value)
//   }
//   function handleGallonChange(event) {
//     setGallons(event.target.value)
//   }

//   function calculateMiles(){
//     let mpg = (miles / gallons) 
//   };


//     return <div className="card">
//               <h1>Miles Per Gallon Tracker</h1>
//               <label>
//                 Total Miles Driven:
//               <input 
//               value={miles} 
//               id="mileage" 
//               onChange={handleMileChange}
//               type="number" />
//               </label>
//               <p>Miles: {miles}</p>
//               <input value={gallons} id="gallons" onChange={handleGallonChange} type="number" />
//               <p>Gallons: {gallons}</p>

//               <p>Miles Per Gallon: {calculateMiles} </p>
//               <button onClick={calculateMiles} className="button">Calculate</button>
//               <button className="button">Save</button>
//               <button className="button">Delete</button>
//           </div>;
//   };

  
//   export default Home;

  import React, { useState } from 'react';

function MpgCalculator() {
  const [totalMiles, setTotalMiles] = useState('');
  const [totalGallons, setTotalGallons] = useState('');
  const [mpg, setMpg] = useState('');

  const calculateMpg = () => {
    const miles = parseFloat(totalMiles);
    const gallons = parseFloat(totalGallons);

    if (!isNaN(miles) && !isNaN(gallons) && gallons !== 0) {
      const calculatedMpg = miles / gallons;
      setMpg(calculatedMpg.toFixed(2));
    } else {
      setMpg('');
    }
  };

  return (
    <div className='card'>
      <h2>MPG Calculator</h2>
      <label>
        Total Miles Driven:
        <input
          type="number"
          value={totalMiles}
          onChange={(e) => setTotalMiles(e.target.value)}
        />
      </label>
      <br />
      <label>
        Total Gallons Consumed:
        <input
          type="number"
          value={totalGallons}
          onChange={(e) => setTotalGallons(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateMpg}>Calculate MPG</button>
      <br />
      {mpg && <p>MPG: {mpg}</p>}
    </div>
  );
}

export default MpgCalculator;
