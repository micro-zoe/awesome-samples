import React from "react";
import Button from "@mui/material/Button";
import logo from "./logo.svg";
import "./App.css";

import { css } from "@emotion/css";

const color = "white";

function App() {
  const testClick = () => {
    console.log("react17: test click");
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(window.microApp.getGlobalData());
        }}
      >
        打印 globalData
      </button>
      <div
        className={css`
          width: 200px;
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          margin: 20px auto;
          &:hover {
            color: ${color};
          }
        `}
      >
        Emotion Button
      </div>
      <Button variant="contained" color="primary" style={{ margin: 20 }}>
        Mui Button
      </Button>
    </div>
  );
}

export default App;
