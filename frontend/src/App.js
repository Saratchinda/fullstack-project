import React from 'react';
import ProduitList from './components/ProduitList';
import AddProduit from './components/AddProduit';


function App() {
  return (
    <div className="App">
      <h1>Gestion des Produits</h1>
      <AddProduit />
      <ProduitList />
    </div>
  );
}

export default App;
