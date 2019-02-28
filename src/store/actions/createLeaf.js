import {fetchCreateLeaf} from '@/api/createLeaf'
import {setIsLoading} from '@/store/actions/isLoading'
import {getLeaves} from '@/store/actions/getLeaves'
export const createLeaf = (title, content, locale) =>
    (dispatch) => fetchCreateLeaf(title, content, locale)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
          .then(result => setTimeout(() => {
              dispatch(getLeaves())
              dispatch(setIsLoading(false))

          }, 1000))
