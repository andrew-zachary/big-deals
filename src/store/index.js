import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import API from "./middleware/API";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(API)
});