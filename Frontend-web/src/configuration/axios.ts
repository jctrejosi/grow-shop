import axios from 'axios';

export const getBaseUrl = () => `${document.location.origin}/growShop`;

export const axiosConfiguration = () => {
  axios.defaults.baseURL = getBaseUrl();
};
