import {fetchSetStyles} from '@/api/setStyles'
import history from '@/router/history'

export const setStyles = (id, element, styles) =>
    (dispatch) => fetchSetStyles(id, element, styles)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
          .then((element) => setTimeout(() => {
          }, 0))
