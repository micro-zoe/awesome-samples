import React, { useState, useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom";
import microApp from "@micro-zoe/micro-app";
import "./App.css";
import App11 from './App11'

function App() {
  return (
    <div className="content">
      <div>
        <Link to="/app-1-1">app-1-1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/home">home</Link>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            microApp.router.push({
              name: "app-1-1",
              path: "/app-1/app-1-1/test",
            });
          }}
        >
          跳转 app-1-1
        </button>
      </div>
      <Routes>
        <Route exact path="/home" element={<div>app-1 home</div>} />
        <Route
          exact
          path={`/app-1-1/*`}
          element={<App11 /> }
        />
      </Routes>
    </div>
  );
}

export default App;
