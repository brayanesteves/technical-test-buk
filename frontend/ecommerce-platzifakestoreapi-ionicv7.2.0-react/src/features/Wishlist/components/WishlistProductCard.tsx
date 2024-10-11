import React from 'react';
import { Product } from '../../../state/types';
import { useAppDispatch } from '../../../state/store';
import { removeFromWishlist } from '../../../state/wishlistSlice';
import '../assets/css/WishlistPage.css';
import '../assets/css/WishlistProductCard.css';

interface WishlistProductCardProps {
    product: Product;
}


const WishlistProductCard: React.FC<WishlistProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeFromWishlist(product.id));
    };

    return (
        <div className="wishlist-product-card">
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={handleRemove}>Eliminar</button>
        </div>
    );
};

export default WishlistProductCard;