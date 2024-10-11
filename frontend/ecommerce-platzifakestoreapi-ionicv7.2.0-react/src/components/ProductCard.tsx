// src/components/ProductCard.tsx

import React from 'react';
import { Product } from '../state/types';
import { useAppDispatch, useAppSelector } from '../state/store';
import { addToWishlist, removeFromWishlist } from '../state/wishlistSlice';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector((state) => state.wishlist.items);
    const isWished = wishlist.some((p) => p.id === product.id);

    const handleWishlistToggle = () => {
        if (isWished) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className="product-card">
            {/* Select the first image from the array */}
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleWishlistToggle}>
                {isWished ? 'Eliminar de Deseados' : 'Agregar a Deseados'}
            </button>
        </div>
    );
};

export default ProductCard;
