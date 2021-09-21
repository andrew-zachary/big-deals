import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import reviewsReducer from "./slices/reviews";
import cartReducer from "./slices/cart";
import ordersReducer from "./slices/orders";
import appReducer from "./slices/app";

import API from "./middleware/API";
import AUTH from "./middleware/AUTH";
import ISAUTH from "./middleware/ISAUTH";

export default configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
    cart: cartReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat([ISAUTH, API, AUTH])
});