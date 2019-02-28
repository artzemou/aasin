import {fetchResults, fetchUpDate} from '@/api/results'
import {setIsLoading} from '@/store/actions/isLoading'
export const setResults = (results) => ({
    type: 'SET_RESULTS',
    results
})

export const update = (data) =>
    (dispatch) => fetchUpDate(data)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(results => setTimeout(() => {
          dispatch(setIsLoading(false))
        }, 1000))


export const loadResults = () =>
    (dispatch) => fetchResults()
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(results => setTimeout(() => {
          dispatch(setResults(results))
        }, 0))
