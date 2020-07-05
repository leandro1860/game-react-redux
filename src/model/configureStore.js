import {createStore, compose} from "redux";
import rootReducer from "./reducers/root";

export default function configureStore(initialState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(rootReducer, initialState, composeEnhancers());
}
