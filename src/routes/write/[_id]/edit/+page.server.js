import { redirect, error } from '@sveltejs/kit';
import { API_URL } from '$lib/config.js';

export async function load({ params }) {
    const { _id } = params;

    try {
        const getWriting = async () => {
            const response = await fetch(`${API_URL}/writings/${_id}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Writing not found');
            }
            return data;
        }
        return {
            writing: await getWriting(),
        };
    } catch (err) {
        return error( 404, err.message );
    }
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const wid = formData.get('id');
		const title = formData.get('title');
		const text = formData.get('text');

		console.log('title:', title, 'text:', text); //llega la imagen
        if (!title || !text) {
            return { success: false, error: 'Error Data ' };
        }

        const body = { title, text };

        console.log('body:', body);


        const result = await fetch(`${API_URL}/writings/${wid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                text
            })
        });

        if (!result.ok) {
            return { success: false, error: 'Error' };
        }
        
        throw redirect(303, '/write');
    }
}