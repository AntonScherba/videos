import axios from 'axios';

const KEY = 'AIzaSyCj2yVhu24w2fY05ROPmCLnnBDPtQ1jOh4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY    
  }
});