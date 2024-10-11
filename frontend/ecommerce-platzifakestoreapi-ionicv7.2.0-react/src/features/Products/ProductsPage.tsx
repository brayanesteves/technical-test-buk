import React from 'react';
import ProductList from './components/ProductList';

const ProductsPage: React.FC = () => {
    return (
        <div className="products-page">
            <h1>Productos</h1>
            <ProductList />
        </div>
    );
};

export default ProductsPage;
