export interface Category {
    id: number;
    name: string;
    image: string;
}
// src/types.ts

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
    };
    images: string[];
    dateAdded?: number; // Opcional, para manejar el tiempo de agregado a la lista de deseos
}
