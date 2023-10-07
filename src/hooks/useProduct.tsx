import { Product } from '@/types/Product';
import React, { useEffect, useState } from 'react'

const useProduct = () => {

    const [product, setProduct] = useState<Product>();

    const fetchProduct = async () => {
        const data = await fetch("https://dummyjson.com/products/5").then(res => res.json());
        setProduct(data);
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return {
        product
    }
}

export default useProduct