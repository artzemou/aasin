import axios from './axios';

export const fetchSetLeaf = (id, title, layouts, contents) =>
  axios.post('setLeaf', {
    id: id,
    title: title,
    layouts: layouts,
    contents: contents
  })
  .then(response =>
    response.data
  );