import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduit } from '../features/produitSlice';

function EditProduit({ produit, onCancel }) {
  const dispatch = useDispatch();
  const [nom, setNom] = useState(produit.nom);
  const [description, setDescription] = useState(produit.description);
  const [prix, setPrix] = useState(produit.prix);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduit({ id: produit.id, nom, description, prix: parseFloat(prix) }));
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
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
