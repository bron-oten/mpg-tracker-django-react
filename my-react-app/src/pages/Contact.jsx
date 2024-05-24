import React, { useState } from "react";
import InputForm from "../Components/InputForm";
import MPGDisplay from "../Components/MPGDisplay";
import HistoryTest from "../Components/HistoryTest";

const AppTest = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <InputForm addEntry={addEntry} />
      <MPGDisplay entries={entries} />
      <HistoryTest entries={entries} />
    </div>
  );
};

export default AppTest;
