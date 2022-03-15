import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {addItem, delItem,} from '../redux/actions/index'
import cartReducer from "../redux/reducers/cartReducer";

const ProductCard = ({item, quantity}) => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.cartReducer);
    const isItemExistsInCart = state.products.find(productItem => productItem.item.id == item.id);

    return (
        <>
            <div key={item.id} style={{
                padding: "30px",
                marginBottom: "30px",
                width: "60%",
                marginLeft: "20%",
                border: "1px solid gray",
                marginTop: "10px",
                borderRadius: "10px"
            }}>
                <div style={{display: "flex", justifyContent: "space-between"}}>

                    <img src={item.img} height={"200px"}/>
                    {
                        (isItemExistsInCart) ? <div style={{
                                display: "flex",
                                width: "100px",
                                justifyContent: "space-evenly",
                                border: "2px solid black",
                                borderRadius: "10px"
                            }}>
                                <button style={{border: "none", backgroundColor: "white"}} onClick={() => {
                                    dispatch(delItem(item.id))
                                }}>-
                                </button>
                                <div style={{marginTop: "6px"}}>{state.products[item.id].quantity}</div>
                                <button style={{border: "none", backgroundColor: "white"}} onClick={() => {
                                    dispatch((addItem(item)))

                                }}>+
                                </button>
                            </div>
                            : <button onClick={(id) => {
                                dispatch(addItem(item))
                                console.log(state)
                            }} style={{
                                height: "50px",
                                marginTop: "50px",
                                borderRadius: "10px",
                                padding: "2px",
                                color: "white",
                                background: "blue",
                                border: "nnone"
                            }}>Add to Cart
                            </button>
                    }


                    {/*  {*/}
                    {/*      state.Carts.map((e,key)=>{*/}
                    {/*          if(e.id==item.id){*/}
                    {/*              return(*/}
                    {/*                  <>*/}
                    {/*                  <div style={{display:"flex",width:"100px",height:"30px",justifyContent:"space-evenly",border:"2px solid black",borderRadius:"10px",marginTop:"50px"}}>*/}
                    {/*    <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{*/}
                    {/*        dispatch(delItem(key))*/}
                    {/*    }}>-</button>*/}
                    {/*    <div style={{marginTop:"6px"}}>{e.quantity}</div>*/}
                    {/*    <button style={{border:"none",backgroundColor:"white"}} onClick={()=>{*/}
                    {/*        dispatch((IncreaseItem(key)))*/}
                    {/*    }}>+</button>*/}
                    {/*</div>*/}
                    {/*                  </>*/}
                    {/*              )*/}
                    {/*          }else{*/}
                    {/*              return (*/}
                    {/*                  <>*/}

                    {/*                  </>*/}
                    {/*              )*/}
                    {/*          }*/}

                    {/*      })*/}
                    {/*  }*/}


                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h5 className="card-title">{`${item.title}(${item.color})`}</h5>
                    <p className="lead">${item.price}</p>


                </div>
            </div>
        </>
    )
}

export default ProductCard;