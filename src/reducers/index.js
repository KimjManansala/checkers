// import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

// Reducers This is where the reducers will go
import checkerReducer from './checkersReducer'

const rootReducer = combineReducers({
    board: checkerReducer

});

export default rootReducer