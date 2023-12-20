import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Cars from "./pages/Cars";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Cars />} path="" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
