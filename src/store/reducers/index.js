import {
  combineReducers
} from 'redux';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from 'react-redux-i18n';

import results from './results';
import auth from './signIn';
import signUpState from './signUp';
import isLoading from './isLoading';
import leaves from './getLeaves';
import leaf from './getLeaf';
import styles from './getStyles';
import currentBreakpoint from './setCurrentBreakpoint';

export const reducer = combineReducers({
  currentBreakpoint,
  results,
  auth,
  signUpState,
  isLoading,
  leaves,
  leaf,
  styles,
  i18n: i18nReducer
});