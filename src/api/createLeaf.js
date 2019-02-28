import axios from './axios';

export const fetchCreateLeaf = (title, content, locale) =>
    axios.post('createLeaf', {
      title: title,
      content: content,
      locale: locale
    })
    .then(response =>
        response.data
    );
