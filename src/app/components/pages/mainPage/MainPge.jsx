import React from "react";
import MainFooter from "../../ui/mainFooter";

const MainPage = () => {
    return (
        <>
            <div className="main__container">
                <div className="main__content">
                    <div className="main__header">
                        <h1>Header</h1>
                    </div>
                    <div className="main__body">
                        <h1>Content</h1>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    );
};

export default MainPage;
