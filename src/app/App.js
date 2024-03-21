import React from "react";
import "./App.css";
import MainPage from "./components/pages/mainPage";
import NavBar from "./components/ui/navBar";

function App() {
    return (
        <div className="main">
            <NavBar/>
            <MainPage/>
        </div>
    );
};

export default App;
