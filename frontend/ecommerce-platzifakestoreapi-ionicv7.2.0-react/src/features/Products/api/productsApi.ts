import axios from 'axios';

import { showAlert } from '../../../services/errorHandling';
import { Product } from '../../../state/types';

const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return await response.json();
  } catch (error:any) {
    showAlert(error.message || 'Error desconocido');
    return [];
  }
};

export const fetchProductById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al cargar el producto');
    }
};