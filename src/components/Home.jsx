import React, {useState} from 'react'

import DATA from "../Data";
import ProductCard from "./ProductCard"
import {useSelector} from 'react-redux'

const Home = () => {

    const state = useSelector((state) => state.cartReducer)
    return (
        <div>

            {
                DATA.map((item) => {
                    return (
                        <ProductCard item={item}/>
                    )
                })


            }

            {/*<Product/>*/}
        </div>
    )
}

export default Home
