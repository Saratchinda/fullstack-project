import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/produits';

// Thunks pour les opérations asynchrones
export const fetchProduits = createAsyncThunk('produits/fetchProduits', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createProduit = createAsyncThunk('produits/createProduit', async (produit) => {
  const response = await axios.post(API_URL, produit);
  return response.data;
});

export const deleteProduit = createAsyncThunk('produits/deleteProduit', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateProduit = createAsyncThunk('produits/updateProduit', async (produit) => {
    const response = await axios.put(`${API_URL}/${produit.id}`, produit);
    return response.data;
  });
  

// Slice Redux
const produitSlice = createSlice({
  name: 'produits',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduits.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProduits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProduit.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteProduit.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateProduit.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default produitSlice.reducer;
