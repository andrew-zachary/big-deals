import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import reviewsReducer from "./slices/reviews";
import appReducer from "./slices/app";

import API from "./middleware/API";

export default configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(API)
});