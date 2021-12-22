import { configureStore } from '@reduxjs/toolkit';

//middlewares
import API from './middlewares/api.js';

//reducers
import dealReducer from './slices/deal.js';
import productReducer from './slices/product.js';
import commentReducer from './slices/comment.js'

export const store = configureStore({
  reducer: {
      deal: dealReducer,
      product: productReducer,
      comment: commentReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([API])
})