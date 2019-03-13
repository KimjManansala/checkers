// import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

// Reducers This is where the reducers will go
import checkerReducer from './checkersReducer'
import navBar from './navBar'
const rootReducer = combineReducers({
    board: checkerReducer,
    navBar: navBar

});

export default rootReducer