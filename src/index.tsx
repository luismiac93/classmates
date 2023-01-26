import React from "react";
import ReactDOM from "react-dom/client";
import { ClassRoomApp } from "./ClassRoomApp";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <ClassRoomApp />
    </NextUIProvider>
  </React.StrictMode>
);
