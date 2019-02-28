import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SignOutActions from '@/store/actions/signOut';
import Ripples from 'react-ripples'
import {I18n } from 'react-redux-i18n'
import styles from '@/assets/css/styles'

class LogSelect extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this)
    this.state = {color: 'rgba(0, 0, 0, .1)', initDone: false}
  }

  componentDidMount() {
    this.setState({
      initDone: true
    })
  }

  signOut() {
    this.props.signOut()
  }

  render() {
    const {setLanguage} = this.props
    const {color} = this.state
    return(
      this.state.initDone &&
      <Fragment>
        <li>
          <Ripples color={color}>
            <Link to="/signIn">{I18n.t('app.nav.login')}</Link>
          </Ripples>
        </li>
        <li>
          <Ripples color={color}>
            <a onClick={this.signOut}>{I18n.t('app.nav.logout')}</a>
          </Ripples>
        </li>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({...state});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({  ...SignOutActions}, dispatch)
export default connect(mapStateToProps, mapActionCreatorsToProps) (LogSelect)
