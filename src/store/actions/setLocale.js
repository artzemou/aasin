import {setLocale} from 'react-redux-i18n';
import {fetchSetLocale} from '@/api/setLocale'

export const setLanguage = (locale) =>
    (dispatch) => fetchSetLocale(locale)
        .catch((e) => {
            console.error('erreur server: ', e)
            return []
        })
          .then(locale => setTimeout(() => {
            if (locale) {
              dispatch(setLocale(locale))
            }
          }, 0))
