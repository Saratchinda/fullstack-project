import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduit } from '../features/produitSlice';

function AddProduit() {
  const dispatch = useDispatch();
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduit({ nom, description, prix: parseFloat(prix) }));
    setNom('');
    setDescription('');
    setPrix('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Ajouter
      </button>
    </form>
  );
}

export default AddProduit;
