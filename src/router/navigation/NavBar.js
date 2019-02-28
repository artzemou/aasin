import React, {Fragment, Component} from 'react';
import { Add, MoreVert} from '@material-ui/icons';
import {Link, Route, withRouter, Redirect} from 'react-router-dom';
import Ripples from 'react-ripples'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LeavesActions from '@/store/actions/getLeaves';
import {I18n } from 'react-redux-i18n'

import LocaleSelect from '@/i18n/LocaleSelect';
import LogSelect from '@/router/navigation/LogSelect';
import styles from '@/assets/css/styles'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false,
      isOpened: true,
      color: 'rgba(0, 0, 0, .1)'
    }
  }

  componentDidMount() {
    this.setState({
      initDone: true
    })

  }

  handleToggleIsOpened() {
    this.state.isOpened ? this.setState({isOpened: false}) : this.setState({isOpened: true})
  }

  render() {
    let {leaves} = this.props
    let {locale} = this.props.i18n
    const {isSignedIn, isAdmin} = this.props.auth
    const {color} = this.state
    return(
      this.state.initDone &&
      <Fragment>
        <nav className="nav-bar">
          <ul>
            <LocaleSelect/>
            <li>
              <MoreVert onClick={() => {
                this.handleToggleIsOpened()
              }}/>
            </li>
          </ul>
        </nav>
        <nav className={this.state.isOpened ? "side-bar opened" : "side-bar"} id="side-bar">
          <ul className="side-bar-scrollable">
              <li>
                <Ripples color={color}>
                  <Link to="/">Home</Link>
                </Ripples>
              </li>
              <LogSelect/>
              { isAdmin ? (
                <li>
                  <Ripples color={color}>
                    <Link to="/dashboard">{I18n.t('app.nav.dashboard')}</Link>
                  </Ripples>
                </li>
              ) : null
            }
            { leaves.map((leaf, index) => {
              return (
                <li key={index}>
                  <Ripples color={color}>
                    <Link to={`/page/${leaf.id}`} dangerouslySetInnerHTML={{__html: JSON.parse(leaf.title) ? JSON.parse(leaf.title).hasOwnProperty(`${locale}`) ? JSON.parse(leaf.title)[`${locale}`] : I18n.t('app.nav.translation') : I18n.t('app.nav.addTitle')}}></Link>
                  </Ripples>
                </li>
              )
            })}
          </ul>
        </nav>
        <style jsx global>{`
          $background : ${styles.primaryColor};
          $black : #444444;
          html {
            .nav-bar{
              position: fixed;
              z-index: 10;
              display: flex;
              right: 1rem;
              top: 0;
              ul {
                margin: 0;
                padding: 0;
                display: flex;
                li {
                  display: flex;
                  align-items: center;
                  margin: .25rem;
                  cursor: pointer;
                }
              }
            }
            .side-bar{
              width: 200px;
              transition: margin 250ms linear;
              z-index: 9;
              height: 100vh;
              overflow-y: auto;
              background: $background;
              .side-bar-scrollable{
                  margin: 0;
                  padding: 0;
                  display: flex;
                  flex-direction: column;
                  li{
                    div{
                      display: flex !important;
                      align-items: center;
                      word-break: break-word;
                      hyphens: auto;

                      a{
                        margin: 0;
                        cursor: pointer;
                        flex: 1;
                        text-decoration: none;
                        color: $black;
                        padding: 1rem;
                        box-shadow: inset 0 0 1px rgba(0,0,0,.1);
                        p{
                          display: inline-block;
                          margin:0;
                        }
                        &:focus {
                          box-shadow: inset 0 2px 130px rgba(0,0,0,.1);
                          outline-color: transparent;
                        }
                        &:hover {
                          box-shadow: inset 0 0 2px rgba(0,0,0,.1);
                          outline-color: transparent;
                        }
                      }
                    }
                  }
                }
              }
          }

        `}</style>
        <style jsx>{`
          .side-bar{
            margin-left: ${this.state.isOpened ? '0' : '-200' }px;
            .side-bar-scrollable{
            }
          }
        `}</style>
      </Fragment>
    )
  }
}
//`${locale}`
const mapStateToProps = (state) => ({ ...state});
export default connect(mapStateToProps) (NavBar)
