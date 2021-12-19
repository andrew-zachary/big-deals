import { configureStore } from '@reduxjs/toolkit';

//middlewares
import API from './middlewares/api.js';

//reducers
import dealReducer from './slices/deal.js';
import productReducer from './slices/product.js';

export const store = configureStore({
  reducer: {
      deal: dealReducer,
      product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([API])
})