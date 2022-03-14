import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addItem, delItem} from "../../redux/actions";

const IncreDecre = (props) => {
    const state = useSelector((state) => state.addItem)

    const dispatch = useDispatch()

    const itemList = (item) => {
        return (<>
            <div>{item.quantity}</div>
        </>)
    }


    return (<>
        <div>
            <div>
                <button onClick={() => {
                    dispatch(addItem(props.item))
                }}>+
                </button>
            </div>
            <div>{state.items.map(itemList)}</div>
            <div>
                <button onClick={() => {
                    dispatch((delItem(props.item)))
                }}>-
                </button>
            </div>


        </div>
    </>)

}

export default IncreDecre;