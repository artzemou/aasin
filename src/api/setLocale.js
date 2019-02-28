import axios from './axios';

export const fetchSetLocale = (locale) =>
    axios.post('setLocale', {
      locale: locale
    })
    .then(response =>
        response.data
    );
