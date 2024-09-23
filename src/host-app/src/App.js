import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div>
      <Link to="/"  >host home</Link>
      </div>
      <div>
        <Link to="/app-1" reloadDocument >app-1</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<div>host-app home</div>} />
        <Route
          exact
          path={`/app-1/*`}
          element={
            <micro-app
              name="app-1"
              url="http://localhost:8001/"
              iframe
              router-mode="native"
              baseroute="/app-1"
            ></micro-app>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
