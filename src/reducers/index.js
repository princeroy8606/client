import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'
import addRemoveFriends from "./friends";
import showHideSidebar from "./sidebar";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer, addRemoveFriends,showHideSidebar
})