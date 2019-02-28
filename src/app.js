import React from 'react';
import MaterialSpinner from '@/components/MaterialSpinner'
import {Link, Route, withRouter, Redirect} from 'react-router-dom';

import NavBar from '@/router/navigation/NavBar';
import Router from '@/router/router';
import ResizeDetector from 'react-resize-detector';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LeavesActions from '@/store/actions/getLeaves';
import * as GetStylesAction from '@/store/actions/getStyles'
import * as SetCurrentBreakpoint from '@/store/actions/setCurrentBreakpoint'
// import { Typesetter } from "typesettable"; for import svg in canvas

import requestAnimationFrame from '../modules/requestAnimationFrame'
import drawCanvas from '../modules/drawCanvas'

import styles from '@/assets/css/styles'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320},
      currentBreakpoint: null,
    }
  }

  componentBeforeMount(){
    this.props.setIsLoading(true)
  }

  componentDidMount() {
    this.props.getLeaves()
    this.props.getStyles("Home")
    // requestAnimationFrame()
    // drawCanvas()
  }


  onResize(width) {
    const {breakpoints} = this.state
    let breakpoint = this.getBreakpointFromWidth(breakpoints, width - 100)
    console.log(breakpoint, this.props.currentBreakpoint )

    if (this.props.currentBreakpoint === this.state.currentBreakpoint) {
      this.setState({currentBreakpoint: breakpoint})
      this.props.setCurrentBreakpoint(breakpoint)
    }
    else {
      this.setState({
        currentBreakpoint: this.props.currentBreakpoint
      })
    }
  }

  getBreakpointFromWidth(breakpoints, width) {
    var sorted = this.sortBreakpoints(breakpoints)
    var matching = sorted[0];
    for (var i = 1, len = sorted.length; i < len; i++) {
      var breakpointName = sorted[i];
      if (width > breakpoints[breakpointName]) matching = breakpointName;
    }
    return matching
  }

  sortBreakpoints(breakpoints) {
    var keys = Object.keys(breakpoints);
    return keys.sort(function (a, b) {
      return breakpoints[a] - breakpoints[b];
    })
  }

  render() {
    const {isSignedIn, isAdmin} = this.props.auth
    const {leaves} = this.props
    return (
      <div id="wrap">
        <NavBar/>
        <MaterialSpinner/>
        <canvas id="canvas"></canvas>
        <main id="view-container">
          <ResizeDetector
            handleWidth
            handleHeight
            resizableElementId="view-container"
            refreshMode="throttle"
            refreshRate={1}
            onResize={(width) => this.onResize(width)}
            render={({ width, height }) => (
              <div id="view-content">
                <Router/>
              </div>
            )}
          />
        </main>
        <style jsx global>{`

          noscript {
            position:absolute;
            display:flex;
            z-index:9999999;
            padding:1rem;
            top:0;
            left:0;
            right:0;
            bottom: 0;
            background: #eeeeee;
            align-items: center;
            justify-content: center;
          }

          *{
            box-sizing: border-box;
          }

          ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
          }

          ::-webkit-scrollbar-thumb {
            -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
            background-color: transparent;
          }

          ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0);
            background-color: transparent;
          }

          :focus {
            outline: 0;
          }
        `}</style>

        <style jsx global>{`
          html{
            background-color: ${styles.primaryColor};
            color: #444444;
            font: 12pt 'Muli', sans-serif;
            overflow: hidden;
            img{
              max-width: 100%;
            }
            #wrap{
              display: flex;

              height: 100vh;
              #canvas{
                position: fixed;
                bottom: 0;
                right: 0;
              }
              #view-container{
                position: relative;
                z-index: 1;
                padding: 1rem;
                flex: 1;
                overflow-y: auto;
                overflow-x: hidden;

                #view-content{
                  margin: 5rem auto;
                  max-width: 1200px;
                }
                a{
                  cursor: pointer;
                  text-decoration: none;
                  color: #444444;
                  padding: 1rem;
                  box-shadow: 0 2px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3);
                  &:focus {
                    box-shadow: inset 0 0 20px rgba(0,0,0,.1);
                  }
                  &:hover {
                    box-shadow: inset 0 0 20px rgba(0,0,0,.1);
                  }
                }

                .header-viewer, form, .color-picker {
                  button {
                    position: relative;
                    padding: 1rem;
                    margin-bottom: .5rem;
                    margin-right: .5rem;
                    background: buttonface;
                    border: 0;
                    box-shadow: 0 2px 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3);
                    border-radius: 4px;
                    &:focus {
                      box-shadow: 0 2px 3px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.3);
                      outline-color: transparent;
                    }
                    &:hover {
                      box-shadow: 0 2px 3px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.3);
                      outline-color: transparent;
                    }
                    &.btn-focused {
                      box-shadow: 0 2px 3px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.3);
                    }
                    &.lg {
                      @media (max-width: 1400px) {
                          display: none;
                      }
                    }
                  }

                }

                .mce-btn {
                  border: 0;
                   button {
                     background: buttonface;

                   }

                }

                form {
                  display:flex;
                  max-width: 300px;
                  margin: 0 auto;
                  flex-direction: column;

                  input, .mce-content-body {
                    background: transparent;
                    padding: 1rem;
                    margin-bottom: .5rem;
                    box-shadow: 0 2px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3);
                    border: 0 solid #d9d9d9;
                    border-radius: 4px;
                    transition: border-color ease-in-out .15s;

                    &:-webkit-autofill {
                      box-shadow: 0 0 0 1000px #eeeeee inset , 0 2px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3);
                    }
                    &:focus {
                      box-shadow: 0 2px 3px rgba(0,0,0,.1),0 4px 8px rgba(0,0,0,.3);
                      outline-color: transparent;
                    }
                  }
                }
              }
            }

            .react-grid-layout {
              position: relative;
              transition: height 200ms ease;
              margin: 0 auto;
            }


            .react-grid-item.react-grid-placeholder {
              background: rgba(0,0,0,.2);
              opacity: 0.2;
              transition-duration: 100ms;
              z-index: 2;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              -o-user-select: none;
              user-select: none;
            }

            .react-grid-item > .react-resizable-handle {
              position: absolute;
              width: 20px;
              height: 20px;
              bottom: 0;
              right: 0;
              cursor: se-resize;
            }

            .react-grid-item > .react-resizable-handle::after {
              content: "";
              position: absolute;
              right: 12px;
              bottom: 6px;
              width: 8px;
              height: 8px;
              border-right: 2px solid rgba(0, 0, 0, 0.2);
              border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            }
            .react-resizable {
              position: relative;
            }
            .react-resizable-handle {
              position: absolute;
              width: 20px;
              height: 20px;
              bottom: 0;
              right: 0;
              background-position: bottom right;
              padding: 0 3px 3px 0;
              background-repeat: no-repeat;
              background-origin: content-box;
              box-sizing: border-box;
              cursor: se-resize;
            }

            .title{
              .mce-content-body{
                min-height: calc(100% );
                padding: 1rem;
                margin-top: 0;
              }
            }

            .mce-content-body, .item-content{
              padding: 0 1rem 0;
              margin: 30px 0;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              cursor: text;
              line-height: 1.3;
              p{
                margin: 0;
                width: 100%;
                word-wrap: break-word;
              }
            }
            .hidden{
              .mce-content-body{
                opacity: .05;
              }
            }

          }
        `}</style>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({auth: state.auth, leaves: state.leaves, styles: state.styles, currentBreakpoint: state.currentBreakpoint});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...LeavesActions, ...GetStylesAction, ...SetCurrentBreakpoint}, dispatch)

export default withRouter(connect(mapStateToProps, mapActionCreatorsToProps) (App))
