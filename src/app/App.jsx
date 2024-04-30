import React from "react";
import "./App.css";
import {
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";
import NavBar from "./components/ui/navBar";
import MainPage from "./components/pages/mainPage";
import ArticlesPage from "./components/pages/articlesPage";
import TestsPage from "./components/pages/testsPage";
import UserPage from "./components/pages/userPage";
import LoginPage from "./components/pages/loginPage";
import AdminPage from "./components/pages/adminPage";
import LogoutPage from "./components/pages/logoutPage";
import FavoritesPage from "./components/pages/favoritesPage";
import UserEditPage from "./components/pages/userEditPage";

function App() {
    return (
        <div className="main">
            <NavBar/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="learn" element={<ArticlesPage/>}/>
                <Route path="tests" element={<TestsPage/>}/>
                <Route path="users" element={<Outlet/>}>
                    {/* <Route index element={<UserPage/>}/> */}
                    <Route path=":userId" element={<Outlet/>}>
                        <Route index element={<UserPage/>}/>
                        <Route path="favorites" element={<FavoritesPage/>}/>
                        <Route path="edit" element={<UserEditPage/>}/>
                    </Route>
                </Route>
                <Route path="admin" element={<AdminPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="logout" element={<LogoutPage/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </div>
    );
};

export default App;
