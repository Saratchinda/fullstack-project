import { configureStore } from '@reduxjs/toolkit';
import produitReducer from './features/produitSlice';
import categorieReducer from './features/categorieSlice';

export const store = configureStore({
  reducer: {
    produits: produitReducer,
    categories: categorieReducer,
  },
});

export default store;
