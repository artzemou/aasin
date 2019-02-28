import axios from './axios';

export const fetchSetStyles = (id, element, styles) =>
    axios.post('setStyles', {
      id: id,
      element: element,
      styles: styles
    })
    .then(response =>
        response.data
    );
