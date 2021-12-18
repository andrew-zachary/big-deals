import { configureStore } from '@reduxjs/toolkit';

//middlewares
import API from './middlewares/api.js';

//reducers
import dealReducer from './slices/deal.js';

export const store = configureStore({
  reducer: {
      deal: dealReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([API])
})