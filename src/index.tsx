import React from "react";
import ReactDOM from "react-dom/client";
import { ClassRoomApp } from "./ClassRoomApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ClassRoomApp />
  </React.StrictMode>
);
