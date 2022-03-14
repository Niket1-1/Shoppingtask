import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem,IncreaseItem} from '../redux/actions/index'
import ProductCard from "./ProductCard";



const Cart = () => {


    const state = useSelector((state) => state.addItem)
    const dispatch=useDispatch();

    let TotalCart=0;

    const itemList = (item,key) => {

        TotalCart+=item.quantity * item .price;


        return (

            <div style={{padding: "30px", marginBottom: "30px", width: "60%", marginLeft: "20%",border:"1px solid gray",marginTop:"10px",borderRadius:"10px"}}>
                <div>
                    <img src={item.img} alt={item.title} height={"200px"}/>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginLeft: "20px"}}>
                    <div>{`${item.title}(${item.color})`}</div>
                    <div>${item.price}</div>
                    <div style={{display:"flex",width:"100px",justifyContent:"space-evenly",border:"2px solid black",borderRadius:"10px"}}>
                        <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{
                            dispatch(delItem(key))
                        }}>-</button>
                        <div style={{marginTop:"6px"}}>{item.quantity}</div>
                        <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{
                            dispatch((IncreaseItem(key)))
                        }}>+</button>
                    </div>


                </div>
            </div>
        );

    }

    return (
        <>



                <div>
                    {state.Carts.map(itemList)}
                </div>
                <div style={{marginLeft:"30%",marginRight:"30%"}}>
                    <div>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total Quantity</span>
                            <strong>{state.numberCart}</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total Price  </span>
                            <strong>${TotalCart}</strong>
                        </li>
                    </div>
                </div>

        </>
    )







}

export default Cart
