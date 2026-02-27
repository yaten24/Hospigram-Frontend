import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n";

import { UserProvider } from "./context/userContext";
import { HospitalProvider } from "./context/hospitalContext";
import { AdminProvider } from "./context/adminContext";
import { LabProvider } from "./context/labsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <HospitalProvider>
        <LabProvider>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </LabProvider>
      </HospitalProvider>
    </AdminProvider>
  </React.StrictMode>
);