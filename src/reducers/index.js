// import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

// Reducers This is where the reducers will go
import checkerReducer from './checkersReducer'
import navBar from './navBar'
import aiBoard from './checkerAI'
const rootReducer = combineReducers({
    board: checkerReducer,
    navBar: navBar,
    aiBoard: aiBoard

});

export default rootReducer