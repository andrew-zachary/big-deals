import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsItems: [],
    totalItemsCost: 0,
    totalItemsNumber: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const cartItemIndex = state.cartsItems.findIndex(item=>{
                return item.product._id === action.payload.item._id;
            });
            if(cartItemIndex === -1) {
                state.cartsItems.push({
                    product: action.payload.item,
                    quantity: 1
                });
            } else {
                state.cartsItems[cartItemIndex].quantity += 1;
            }
            state.totalItemsCost += action.payload.item.price;
            state.totalItemsNumber +=  1;
        },
        removeItem: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            state.cartsItems = state.cartsItems.filter(item=>{
                return item.product._id !== action.payload.item.product._id;
            });
            state.cartsItems.forEach(item => {
                totalItemsCost += item.product.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalItemsCost = totalItemsCost;
            state.totalItemsNumber =  totalItemsNumber;
        },
        changeItemQuantity: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            const cartItemIndex = state.cartsItems.findIndex(item=>{
                return item.product._id === action.payload.item.product._id;
            });
            state.cartsItems[cartItemIndex].quantity = action.payload.pick;
            state.cartsItems.forEach(item => {
                totalItemsCost += item.product.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalItemsCost = totalItemsCost;
            state.totalItemsNumber =  totalItemsNumber;
        }
    }
});

export default cartSlice.reducer;
export const {addItem, removeItem, changeItemQuantity} = cartSlice.actions;