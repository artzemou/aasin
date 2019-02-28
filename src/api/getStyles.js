import axios from './axios';

export const fetchGetStyles = (element) =>
    axios.post('getStyles', {
      element: element
    })
    .then(response =>
        response.data
    );
