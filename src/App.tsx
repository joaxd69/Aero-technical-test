import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Cars from "./pages/Cars";
import CarsResults from "./pages/CarsResults";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Cars />} path="" />
          <Route element={<CarsResults />} path="results" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
