// src/services/storageService.ts
import { Plugins } from '@capacitor/core';
import { Product } from '../state/types';

const { Storage } = Plugins;

export const saveWishlist = async (wishlist: Product[]) => {
    await Storage.set({
        key: 'wishlist',
        value: JSON.stringify(wishlist),
    });
};

export const loadWishlist = async (): Promise<Product[]> => {
    const { value } = await Storage.get({ key: 'wishlist' });
    return value ? JSON.parse(value) : [];
};
