import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as GetLeafActions from '@/store/actions/getLeaf'
import * as SetLeafActions from '@/store/actions/setLeaf'
import * as LoadingActions from '@/store/actions/isLoading'


import {I18n } from 'react-redux-i18n'
import replaceHtmlEntities from 'modules/replaceHtmlEntities'
import ResizeDetector from 'react-resize-detector';
import TinyEditor from '@/views/admin/components/TinyEditor'
import { Responsive, WidthProvider } from 'react-grid-layout'
import Waypoint from 'react-waypoint';
import ScrollTopBtn from '@/components/ScrollTopBtn'
import { Clear, Refresh, DesktopWindows, Add, Done} from '@material-ui/icons'
import styles from '@/assets/css/styles'

const ResponsiveGridLayout = WidthProvider(Responsive)

class CreateNewPage extends React.Component {

  constructor(props) {
    super(props);
    this.getBreakpointFromWidth = this.getBreakpointFromWidth.bind(this)
    this.sortBreakpoints = this.sortBreakpoints.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.onAddItem = this.onAddItem.bind(this)
    this.gridItemFocus = this.gridItemFocus.bind(this)
    this.state = {
      initDone: false,
      scrolled: false,
      title: null,
      contents:[],
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320},
      checkedViews: {lg: false, md: false, sm: false, xs: false, xxs: false},
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      currentBreakpoint: null,
      layouts: {"lg": [], "md": [], "sm": [], "xs": [], "xxs": []},
      y: 0
    }
  }


  componentDidMount() {
    let { locale } = this.props
    sessionStorage.removeItem("layouts")
    this.setState({
      currentBreakpoint: this.getBreakpointFromWidth(this.state.breakpoints, document.querySelector('#view-content').clientWidth),
      initDone: true,
      locale: locale
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.locale, this.props.locale)
    const { leaf, locale} = this.props
    const {layouts, currentBreakpoint, checkedViews} = this.state

    if (prevProps === undefined) {
      return false
    }
    if (prevProps.locale !== locale) {
      this.setState({initDone: false})
      let {title, layouts, contents} = this.state
      this.props.setLeaf(null, title, layouts, contents)
    }

    if (prevState.layouts !== layouts) {
      if(layouts.update) {
        delete layouts.xxxs
      }
      setTimeout(()=> {
        for (let item of document.querySelectorAll('.item')) {
          let itemHeight = item.offsetHeight
          let mceBodyHeight = item.childNodes[1].clientHeight + parseInt(window.getComputedStyle(item.childNodes[1]).getPropertyValue("margin-top"))
          if (itemHeight < mceBodyHeight) {
            checkedViews[currentBreakpoint] = false
            this.setState({checkedViews: checkedViews})
            break
          }
          else {
            checkedViews[currentBreakpoint] = true
            this.setState({checkedViews: checkedViews})
          }
        }
      }, 1000)
    }
  }

  getBreakpointFromWidth(breakpoints, width) {
    var sorted = this.sortBreakpoints(breakpoints);
    var matching = sorted[0];
    for (var i = 1, len = sorted.length; i < len; i++) {
      var breakpointName = sorted[i];
      if (width > breakpoints[breakpointName]) matching = breakpointName;
    }
    return matching;
  }

  sortBreakpoints(breakpoints) {
    var keys = Object.keys(breakpoints);
    return keys.sort(function (a, b) {
      return breakpoints[a] - breakpoints[b];
    });
  }


  onLayoutChange(layout, layouts) {
    this.setState({
      layouts: layouts
     });
    sessionStorage.setItem("layouts", JSON.stringify(layouts))
  }

  updateInput(index, name, inputContent) {
    let {contents, title, layouts, currentBreakpoint, freezeUpdate, locale} = this.state
      if(this.state.initDone) {
        if (document.querySelector('.focused') && name === 'content') {
          let focused = document.querySelector('.focused')
          let mceBody = focused.querySelector('.mce-content-body')
          let mceBodyHeight = mceBody.clientHeight + parseInt(window.getComputedStyle(mceBody).getPropertyValue("margin-top"))
          let h = parseInt(mceBodyHeight / 10)
          Object.keys(layouts).map((key, i) => {
            if(layouts[key][index]) {
              if (focused.clientHeight - parseInt(window.getComputedStyle(mceBody).getPropertyValue("padding-bottom")) < mceBodyHeight) {
                layouts[key][index].h = h + 3
              }
            }
            // if (i < layouts[key].length && i !== index) {
            //   if (layouts[key][i].y > 0) {
            //     layouts[key][i].y = layouts[key][i].y  + h + 3
            //   }
            // }
          })
          this.onLayoutChange(layouts[currentBreakpoint][index], { ...layouts, xxxs: []})
      }
    }

    if (name === 'title') {
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.translation')) return
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.addTitle')) return
      if (title) {
        title[`${this.state.locale}`] = inputContent
      } else {
        title = new Object()
        title[`${this.state.locale}`] = inputContent
      }
      this.setState({title: title})
    }
    if (name === 'content') {

      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.draft')) return
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.translation')) return
      if (contents[index]) {
        contents[index][`${this.state.locale}`] = inputContent
      } else {
        if (freezeUpdate) {
          this.setState({freezeUpdate: false})
          return
        }
        contents[index] = new Object()
        contents[index][`${this.state.locale}`] = inputContent
      }

      this.setState({contents: contents})
    }
  }

  onResize(width) {
    console.log(width + 60)
     this.setState({
       width: width,
       currentBreakpoint: this.getBreakpointFromWidth(this.state.breakpoints, width + 60)
     })
     window.dispatchEvent(new Event('resize'))
  }

  onAddItem() {
    let layouts = this.state.layouts
    Object.keys(this.state.layouts).map((key, index) => {
      console.log((layouts[key].length * 2 ) % this.state.cols[key] === 0, ':)')

      layouts[key] = [
        ...layouts[key],
        {
          "w": 2,
          "h": 20,
          "x": (layouts[key].length * 2 ) % this.state.cols[key],
          "y": this.state.y,
          "i": layouts[key].length.toString(),
          "moved": false,
          "static": false
        }
      ]
      if ( (layouts[key].length * 2 ) % this.state.cols[key] === 0) {
         this.setState({y : this.state.y + 20})
      }
    })
    this.setState({
      layouts: layouts
    })

  }

  onRemoveItem(i) {
    let {layouts, contents} = this.state
    const {locale} = this.props
    Object.keys(this.state.layouts).map((key, index) => {
      layouts[key].splice(i, 1)
      layouts[key].map((layout, index) => {
        layout.i = index.toString()
      })
    })
    contents.splice(i, 1)
    this.setState({
      freezeUpdate: true,
      contents,
      layouts
    })
  }

  onSetLeaf() {
    this.props.setIsLoading(true)
    let {title, layouts, contents, checkedViews} = this.state
    this.props.setLeaf(null, title, layouts, contents, checkedViews)
  }

  gridItemFocus (index) {
    this.setState({focused: index})
  }

  changeBreakpoint (newWidth) {
    document.querySelector('#view-content').style.maxWidth = `${newWidth}px`
  }

  render() {
    const {layouts, cols, currentBreakpoint, breakpoints, checkedViews, title, scrolled, contents, focused, locale} = this.state
    return (
      this.state.initDone &&
      <Fragment>
        <ResizeDetector
          handleWidth
          handleHeight
          resizableElementId="view"
          refreshMode="throttle"
          refreshRate={1}
          onResize={(width) => this.onResize(width)}
          render={({ width, height }) => (
            <div className="grid-layouts-container">
              <header className="header-viewer">
                <h2>{I18n.t('app.newPage.title') || ''}</h2>
                <button className="add-btn" onClick={this.onAddItem}>
                   <Add/>
                </button>
                <button className="refresh-btn" onClick={(title, layouts, contents) => this.onSetLeaf(title, layouts, contents)}>
                  <Refresh/>
                </button>
                <h3>{I18n.t('app.newPage.resolutions')}</h3>
                  { Object.entries(breakpoints).map((breakpoint, key) => {
                    return  (
                      <button className={currentBreakpoint === `${breakpoint[0]}` ? "button-focused" : null } key={key} onClick={() => this.changeBreakpoint(breakpoint[1])}>
                        <DesktopWindows/>{breakpoint[1]}
                        {checkedViews ? checkedViews[`${breakpoint[0]}`] ? <Done/> : null : null}
                      </button>
                    )
                  }) }
              </header>
              <header className="header-grid-layout-container">
                <div>
                  Width:{width}, Height:{height}
                </div>
                <div className={focused === 'title' ? 'title focused' : 'title'}>
                  <TinyEditor
                    index={'title'}
                    name="title"
                    updateInput={this.updateInput}
                    gridItemFocus={this.gridItemFocus}
                    content={title ? title.hasOwnProperty(`${locale}`)  ? title[`${locale}`] : I18n.t('app.newPage.translation') : I18n.t('app.newPage.addTitle') }
                  />
                </div>
                <Waypoint
                  onEnter={({ viewportTop, event }) => {
                    this.setState({scrolled: false})
                  }}
                  onLeave={({ viewportTop, event }) => {
                    this.setState({scrolled: true})
                  }}
                />
              </header>
              <ResponsiveGridLayout
                  autoSize={true}
                  rowHeight={10}
                  margin={[0, 0]}
                  isResizable={true}
                  useCSSTransforms={true}
                  draggableCancel=".mce-content-body"
                  cols={cols}
                  breakpoints={breakpoints}
                  layouts={this.state.layouts}
                  onLayoutChange={(layout, layouts) =>
                    this.onLayoutChange(layout, layouts)}
                  onWidthChange={() => console.log(':)')}
                >
                  {currentBreakpoint ? layouts[currentBreakpoint].map((layout, index) =>
                    {
                      return(
                      <div className={focused === index ? 'focused' : null} key={index} data-grid={{x: layout.x , y: layout.y, w: layout.w, h: layout.h}}>
                        <div className={focused === index ? 'item focused' : 'item'}>
                          <div className="remove">
                            {index}<Clear  onClick={this.onRemoveItem.bind(this, index)}/>
                          </div>
                          <TinyEditor
                            index={index}
                            name="content"
                            updateInput={this.updateInput}
                            gridItemFocus={this.gridItemFocus}
                            content={contents[index] ? contents[index].hasOwnProperty(`${locale}`) ? contents[index][`${locale}`] : I18n.t('app.newPage.translation')  : I18n.t('app.newPage.draft')}
                          />
                        </div>
                      </div>
                  )}) : null }
              </ResponsiveGridLayout>
              <ScrollTopBtn visible={scrolled}/>
            </div>
          )}
        />
        <style jsx>{`
          .header-viewer{
            position: fixed;
            top: 0;
            margin-bottom: 1rem;
            width: 100%;
            background: ${styles.primaryColor};
            z-index: 99999;
          }

          .grid-layouts-container {
            margin-top: 200px;
            button {
              margin: 0 .25rem;
            }

            .title{
              border: 1px dashed rgba(0,0,0,.1);
              margin: 1rem 5px;
              &.focused {
                border: 2px dashed rgba(0,0,0,.1);
              }
            }

            .react-grid-item {

              .item {
                border: 1px dashed rgba(0,0,0,.1);
                margin: 20px 5px;
                height: calc(100% - 1rem);
                &.focused {
                  border: 2px dashed rgba(0,0,0,.1);
                }
                .remove{
                  position: absolute;
                  right: 1.5rem;
                  top: 1.5em;
                  z-index: 1;
                  cursor: pointer;
                  color: rgba(0, 0, 0, 0.26);
                }
              }
            }
          }
        `}</style>
      </Fragment>

    )
  }
}


const mapStateToProps = (state) => ({leaf: state.leaf, locale: state.i18n.locale});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...GetLeafActions, ...SetLeafActions, ...LoadingActions }, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps)(CreateNewPage);
