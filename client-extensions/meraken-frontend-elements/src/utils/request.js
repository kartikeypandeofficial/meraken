import axios from "axios";

const accessToken = async () => {
    const tokenUrl = `http://localhost:8080/o/oauth2/token`;
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', "");
    data.append('client_secret', "");

    try {
        const response = await axios({
            method: 'post',
            url: tokenUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data,
        });
        return response.data.access_token;
    } catch (error) {
        console.error('OAuth Authentication Failed:', error.response?.data || error.message);
        throw new Error('Could not authenticate with Liferay.');
    }
};

const liferayApi = axios.create({
    baseURL: 'http://localhost:8080/'
});


liferayApi.interceptors.request.use(async (config) => {
    try {
        const token = await accessToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        console.error('Error fetching token for request', error);
        return Promise.reject(error);
    }
}, (error) => {
    return Promise.reject(error);
});

export default liferayApi;
