import {fetchLeaves} from '@/api/getLeaves'
import {setIsLoading} from '@/store/actions/isLoading'

export const setLeaves = (results) => ({
    type: 'SET_LEAVES',
    results
})

export const getLeaves = () =>
    (dispatch) => fetchLeaves()
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(results => {
          dispatch(setLeaves(results))
          setTimeout(() => {
            dispatch(setIsLoading(false))
          }, 1000)
        })
