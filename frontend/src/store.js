import { configureStore } from "@reduxjs/toolkit";
import produitReducer from "./components/ProduitList";
import categorieReducer from './features/categorieSlice';

export const store = configureStore({
    reducer: {
        produits: produitReducer,
        categories: categorieReducer,
    },
});