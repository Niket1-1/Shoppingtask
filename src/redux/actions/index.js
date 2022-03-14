export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}


export const deleteItem = (product) => {
    return {
        type : "DELITEMM",
        payload : product
    }
}

export const IncreaseItem = (product) => {
    return {
        type : "INCREASEQUANTITY",
        payload : product
    }
}