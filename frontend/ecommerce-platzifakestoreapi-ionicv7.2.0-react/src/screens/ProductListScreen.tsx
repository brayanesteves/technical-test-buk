// src/screens/ProductListScreen.tsx

import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { Product } from '../state/types';
import { addToWishlist } from '../state/wishlistSlice';
import { fetchProducts } from '../features/Products/api/productsApi';
import { useDispatch, useSelector } from 'react-redux';

const ProductListScreen: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        };
        loadProducts();
    }, []);

    const handleAddToWishlist = (product: Product) => {
        dispatch(addToWishlist(product));
    };

    return (
        <IonPage>
            <IonContent>
                <IonList>
                    {products.map((product) => (
                        <IonItem key={product.id}>
                            <IonLabel>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </IonLabel>
                            <IonButton onClick={() => handleAddToWishlist(product)}>
                                Add to Wishlist
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ProductListScreen;
