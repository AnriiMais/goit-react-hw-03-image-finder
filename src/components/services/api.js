import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/ap/';
const API_KEY = process.env.REACT_APP_API_KEY;
// console.log('=> API_KEY:', API_KEY);
const setParams = params => {
  //   console.log(axios.defaults);
  return (axios.defaults.params = { key: API_KEY, ...params });
};
export const getRequest = ({ query, page }) => {
  setParams({
    q: encodeURIComponent(query),
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  return axios
    .get()
    .then(res => res.data)
    .catch(err => new Error(err.message));
};
