import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Appshell from "./AppShell/Appshell.tsx";
import { MantineProvider } from "@mantine/core";

// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <Appshell>
        <App />
      </Appshell>
    </MantineProvider>
  </React.StrictMode>
);
