import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi';
import { Product } from '../../../state/types';
import ProductCard from '../../../components/ProductCard';
import '../assets/css/ProductList.css';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        };

        loadProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
