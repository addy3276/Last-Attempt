import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Registratinsuccess from "./Pages/Registratinsuccess";
import { Dashboard } from "./Pages/Dashboard";
import Register from "./Pages/Register";
import "firebase/auth";
import ProtectedRoute from "./ComponentPreview/ProtectedRoute";
import Nav from "./Nav";
import Todolist from "./Pages/Todolist";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MantineProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute component={Dashboard} />}
            />
            <Route path="/registration" element={<Register />} />
            <Route path="/registered" element={<Registratinsuccess />} />
            <Route path="/todo" element={<Todolist />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
      //{" "}
    </div>
  );
}

export default App;
