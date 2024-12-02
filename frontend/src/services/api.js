import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getProduits = () => api.get('/produits');
export const getCategories = () => api.get('/categories');
export const createProduit = (data) => api.post('/produits', data);
export const updateProduit = (id, data) => api.put(`/produits/${id}`, data);
export const deleteProduit = (id) => api.delete(`/produits/${id}`);
