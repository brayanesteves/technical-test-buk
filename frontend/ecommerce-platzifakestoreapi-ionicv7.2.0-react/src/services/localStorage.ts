import { Product } from "../state/types";

const WISHLIST_KEY = 'wishlist';

export const saveWishlist = (wishlist: Product[]) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

export const loadWishlist = (): Product[] => {
  const storedWishlist = localStorage.getItem(WISHLIST_KEY);
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};
