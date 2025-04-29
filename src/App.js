import React, { useState } from "react";
import Routes from "./Routes.js";
import Saidbar from "./component/sidebar/Saidbar";
import "./custom.css";
import "./App.css";
import Navbar from "./component/navbar/Navbar.jsx";
import { useRoutes } from "react-router-dom";
export default function App() {
  const router = useRoutes(Routes);
  const [isshowsidebar, setisshowsidebar] = useState(true);

  return (
    <>
    
      
      <Navbar setisshowsidebar={setisshowsidebar} />
      <div className="main-container">
        {isshowsidebar && <Saidbar />}
        <div className="main">{router}</div>
      </div>
    </>
  );
}
