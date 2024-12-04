import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProduitList() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/produits');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProduits();
  }, []);

  return (
    <div>
      <h2>Liste des Produits</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            {produit.nom} - {produit.prix} €
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProduitList;
