import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reduxes from "./reduxes"

export const store = createStore(reduxes, {}, applyMiddleware(thunk));
