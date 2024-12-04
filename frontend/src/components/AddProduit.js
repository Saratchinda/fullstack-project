import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; 

function AddProduit() {
  // État local pour stocker les valeurs du nom et du prix du produit
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');

  // Fonction de soumission du formulaire pour ajouter un produit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    try {
      // Envoi des données au serveur pour ajouter un produit
      const response = await axios.post('http://localhost:8000/api/produits', {
        nom,
        prix,
      });
      console.log('Produit ajouté :', response.data);
      setNom(''); // Réinitialisation de l'état pour le nom
      setPrix(''); // Réinitialisation de l'état pour le prix
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit :', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Ajouter un produit</h2>
      {/* Formulaire pour ajouter un produit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom du produit</label>
        <input
          id="nom"
          type="text"
          placeholder="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)} // Mise à jour de l'état nom
          required
        />
        <label htmlFor="prix">Prix du produit (€)</label>
        <input
          id="prix"
          type="number"
          placeholder="Prix du produit"
          value={prix}
          onChange={(e) => setPrix(e.target.value)} // Mise à jour de l'état prix
          required
        />
        <button type="submit">Ajouter Produit</button>
      </form>
    </div>
  );
}

export default AddProduit;
