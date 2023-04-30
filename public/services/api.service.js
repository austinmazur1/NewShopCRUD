const axios = require('axios');

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://fakestoreapi.com'
        });
    }
    getAllUsers = async ()=> {
        const results = await this.api.get('/users');
        return results;
    };
    getAllProducts = async () => {
        const results = await this.api.get('/products');
        return results
    }
    getOneProduct = async (id) => {
        const results = await this.api.get(`/products/${id}`);
        return results 
    }
    deleteProduct = async (id) => {
        const results = await this.delete(`/products/${id}`);
        return results
    }
}

module.exports = ApiService;