import getLocalStorageItem from "./LocalStorage.js";

const config = () => {
    const token = getLocalStorageItem('ACCESS_TOKEN')
    return {
        baseURL: 'http://127.0.0.1:8000/',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'http://localhost:5173/'
        }
    }
}

export default config