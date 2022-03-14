import React from 'react'

import DATA from "../Data";
import ProductCard from "./ProductCard"

const Home = () => {
    return (
        <div>

            {
                DATA.map((item,index)=>{
              return(
                    <ProductCard item={item} key={index}/>
              )
                })
                

            }
            
            {/*<Product/>*/}
                    </div>
                    )
}

                    export default Home
