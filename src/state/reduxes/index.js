import { combineReducers } from "redux";
import amountreduser from "./amountreduser";


const reducers = combineReducers({
    amount: amountreduser
}) 

export default reducers;