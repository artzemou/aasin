import {
  fetchSetLeaf
} from '@/api/setLeaf'
import {
  setIsLoading
} from '@/store/actions/isLoading'
import {
  getLeaf
} from '@/store/actions/getLeaf'
import {
  getLeaves
} from '@/store/actions/getLeaves'
import history from '@/router/history'

export const setLeaf = (id, title, layouts, contents) =>
  (dispatch) => fetchSetLeaf(id, title, layouts, contents)
  .catch((e) => {
    console.error('erreur server: ', e)
    return []
  })
  .then(id => setTimeout(() => {
    if (id) {
      dispatch(getLeaves())

      setTimeout(() => {
        // dispatch(getLeaf(id))
        history.push(`/page/${id}`)
        dispatch(setIsLoading(false))

      }, 750)
    }
  }, 0))