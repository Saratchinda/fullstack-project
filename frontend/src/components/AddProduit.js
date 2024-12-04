import React, { useState } from 'react';
import axios from 'axios';

function AddProduit() {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/produits', {
        nom,
        prix,
      });
      console.log('Produit ajouté :', response.data);
      setNom('');
      setPrix('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du produit"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Prix du produit"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        required
      />
      <button type="submit">Ajouter Produit</button>
    </form>
  );
}

export default AddProduit;
