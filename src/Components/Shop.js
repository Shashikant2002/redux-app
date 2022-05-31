import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../state/index";

export const Shop = () => {
    const dispatch = useDispatch()
    const {deposit, widro} = bindActionCreators(actionCreaters, dispatch);
    return (
        <>
            <div className="container d-flex mt-5">
                <button onClick={() => {widro(100)}}className="btn btn-primary">-</button>
                <h3>add product</h3>
                <button onClick={() => {deposit(100)}} className="btn btn-primary">+</button>
                {/* <button onClick={() => {dispatch(actionCreaters.widro(100))}}className="btn btn-primary">-</button>
                <h3>add product</h3>
                <button onClick={() => {dispatch(actionCreaters.deposit(100))}} className="btn btn-primary">+</button> */}
            </div>
        </>
    )
}