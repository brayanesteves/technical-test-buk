import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { Product } from '../state/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { removeFromWishlist, sortWishlist } from '../state/wishlistSlice';

const WishlistScreen: React.FC = () => {
    // Acceder a items en el estado wishlist
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (product: Product) => {
        dispatch(removeFromWishlist(product.id));
    };

    const handleSortChange = (event: any) => {
        dispatch(sortWishlist(event.target.value));
    };

    return (
        <IonPage>
            <IonContent>
                <IonSelect placeholder="Sort by" onIonChange={handleSortChange}>
                    <IonSelectOption value="name">Name</IonSelectOption>
                    <IonSelectOption value="date">Date Added</IonSelectOption>
                    <IonSelectOption value="price">Price</IonSelectOption>
                </IonSelect>

                <IonList>
                    {wishlist.map((product: Product) => (
                        <IonItem key={product.id}>
                            <IonLabel>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </IonLabel>
                            <IonButton color="danger" onClick={() => handleRemoveFromWishlist(product)}>
                                Remove
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default WishlistScreen;
