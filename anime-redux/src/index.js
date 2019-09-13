import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import "./index.css"

import rootReducer from "./store/reducers"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
