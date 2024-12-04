import axios from 'axios';

// Création d'une instance Axios avec une base URL configurée
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL de base pour toutes les requêtes API
});

// Exportation des fonctions pour interagir avec l'API
export const getProduits = async () => {
  const response = await api.get('/produits'); // Récupère les produits
  return response.data;
};

export const postProduit = async (produit) => {
  const response = await api.post('/produits', produit); // Ajoute un nouveau produit
  return response.data;
};

export default api;
