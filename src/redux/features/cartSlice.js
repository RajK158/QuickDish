import {createSlice} from "@reduxjs/toolkit"

// initial state
const initialState = {
    carts:[]
}

//Card Slice
const cartSlice = createSlice ({
    name: "cartslice",
    initialState,
    reducers: {

        //add to cart
        addToCart: (state,action) => {
            const ItemIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);       
            if(ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1;
            }
            else {
                const temp = {...action.payload, qnty: 1}
                state.carts = [...state.carts, temp]
            }
        },

        // remove perticular items
        removeToCart: (state, action) => {
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            state.carts = data;
        },

        // remove single item 
        removeSingleItem: (state, action) => {
            const ItemIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[ItemIndex_dec].qnty >= 1){
                state.carts[ItemIndex_dec].qnty -= 1
            } 
        },

        // Clear Cart
        emptyCartItem: (state, action) => {
           state.carts = []
        }
    }
});


//export action and reducer
export const {addToCart, removeToCart, removeSingleItem, emptyCartItem} = cartSlice.actions;

export default cartSlice.reducer;