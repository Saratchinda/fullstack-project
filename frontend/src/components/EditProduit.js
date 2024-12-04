import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduit } from '../features/produitSlice';

function EditProduit({ produit, onCancel }) {
  const dispatch = useDispatch();
  // État local pour stocker les informations du produit à modifier
  const [nom, setNom] = useState(produit.nom);
  const [description, setDescription] = useState(produit.description);
  const [prix, setPrix] = useState(produit.prix);

  // Fonction de soumission du formulaire pour mettre à jour le produit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduit({ id: produit.id, nom, description, prix: parseFloat(prix) }));
    onCancel(); // Annuler l'édition après la soumission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Champs de formulaire pour modifier le produit */}
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)} // Mise à jour du nom
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Mise à jour de la description
        required
      />
      <input
        type="number"
        value={prix}
        onChange={(e) => setPrix(e.target.value)} // Mise à jour du prix
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Mettre à jour
      </button>
      <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2">
        Annuler
      </button>
    </form>
  );
}

export default EditProduit;
