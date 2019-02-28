import axios from './axios';

export const fetchLeaf = (id) =>
    axios.post('getLeaf', {
      id: id
    })
    .then(response =>
        response.data
    );
