import React from "react";
import MainFooter from "../../ui/mainFooter";
import "./adminPage.css";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <div className="admin-page__container">
                <div className="admin-page__content">
                    <div className="admin-page__body">
                        <h1>Admin Content</h1>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default AdminPage;
