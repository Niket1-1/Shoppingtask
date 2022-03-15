import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem,addItem} from '../redux/actions/index'
import ProductCard from "./ProductCard";
import cartReducer from "../redux/reducers/cartReducer";



const Cart = () => {


    const state = useSelector((state) => state.cartReducer)
    const dispatch=useDispatch();

var TotalCart=0;

    // const itemList = (product,key) => {
    //
    //     TotalCart+=product.quantity * product.item.price;
    //
    //
    //     return (
    //
    //         <div style={{padding: "30px", marginBottom: "30px", width: "60%", marginLeft: "20%",border:"1px solid gray",marginTop:"10px",borderRadius:"10px"}}>
    //             <div>
    //                 <img src={product.item.img} alt={product.item.title} height={"200px"}/>
    //             </div>
    //             <div style={{display: "flex", justifyContent: "space-between", marginLeft: "20px"}}>
    //                 <div>{`${product.item.title}(${product.item.color})`}</div>
    //                 <div>${product.item.price}</div>
    //                 <div style={{display:"flex",width:"100px",justifyContent:"space-evenly",border:"2px solid black",borderRadius:"10px"}}>
    //                     <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{
    //                         dispatch(delItem(key))
    //                     }}>-</button>
    //                     <div style={{marginTop:"6px"}}>{product.quantity}</div>
    //                     <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{
    //                         dispatch((addItem(product)))
    //                     }}>+</button>
    //                 </div>
    //
    //
    //             </div>
    //         </div>
    //     );
    //
    // }

    return (
        <>



                <div>
                    {state.products.map((product)=>{
                        TotalCart+=product.quantity * product.item.price;

                        return (
                            <>
                            <ProductCard item={product.item}/>
                            </>
                        )
                    })}
                </div>
                <div style={{marginLeft:"30%",marginRight:"30%"}}>
                    <div>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total Quantity</span>
                            <strong>{state.totalNumberOfProducts}</strong>
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


