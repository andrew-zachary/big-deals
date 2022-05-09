import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {
        deals: [],
        products: []
    },
    totalCost: {    
        deals: 0,
        products: 0
    },
    totalNumber: {
        deals: 0,
        products: 0
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let collection = action.payload.collection;
            const cartItemIndex = state.items[collection].findIndex(item=>{
                return item.entity._id === action.payload.item._id;
            });
            if(cartItemIndex === -1) {
                state.items[collection].push({
                    entity: action.payload.item,
                    quantity: 1
                });
            } else {
                state.items[collection][cartItemIndex].quantity += 1;
            }
            state.totalCost[collection] += action.payload.item.price;
            state.totalNumber[collection] +=  1;
        },
        removeItem: (state, action) => {
            let collection = action.payload.collection;
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            state.items[collection] = state.items[collection].filter(item=>{
                return item.entity._id !== action.payload.item.entity._id;
            });
            state.items[collection].forEach(item => {
                totalItemsCost += item.entity.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalCost[collection] = totalItemsCost;
            state.totalNumber[collection] =  totalItemsNumber;
        },
        changeItemQuantity: (state, action) => {
            let collection = action.payload.collection;
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            const cartItemIndex = state.items[collection].findIndex(item=>{
                return item.entity._id === action.payload.item.entity._id;
            });
            state.items[collection][cartItemIndex].quantity = action.payload.pick;
            state.items[collection].forEach(item => {
                totalItemsCost += item.entity.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalCost[collection] = totalItemsCost;
            state.totalNumber[collection] =  totalItemsNumber;
        }
    }
});

export default cartSlice.reducer;
export const {removeItem, addItem, changeItemQuantity} = cartSlice.actions;