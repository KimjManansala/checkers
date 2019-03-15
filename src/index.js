import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Root reducer
import rootReducer from "./reducers/index";

// React Router
import { Router, Route, Switch } from "react-router-dom";
import history from "./history"; // Import history in any component you want to use it
import { routerMiddleware } from "react-router-redux";

// Components
import App from "./components/App";
import Navbar from "./components/containers/NavbarContainer";

import AboutContainer from './components/containers/AboutSections'
import AiBoard from "./components/containers/AiBoard";
// Router middleware
const routing = routerMiddleware(history);

// Initialize redux store and thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routing))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar
          title={"Welcome to my Checkers game!"}
          tabs={[
            { text: "Checkers H vs H", route: "/" },
            {text: 'Checker H vs C', route:"/checkers/bot"},
            { text: "About", route: "/about" }
          ]}
        />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/checkers/bot" exact component={AiBoard}/>
          <Route path="/about" exact component={AboutContainer} />
        </Switch>

      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
