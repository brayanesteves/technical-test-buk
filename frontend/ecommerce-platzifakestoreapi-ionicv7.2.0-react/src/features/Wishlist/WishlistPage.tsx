import React, { useState } from 'react';
import WishlistProductCard from './components/WishlistProductCard';
import { useAppSelector } from '../../state/store';
import './assets/css/WishlistPage.css';

type SortOption = 'name' | 'date' | 'price';

const WishlistPage: React.FC = () => {
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const [sortOption, setSortOption] = useState<SortOption>('name');

  const sortedWishlist = [...wishlist].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'date':
        return a.dateAdded && b.dateAdded ? a.dateAdded - b.dateAdded : 0;
      case 'price':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <div className="wishlist-page">
      <h1>Productos Deseados</h1>
      <div className="sort-options">
        <label htmlFor="sort">Ordenar por:</label>
        <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value as SortOption)}>
          <option value="name">Nombre</option>
          <option value="date">Fecha Agregada</option>
          <option value="price">Precio</option>
        </select>
      </div>
      {sortedWishlist.length > 0 ? (
        sortedWishlist.map((product) => (
          <WishlistProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No tienes productos en la lista de deseos.</p>
      )}
    </div>
  );
};

export default WishlistPage;
