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
import { Responsive, WidthProvider } from 'react-grid-layout'
import Waypoint from 'react-waypoint';
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Spinner from '@/components/Spinner'
import { Clear, Refresh, Add, DeleteOutlined, DesktopWindows, Done} from '@material-ui/icons'
import * as SetCurrentBreakpoint from '@/store/actions/setCurrentBreakpoint'


import styles from '@/assets/css/styles'

const ResponsiveGridLayout = WidthProvider(Responsive)

class MyResponsiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false,
      scrolled: false,
      id: null,
      title: null,
      contents:[],
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320},
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      layouts: {"lg": [], "md": [], "sm": [], "xs": [], "xxs": []},
    }
    this.setItemHeigth = this.setItemHeigth.bind(this)
  }

  componentDidMount() {
    const { match: { params : {id} } } = this.props
    this.props.getLeaf(id)
    this.setState({
      id: id,
      initDone: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { match: { params : {id} }, leaf, locale, currentBreakpoint} = this.props
    const {title, contents, layouts, breakpoints} = this.state
    if (prevProps === undefined) {
      return false
    }

    if (this.state.id !== id) {
      this.setState({
        id: id
      }, () => {
        this.props.getLeaf(id)
      })
    }

    if (prevProps.locale !== locale) {
      // this.props.getLeaf(id)
    }

    if (prevProps.leaf !== leaf ) {
      if (leaf.layouts) {
        this.setState({
          title: JSON.parse(leaf.title),
          layouts: JSON.parse(leaf.layouts),
          contents: JSON.parse(this.props.leaf.contents)
        })
      }

    }

    if (prevProps.currentBreakpoint !== currentBreakpoint) {
      document.querySelector('#view-content').style.maxWidth = `${breakpoints[currentBreakpoint] + 60}px`
      window.dispatchEvent(new Event('resize'))
      setTimeout(() => {
        this.setItemHeigth()
      }, 1000)
    }
  }

  setItemHeigth() {
    if (this.state.contents.length > 0) {
      const {leaf, currentBreakpoint} = this.props
      let {layouts} = this.state
      let index = 0, diff = 0
      for (let item of document.querySelectorAll('.react-grid-item')) {
        let mceBody = item.childNodes[0].childNodes[0]
        let mceBodyHeight = mceBody.clientHeight
        Object.keys(layouts).map((key, i) => {
          if (layouts[key][index]) {
            if (currentBreakpoint !== key) {
            }
            else {
              if (Math.round(mceBodyHeight*.1) < 20) {
                diff = 20 - layouts[key][index].h
                layouts[key][index].h = 20
              }
              else {
                diff = (Math.round(mceBodyHeight*.1) + 6) - layouts[key][index].h
                layouts[key][index].h = Math.round(mceBodyHeight*.1) + 6
              }
            }

          }
        })

        index++
      }
      this.setState({
        layouts: layouts
      }, () => {
        this.onSetLeaf(false)
        console.log('item resized')
        console.log(this.state.layouts)
      })
    }
  }

  onLayoutChange(layout, layouts) {
    console.log('layouts changed')
     this.setState({
        layouts: layouts
     })
  }

  onSetLeaf(bool) {
    this.props.setIsLoading(bool)
    const { match: { params : {id} }, getLeaf, setLeaf, setCurrentBreakpoint, currentBreakpoint} = this.props
    let {title, layouts, contents, breakpoints} = this.state
    setLeaf(id, title, layouts, contents)

  }


  render() {
    const {layouts, cols, breakpoints, checkedViews, title, scrolled, contents, focused, alerts} = this.state
    const {locale, leaf, currentBreakpoint} = this.props
    const { match: { params : {id} }, getLeaf, setLeaf} = this.props
    console.log(layouts)
    return (
      this.state.initDone &&
      <Fragment>
            <div className="grid-layouts-container">
              {breakpoints[currentBreakpoint]}
              <header className="header-grid-layout-container">
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: title ? title.hasOwnProperty(`${locale}`)  ? title[`${locale}`] : I18n.t('app.newPage.translation') : I18n.t('app.newPage.addTitle') }}
                  >
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
                  isResizable={false}
                  isDraggable= {false}
                  useCSSTransforms={true}
                  cols={cols}
                  breakpoints={breakpoints}
                  layouts={layouts}
                  onLayoutChange={(layout, layouts) =>
                    this.onLayoutChange(layout, layouts)}
                  onWidthChange={() => setTimeout(() => {
                    console.log('width changed')
                  }, 1000)}
                  >
                  {currentBreakpoint ? layouts[currentBreakpoint].map((layout, index) =>
                    {
                      return(
                      <div
                        className={focused === index ? "focused" : null}
                        key={index}
                        data-grid={{x: layout.x , y: layout.y, w: layout.w, h: layout.h}}>
                        <div className='item'>
                          <div className='item-content' dangerouslySetInnerHTML={{ __html: contents[index] ? contents[index].hasOwnProperty(`${locale}`) ? contents[index][`${locale}`] : I18n.t('app.newPage.translation')  : I18n.t('app.newPage.draft') }}/>
                        </div>
                      </div>
                  )}) : null }
              </ResponsiveGridLayout>
              <ScrollTopBtn visible={scrolled}/>
            </div>
        <style jsx>{`

          .grid-layouts-container {
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
              &.focused {
                .item {
                  border: 2px dashed rgba(0,0,0,.1);
                }
              }

              .item {
                background: ${styles.background};
                border: 1px dashed rgba(0,0,0,.1);
                margin: 20px 5px;
                height: calc(100% - 1rem);
                overflow: hidden;

                .item-alert{
                  display: none;
                  &.visible{
                    position: absolute;
                    top: 20px;
                    left: 5px;
                    right: 5px;
                    bottom: -4px;
                    padding: 1rem;
                    background: rgba(0, 0, 0, .1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span {
                      flex: 1;
                      text-align: center;
                      font-size: 1.5rem;
                    }
                  }

                }

                .remove{
                  position: absolute;
                  right: .5rem;
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


const mapStateToProps = (state) => ({leaf: state.leaf, locale: state.i18n.locale, currentBreakpoint: state.currentBreakpoint});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...GetLeafActions, ...SetLeafActions, ...LoadingActions, ...SetCurrentBreakpoint }, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps)(MyResponsiveGrid);
