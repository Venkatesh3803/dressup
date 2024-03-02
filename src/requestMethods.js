import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://dressup-backend.onrender.com/api/";




export const publicRequest = axios.create({
    baseURL: BASE_URL,
});



// products api requests

export const getAllProducts = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getSingleProducts = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}



export const createProduct = async (endpoint, method, token, data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

//user requests

export const getAllUser = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

//orders request

export const getOrders = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const makeOrder = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateOrder = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

