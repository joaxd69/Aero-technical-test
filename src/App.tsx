import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Layout from "./pages/Layout";
// import Cars from "./pages/Cars";
// import CarsResults from "./pages/CarsResults";
function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<p>There's nothing here: 404</p>} />
        <Route path="/prueba2" element={<p>probando2</p>} />
        {/* <Route element={<Layout />} path="/">
          <Route element={<Cars />} path="" />
          <Route
            element={<CarsResults />}
            errorElement={<p>error</p>}
            path="results"
            ErrorBoundary={() => <p>error2</p>}
          />
          <Route element={<p>probando</p>} path="prueba" />
          <Route path="*" element={<p>There's nothing here: 404</p>} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
