import {fetchDeleteLeaf} from '@/api/deleteLeaf'
import {getLeaves} from '@/store/actions/getLeaves'

export const deleteLeaf = (id) =>
    (dispatch) => fetchDeleteLeaf(id)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(result => setTimeout(() => {
            dispatch(getLeaves())
        }, 0))
