export interface Product {
    
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;    
    thumbnail: string;
    images: string[];
}

export interface RecommendedProduct {
    id: string;
    name: string;
    price: string;
    image: string;
}