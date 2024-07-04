import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axios';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const result = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Error: ', err);
        });
        dispatch(setProducts(result.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log('Store::AllProducts ', products);
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing