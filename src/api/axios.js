import axios from 'axios';

export default axios.create({
  baseUrl: 'https://postman-library-api.glitch.me/books',
});
