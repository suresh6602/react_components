import axios from 'axios';
import Cookies from 'js-cookie';

export const headerWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_URL}/api/v1`,
});

headerWithToken.interceptors.request.use((config) => {
    config.headers['x-auth-token'] = Cookies.get('token');
    config.headers['ngrok-skip-browser-warning'] = true;
    return config;
});

export const tokenExpires = async () => {
    const Voice = 'Male';
    try {
        const response = await headerWithToken.get(
            `/admin/getQA?index=${1}&voice=${Voice}`
        );
        if (response?.data?.responseObj?.responseMessage === 'Invalid Token.') {
            Cookies.remove('token');
            window.location.reload();
        }
        return response;
    } catch (error) {
        return error;
    }
};
