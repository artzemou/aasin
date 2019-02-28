import axios from './axios';

export const fetchUpDate = (data) =>
    axios.post('updatePackages', {
      data: data
    })
        .then(response =>
          response.data
        );

export const fetchResults = () =>
    axios.post('results')
        .then(response =>
          response.data
        );
