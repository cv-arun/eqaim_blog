import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://sore-red-worm-hat.cyclic.app/',
   
  });

  export default instance;