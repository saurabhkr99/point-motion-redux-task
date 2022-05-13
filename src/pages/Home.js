import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { selectProduct } from '../features/product/productSlice';

const Home = () => {
    const products = useSelector(selectProduct);
    console.log("All Products:-", products);
    return (
        <div className=''>
            <ProductCard />
        </div>
    )
}

export default Home;