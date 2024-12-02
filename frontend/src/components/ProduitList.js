import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduits, deleteProduit } from '../features/produitSlice';
import EditProduit from './EditProduit';

function ProduitList() {
  const dispatch = useDispatch();
  const produits = useSelector((state) => state.produits.items);
  const loading = useSelector((state) => state.produits.loading);
  const [editProduit, setEditProduit] = useState(null); // Produit en cours d'édition

  useEffect(() => {
    dispatch(fetchProduits());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduit(id));
  };

  const handleEdit = (produit) => {
    setEditProduit(produit);
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      {editProduit ? (
        <EditProduit produit={editProduit} onCancel={() => setEditProduit(null)} />
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.id}>
                <td>{produit.nom}</td>
                <td>{produit.description}</td>
                <td>{produit.prix}</td>
                <td>
                  <button
                    onClick={() => handleEdit(produit)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(produit.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProduitList;
