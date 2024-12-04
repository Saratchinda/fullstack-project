import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/produits';

// Thunks pour les opérations asynchrones (GET, POST, PUT, DELETE)
export const fetchProduits = createAsyncThunk('produits/fetchProduits', async () => {
  const response = await axios.get(API_URL); // Récupère la liste des produits
  return response.data;
});

export const createProduit = createAsyncThunk('produits/createProduit', async (produit) => {
  const response = await axios.post(API_URL, produit); // Ajoute un nouveau produit
  return response.data;
});

export const deleteProduit = createAsyncThunk('produits/deleteProduit', async (id) => {
  await axios.delete(`${API_URL}/${id}`); // Supprime un produit par son ID
  return id;
});

export const updateProduit = createAsyncThunk('produits/updateProduit', async (produit) => {
  const response = await axios.put(`${API_URL}/${produit.id}`, produit); // Met à jour un produit
  return response.data;
});

const produitSlice = createSlice({
  name: 'produits',
  initialState: {
    items: [], // Liste des produits
    loading: false, // Indicateur de chargement
    error: null, // Gestion des erreurs
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cas de la récupération des produits
      .addCase(fetchProduits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduits.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Mise à jour des produits
      })
      .addCase(fetchProduits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Enregistrer l'erreur si la requête échoue
      })
      // Cas de création d'un produit
      .addCase(createProduit.fulfilled, (state, action) => {
        state.items.push(action.payload); // Ajouter le produit à la liste
      })
      // Cas de suppression d'un produit
      .addCase(deleteProduit.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload); // Supprimer le produit de la liste
      })
      // Cas de mise à jour d'un produit
      .addCase(updateProduit.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Mettre à jour le produit dans la liste
        }
      });
  },
});

export default produitSlice.reducer;
