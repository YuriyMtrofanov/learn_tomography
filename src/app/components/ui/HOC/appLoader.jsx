import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, loadUsersList, getUsersLoadingStatus } from "../../../store/users";
import { getTitlesLoadStatus, loadTitlesList } from "../../../store/articleTitles";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoadingStatus = useSelector(getUsersLoadingStatus());
    const titlesLoadingStatus = useSelector(getTitlesLoadStatus());
    useEffect(() => {
        dispatch(loadTitlesList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (usersLoadingStatus && titlesLoadingStatus) return "loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
