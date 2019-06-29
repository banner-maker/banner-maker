import axios from 'axios';
import objectToQueryString from "lib/objectToQueryString";

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});

export const getRandomPhotos = (params) =>
  instance.get(`/photos/random?${objectToQueryString(params)}`)
    .then(res => res.data);


export const searchPhotos = (params) =>
  instance.get(`/search/photos?${objectToQueryString(params)}`)
    .then(res => res.data);

