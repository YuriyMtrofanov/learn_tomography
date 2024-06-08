import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, loadUsersList, getUsersLoadingStatus } from "../../../store/users";
import { getTitlesLoadStatus, loadTitlesList } from "../../../store/articleTitles";
import { getArticlesLoadStatus, loadArticlesList } from "../../../store/articles";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoadingStatus = useSelector(getUsersLoadingStatus());
    const titlesLoadingStatus = useSelector(getTitlesLoadStatus());
    const articlesLoadingStatus = useSelector(getArticlesLoadStatus());
    useEffect(() => {
        dispatch(loadTitlesList());
        dispatch(loadArticlesList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (usersLoadingStatus && titlesLoadingStatus && articlesLoadingStatus) return "loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
