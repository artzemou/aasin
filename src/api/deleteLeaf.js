import axios from './axios';

export const fetchDeleteLeaf = (id) =>
    axios.post('deleteLeaf', {
      id: id
    })
    .then(response =>
        response.data
    );
