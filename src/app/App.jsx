import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import MainPage from "./components/pages/mainPage";
import ArticlesPage from "./components/pages/articlesPage";
import TestsPage from "./components/pages/testsPage";
import UserPage from "./components/pages/userPage";
import LoginPage from "./components/pages/loginPage";
import AdminPage from "./components/pages/adminPage";

function App() {
    return (
        <div className="main">
            <NavBar/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="learn" element={<ArticlesPage/>}/>
                <Route path="tests" element={<TestsPage/>}/>
                <Route path="user" element={<UserPage/>}/>
                <Route path="admin" element={<AdminPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </div>
    );
};

export default App;
