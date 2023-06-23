import React from 'react';
import KitchenCatalog from './components/KitchenCatalog/KitchenCatalog';
import CardDesignEl from '../components/cardDesignEl/CardDesignEl';
// import ProductCard from './[productId]';

export default function Kitchen() {
  return (
    <>
      <KitchenCatalog />
      <CardDesignEl />
    </>
  );
}
