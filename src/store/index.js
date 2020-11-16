import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

// -- this fragment for redux-devtools-extension(FireFox) --
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

export default store