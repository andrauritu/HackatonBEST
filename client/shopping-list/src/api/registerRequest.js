//registerRequest.js
import { API_URL } from './config';

const registerRequest = async (name, email, username, password, color) => {
    try {
        const res = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, username, password, color }),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const body = await res.json();
        console.log('Response body:', body); // Log the response body
        return body;
    } catch (error) {
        console.error('There was an error!', error);
    }
};

export default registerRequest;