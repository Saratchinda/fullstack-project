import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'; 

function ProduitList() {
  const [produits, setProduits] = useState([]); // État pour stocker la liste des produits
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Utilisation de useEffect pour récupérer les produits au montage du composant
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        // Envoi de la requête GET pour récupérer la liste des produits
        const response = await axios.get('http://localhost:8000/api/produits');
        setProduits(response.data); // Mettre à jour l'état avec les produits récupérés
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        setError('Erreur lors de la récupération des produits'); // Affichage d'une erreur en cas de problème
      }
    };

    fetchProduits();
  }, []); // [] signifie que cet effet ne s'exécutera qu'une seule fois lors du montage du composant

  return (
    <div>
      <h1>Liste des Produits</h1>
      {/* Affichage de l'erreur, s'il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Si des produits existent, on les affiche sous forme de liste */}
      {produits.length > 0 ? (
        <ul>
          {produits.map((produit) => (
            <li key={produit.id}>{produit.nom}</li> // Affichage du nom du produit
          ))}
        </ul>
      ) : (
        <p>Aucun produit disponible.</p> // Message si aucun produit n'est disponible
      )}
    </div>
  );
}

export default ProduitList;
