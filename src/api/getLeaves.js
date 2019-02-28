import axios from './axios';

export const fetchLeaves = () =>
    axios.post('getLeaves')
        .then(response =>
          response.data
        );
