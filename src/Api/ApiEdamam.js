import axios from 'axios';

const apiKey = 'SUA_CHAVE_DE_API_EDAMAM';

const api = axios.create({
  baseURL: 'https://api.edamam.com/',
  params: {
    app_id: 'SEU_APP_ID_EDAMAM',
    app_key: apiKey,
  },
});

