import { redirect } from '@sveltejs/kit';
import { API_URL } from '$lib/config.js';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const pid = formData.get('pid');

        if (!pid) {
            return { success: false, error: 'Product ID is required' };
        }

        const result = await fetch(`${API_URL}/products/${pid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            return { success: false, error: 'Error deleting product' };
        }

        throw redirect(303, '/products');
    }
}