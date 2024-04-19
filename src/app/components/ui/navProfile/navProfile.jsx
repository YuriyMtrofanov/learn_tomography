import React, { useState } from "react";
import NavDropdownList from "../navDropdownList";
import "./navProfile.css";

const NavProfile = () => {
    const [active, setActive] = useState(false);

    const currentUser = { name: "Current User" };
    // const currentUser = useSelector(getCurrentUser());

    const handleActive = () => {
        setActive(prevState => !prevState);
    };
    return (
        <>
            <div
                className="nav-profile"
                onClick={handleActive}
            >
                <div className="nav-profile__container">
                    <div className="nav-profile__photo">
                        <img
                            className="nav-profile__image"
                            src="https://sun9-64.userapi.com/impg/c857424/v857424626/18408f/qrQnyem8Jm4.jpg?size=768x1022&quality=96&sign=20ef7ab2cde9672b4819b380b16e84a8&type=album"
                        />
                    </div>
                    <div className="nav-profile__label">
                        {currentUser.name}
                    </div>
                </div>
                <NavDropdownList active={active}/>
                {/* <div className="nav-dropdown">
                    <div className="nav-dropdown__container">
                        <ul className={"nav-dropdown__list" + (active ? " show" : "")}>
                            <li className="nav-dropdown__item">1 link</li>
                            <li className="nav-dropdown__item">2 link</li>
                            <li className="nav-dropdown__item">3 link</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default NavProfile;
