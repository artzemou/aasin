import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LocaleActions from '@/store/actions/setLocale';
import styles from '@/assets/css/styles'

class LocaleSelect extends Component {

  render() {
    const {setLanguage} = this.props
    return(
      <Fragment>
        <li>
          <span onClick={() => setLanguage('fr')}>fr</span>
        </li>
        <li>|</li>
        <li>
          <span onClick={() => setLanguage('en')}>en</span>
        </li>
        <style jsx>{`
          span{
            display: inline-flex;
            padding: 1rem;
          }
        `}</style>

      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({locale: state.i18n.locale});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({ ...LocaleActions}, dispatch)
export default connect(mapStateToProps, mapActionCreatorsToProps) (LocaleSelect)
