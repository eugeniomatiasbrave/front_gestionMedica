
import { API_URL } from '$lib/config.js'

export const load = async () => {
    console.log('Server Load Ran')

    const getProducts = async () => {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        return data;
    };

    return {
        products: await getProducts(),
    };
}
