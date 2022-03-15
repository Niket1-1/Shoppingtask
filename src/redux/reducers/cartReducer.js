const initialState = {
    totalNumberOfProducts: 0, products: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADDITEM" :
            const product = action.payload;
            const products = state.products;

            const existing = products.find(productItem => productItem.item.id == product.id)

            if (!existing) {
                state.totalNumberOfProducts++;
                state.products.push({
                    item: {
                        id: product.id,
                        price: product.price,
                        totalPrice: product.price,
                        img:product.img,
                        color:product.color,
                        title: product.title,
                    },
                    quantity:1,
                });
            } else {
                state.totalNumberOfProducts++;
                state.products[action.payload.id].quantity++;
            }
               return {
                ...state,
               }

            break;
        case "DELITEM" :
            let quantity = state.products[action.payload].quantity;
            if (quantity > 0) {
                state.totalNumberOfProducts--;
                state.products[action.payload].quantity--;
            }

            return {
                ...state
            }
            break;


        default:
            return state;
            break;
    }
}

export default cartReducer;

