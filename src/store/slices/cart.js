import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        itemsNumber:0,
        totalCost: 0
    },
    reducers: {
        addCartItem:(state, action)=>{
            state.items.push({product:action.payload.product, quantity:1});
            state.totalCost += parseFloat(action.payload.product.price.$numberDecimal);
            state.itemsNumber += 1;
        },
        updateItemQuantity:(state, action)=>{
            let totalCost = 0;
            state.items = state.items.map(item=>{
                if(item.product._id === action.payload.productId) {
                    item.quantity = item.quantity + action.payload.direction;
                }
                totalCost += parseFloat(item.product.price.$numberDecimal) * item.quantity;
                return item;
            });
            state.totalCost = totalCost;
        },
        removeItem:(state, action)=>{
            let totalCost = 0;
            state.items = state.items.filter(item=>{
                if(item.product._id !== action.payload.productId) {
                    totalCost += parseFloat(item.product.price.$numberDecimal) * item.quantity;
                    return item;
                }
            });
            state.totalCost = totalCost;
            state.itemsNumber -= 1;
        }
    }
});

export const { addCartItem, updateItemQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;