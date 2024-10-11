import React, { useEffect } from 'react';
import { useAppDispatch } from '../state/store';
import { loadWishlist } from '../state/wishlistSlice'; // Asegúrate de que es la acción de Redux
import { loadWishlist as loadWishlistFromStorage } from '../services/localStorage';
import { Provider } from 'react-redux';
import { store } from '../state/store'; // Importación de store
import { IonApp } from '@ionic/react';
import ProductsPage from '../features/Products/ProductsPage';
import WishlistPage from '../features/Wishlist/WishlistPage';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await loadWishlistFromStorage();
      dispatch(loadWishlist(wishlist)); // Asegúrate de que esta función acepte Product[]
    };

    fetchWishlist();
  }, [dispatch]);

  return (
    <Provider store={store}>
      <IonApp>
        <ProductsPage />
        <WishlistPage />
      </IonApp>
    </Provider>
  );
};

export default App;
