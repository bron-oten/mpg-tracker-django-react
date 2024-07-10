import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AppTest from "./pages/Contact";
import DeleteEntry from "./Components/DeleteEntry";
import CreateEntry from "./Components/CreateEntry";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="contact" element={<AppTest />} />
          <Route path="/mpg/delete/:id" element={<DeleteEntry />} />
          <Route path="/mpg/create" element={<CreateEntry />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
