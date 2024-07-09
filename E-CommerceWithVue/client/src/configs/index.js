import axios from 'axios';

export const SERVER = 'http://localhost:3000/api/v1/';

export const endpoints = {
    getAllProducts: `${SERVER}products/getAll`,
    getProductByCategory: `${SERVER}products/getProductByCategory`,
    getProductById: (id) => `${SERVER}products/getProductById/${id}`,
    createProduct: `${SERVER}products/create`,
    updateProduct: (id) => `${SERVER}products/update/${id}`,
    deleteProduct: (id) => `${SERVER}products/delete/${id}`,
    getProductCount: `${SERVER}products/get/count`,
    getFeaturedProducts: (count) => `${SERVER}products/get/featured/${count}`,
    updateProductGalleryImages: (id) => `${SERVER}products/gallery-images/${id}`,
    getPromotion: `${SERVER}products/getPromotion`,
    getSortProduct: `${SERVER}products/getSortedProductsByCategory`,
    getProductByBrandAndCategory : `${SERVER}products/filterBrand`,
    getProductByPriceAndCategory : `${SERVER}products/filterByPrice`
};

const axiosInstance = axios.create({
    baseURL: SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;