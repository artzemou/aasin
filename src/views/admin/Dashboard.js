import React, {Fragment} from 'react'
import {Link, Route, withRouter, Redirect} from 'react-router-dom';
import Ripples from 'react-ripples'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ResultsActions from '@/store/actions/results'
import * as LoadingActions from '@/store/actions/isLoading';
import {I18n } from 'react-redux-i18n'
import history from '@/router/history'

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initDone: false,
        color: 'rgba(0, 0, 0, .1)'
      }
    }

    componentDidMount() {
      this.setState({
        initDone: true
      })

    }

    delayRedirect (e) {
      console.log(e.target.pathname)
      let to = e.target.pathname
      e.preventDefault()
      setTimeout(()=>history.push(to), 200)
    }

    render() {
        const {color} = this.state
        return (
          this.state.initDone &&
          <Fragment>
            <div className="dashboard">
              <div className="dashboard-nav">
                <Ripples color={color}>
                  <Link to="/newLeaf" onClick={this.delayRedirect}>{I18n.t('app.dashboard.editWebspace')}</Link>
                </Ripples>
                <Ripples color={color} >
                  <Link to="/deletePage" onClick={this.delayRedirect}>{I18n.t('app.dashboard.deleteLeaf')}</Link>
                </Ripples>
                <Ripples color={color} >
                  <Link to="/" onClick={this.delayRedirect}>{I18n.t('app.dashboard.designModification')}</Link>
                </Ripples>
                <Ripples color={color} >
                  <Link to="/" onClick={this.delayRedirect}>Modifié droit utilisateur</Link>
                </Ripples>
              </div>
            </div>
            <style jsx global>{`
              .dashboard {
                .dashboard-nav {
                  div {
                    display: inline-flex !important;
                    margin-right: .5rem;
                    box-shadow: inset 0 0 2px rgba(0,0,0,.1), 0 2px 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3);
                  }
                }
              }
            `}</style>
          </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({results: state.results});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...ResultsActions, ...LoadingActions}, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Dashboard);
