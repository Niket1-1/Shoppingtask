const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}





const addItems = (state =initProduct, action) => {
    switch (action.type) {

        case "ADDITEM" :
           
           if(state.numberCart==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    color:action.payload.color
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        img:action.payload.img,
                        price:action.payload.price,
                        color:action.payload.color
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }



        break;

        case "DELITEM" :
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return{
                ...state
            }
  break;

        case "DELITEMM" :
            let quantity1 = state.Carts[action.payload].quantity;
            if(quantity1>0){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return{
                ...state
            }
        break;

        case "INCREASEQUANTITY":
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return{
                ...state
            }

            break;




        default:
            return state;
            break;


    }
}

export default addItems;

//
// {
//     item : {},
//     quantity: 1
// }


