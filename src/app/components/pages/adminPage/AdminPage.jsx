import React from "react";
import MainFooter from "../../ui/mainFooter";

const AdminPage = () => {
    return (
        <>
            <div className="main__container">
                <div className="main__content">
                    <div className="main__header">
                        <h1>Admin Header</h1>
                    </div>
                    <div className="main__body">
                        <h1>Admin Content</h1>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    );
};

export default AdminPage;
