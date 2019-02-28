import {fetchGetStyles} from '@/api/getStyles'


export const setComponentStyles = (result) => ({
    type: 'SET_COMPONENT_STYLES',
    result
})

export const getStyles = (element) =>
    (dispatch) => fetchGetStyles(element)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
        .then(result => setTimeout(() => {
          dispatch(setComponentStyles(result))
        }, 0))
