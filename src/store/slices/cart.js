import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsItems: {
        products: [],
        deals: []
    },
    totalProductsCost: 0,
    totalDealsCost: 0,
    totalProductsNumber: 0,
    totalDealsNumber: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const cartItemIndex = state.cartsItems.products.findIndex(item=>{
                return item.product._id === action.payload.item._id;
            });
            if(cartItemIndex === -1) {
                state.cartsItems.products.push({
                    product: action.payload.item,
                    quantity: 1
                });
            } else {
                state.cartsItems.products[cartItemIndex].quantity += 1;
            }
            state.totalProductsCost += action.payload.item.price;
            state.totalProductsNumber +=  1;
        },
        removeProduct: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            state.cartsItems.products = state.cartsItems.products.filter(item=>{
                return item.product._id !== action.payload.item.product._id;
            });
            state.cartsItems.products.forEach(item => {
                totalItemsCost += item.product.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalProductsCost = totalItemsCost;
            state.totalProductsNumber =  totalItemsNumber;
        },
        removeDeal: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            state.cartsItems.deals = state.cartsItems.deals.filter(item=>{
                return item.deal._id !== action.payload.item.deal._id;
            });
            state.cartsItems.deals.forEach(item => {
                totalItemsCost += item.deal.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalDealsCost = totalItemsCost;
            state.totalDealsNumber =  totalItemsNumber;
        },
        addDeal: (state, action) => {
            const cartItemIndex = state.cartsItems.deals.findIndex(item=>{
                return item.deal._id === action.payload.item._id;
            });
            if(cartItemIndex === -1) {
                state.cartsItems.deals.push({
                    deal: action.payload.item,
                    quantity: 1
                });
            } else {
                state.cartsItems.deals[cartItemIndex].quantity += 1;
            }
            state.totalDealsCost += action.payload.item.price;
            state.totalDealsNumber +=  1;
        },
        changeProductQuantity: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            const cartItemIndex = state.cartsItems.products.findIndex(item=>{
                return item.product._id === action.payload.item.product._id;
            });
            state.cartsItems.products[cartItemIndex].quantity = action.payload.pick;
            state.cartsItems.products.forEach(item => {
                totalItemsCost += item.product.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalProductsCost = totalItemsCost;
            state.totalProductsNumber =  totalItemsNumber;
        },
        changeDealQuantity: (state, action) => {
            let totalItemsCost = 0;
            let totalItemsNumber = 0;
            const cartItemIndex = state.cartsItems.deals.findIndex(item=>{
                return item.deal._id === action.payload.item.deal._id;
            });
            state.cartsItems.deals[cartItemIndex].quantity = action.payload.pick;
            state.cartsItems.deals.forEach(item => {
                totalItemsCost += item.deal.price * item.quantity;
                totalItemsNumber += item.quantity;
            });
            state.totalDealsCost = totalItemsCost;
            state.totalDealsNumber =  totalItemsNumber;
        }
    }
});

export default cartSlice.reducer;
export const {removeProduct, removeDeal, addProduct, addDeal, changeProductQuantity, changeDealQuantity} = cartSlice.actions;