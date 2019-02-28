import {fetchLeaf} from '@/api/getLeaf'

export const setLeaf = (result) => ({
    type: 'SET_LEAF',
    result
})

export const getLeaf = (id) =>
    (dispatch) => fetchLeaf(id)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(result => setTimeout(() => {
          dispatch(setLeaf(result))
        }, 0))
