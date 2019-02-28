import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as GetLeafActions from '@/store/actions/getLeaf'
import * as SetLeafActions from '@/store/actions/setLeaf'
import * as LoadingActions from '@/store/actions/isLoading'
import * as SetCurrentBreakpoint from '@/store/actions/setCurrentBreakpoint'

import {I18n } from 'react-redux-i18n'
import replaceHtmlEntities from 'modules/replaceHtmlEntities'
import getRandomColor from 'modules/getRandomColor'
import ResizeDetector from 'react-resize-detector'
import TinyEditor from '@/views/admin/components/TinyEditor'
import { Responsive, WidthProvider } from 'react-grid-layout'
import Waypoint from 'react-waypoint'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Spinner from '@/components/Spinner'
import { Clear, Refresh, Add, DeleteOutlined, DesktopWindows, Done, ComputerOutlined} from '@material-ui/icons'
import ReactTooltip from 'react-tooltip'

const shortid = require('shortid');
console.log(shortid.generate());

import styles from '@/assets/css/styles'

const ResponsiveGridLayout = WidthProvider(Responsive)

class MyResponsiveGrid extends React.Component {

  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this)
    this.onAddItem = this.onAddItem.bind(this)
    this.gridItemFocus = this.gridItemFocus.bind(this)
    this.setItemHeigth = this.setItemHeigth.bind(this)
    this.checkAllBreakpointAndUpdate = this.checkAllBreakpointAndUpdate.bind(this)
    this.translateY = this.translateY.bind(this)
    this.getComputedTranslateXY = this.getComputedTranslateXY.bind(this)

    this.state = {
      initDone: false,
      scrolled: false,
      id: null,
      title: null,
      contents:[],
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320},
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      layouts: {"lg": [], "md": [], "sm": [], "xs": [], "xxs": []},
      y: 0,
      focused: null,
      transition: 'none'
    }
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
    //this.props.location.key
    const { match: { params : {id} }, leaf, locale, currentBreakpoint } = this.props
    const {title, contents, layouts, breakpoints} = this.state
    if (prevProps === undefined) {
      return false
    }
    if (this.state.id !== id) {
      this.setState({
        id: id,
        contents: []
      }, () => {
        this.props.getLeaf(id)
      })
    }

    if (prevProps.locale !== locale) {
      this.props.setIsLoading(true)
      window.location.reload()
      this.props.setLeaf(id, title, layouts, contents)
      this.props.getLeaf(id)
    }

    if (prevProps.leaf !== leaf ) {
      console.log('leaf updated')
      if (leaf.layouts) {
        this.setState({
          transition: 'none',
          title: JSON.parse(leaf.title),
          layouts: JSON.parse(leaf.layouts),
          contents: JSON.parse(leaf.contents)
        }, () => {
          setTimeout(() => {this.setState({transition: 'height, transform'})}, 500);

        })
      }

    }
    if (prevProps.currentBreakpoint !== currentBreakpoint) {
      this.setState({transition: 'height'});
      document.querySelector('#view-content').style.width = `${breakpoints[currentBreakpoint] + 100}px`
      window.dispatchEvent(new Event('resize'))
      console.log(currentBreakpoint)
      setTimeout(() => {
        this.setState({transition: 'height, transform'})
        this.setItemHeigth()
      }, 1000);
    }
  }

  onLayoutChange(layout, layouts) {
    console.log('layouts changed')
     this.setState({
        layouts: layouts
     }, () => {

     })
  }

  setItemHeigth(bool = 0) {
    bool++
    if (this.state.contents.length > 0) {
      const {leaf, currentBreakpoint} = this.props
      let {layouts} = this.state
      let index = 0, itemsToResize = [], itemsResizedDiff = [], translateY
      for (let item of document.querySelectorAll('.react-draggable')) {
        let mceBody = item.childNodes[0].childNodes[1]
        let mceBodyHeight = mceBody.clientHeight
        if (layouts[currentBreakpoint][index]) {
          if (Math.round(mceBodyHeight*.1) <= 20) {
            translateY = 28 - layouts[currentBreakpoint][index].h
            layouts[currentBreakpoint][index].h = 28
            let itemHeight = 280
            itemsToResize = [
              ...itemsToResize,
              {tag: item, height: itemHeight}
            ]
            itemsResizedDiff = [
              ...itemsResizedDiff,
              {tag: item, translateY: translateY}
            ]
          }
          else {
            translateY = (Math.round(mceBodyHeight*.1) + 8) - layouts[currentBreakpoint][index].h
            layouts[currentBreakpoint][index].h = Math.round(mceBodyHeight*.1) + 8
            let itemHeight = Math.round(mceBodyHeight) + 80
            itemsToResize = [
              ...itemsToResize,
              {tag: item, height: itemHeight}
            ]
            itemsResizedDiff = [
              ...itemsResizedDiff,
              {tag: item, translateY: translateY }
            ]
          }
        }
        index++
      }
      const _this = this
      console.log(itemsResizedDiff)
      Promise.all(itemsToResize.map((item) => {
          new Promise((resolve) => {
            item.tag.style.height = `${item.height}px`
          })
      })).then(() => {
        _this.setState({
          layouts: layouts
        }, () => {
          _this.translateY(itemsToResize, itemsResizedDiff)
          console.log('item resized')

        })
      })
    }
  }


  translateY(itemsToResize, itemsResizedDiff) {
    const {layouts} = this.state
    const {currentBreakpoint} = this.props
    const _this = this
    let itemsFocused = [], others = [], coor, x1, x2, x3, x4, h, y, itemsTranslated = [], itemsOrigin = [], minY = 0
    Promise.all(itemsResizedDiff.map((item, i) => {
        new Promise((resolve) => {
          if(item.translateY !== 0) itemsFocused = [...itemsFocused, i]
        })
    })).then(() => {

      itemsResizedDiff.map((item, index) => {
        itemsFocused.map((iIndex, i) => {
          coor = _this.getComputedTranslateXY(item.tag)
          x1 = layouts[currentBreakpoint][iIndex].x
          x2 = x1 + layouts[currentBreakpoint][iIndex].w
          x3 = layouts[currentBreakpoint][index].x
          x4 = x3 + layouts[currentBreakpoint][index].w

          // if(coor[1] !== 0) {
          //    console.log(x1, x2, x3, x4)
          //    console.log(x1 >= x3 && x2 <= x4)
          //    console.log(x1 > x3 && x2 > x4)
          //    console.log(x1 < x3 && x2 < x4)
          //    console.log(h > y)
          // }
          if(iIndex !== index) {
            if(layouts[currentBreakpoint][iIndex].y !== layouts[currentBreakpoint][index].y && ((x1 >= x3 && x2 <= x4) || (x1 > x3 && x1 < x4 && x2 > x4) || (x1 < x3 && x2 < x4 && x3 < x2))) {
              item.tag.style.background = getRandomColor()
              console.log(index)
              itemsTranslated = [...itemsTranslated, index]
              itemsResizedDiff.map((item, index) => {
                itemsTranslated.map((itemTranslated) => {
                  x1 = layouts[currentBreakpoint][itemTranslated].x
                  x2 = x1 + layouts[currentBreakpoint][itemTranslated].w
                  x3 = layouts[currentBreakpoint][index].x
                  x4 = x3 + layouts[currentBreakpoint][index].w
                  if(itemTranslated !== index) {
                    if(((x1 >= x3 && x2 <= x4) || (x1 > x3 && x1 < x4 && x2 > x4) || (x1 < x3 && x2 < x4 && x3 < x2))) {
                      itemsOrigin = [...itemsOrigin, {itemTranslated:itemTranslated, itemIndex:index}]

                    }
                  }
                })
                console.log(itemsOrigin)
                itemsOrigin.map((itemOrigin) => {
                  h = layouts[currentBreakpoint][itemOrigin.itemIndex].h
                  console.log(h)
                  if(minY < h) minY = h
                  console.log(minY)
                })

              })
              console.log(itemsResizedDiff[iIndex].translateY)
              if(itemsResizedDiff[iIndex].translateY < 0) {
                layouts[currentBreakpoint][index].y = minY
                item.tag.style.transform = `translateX(${coor[0]}px) translateY(${minY * 10}px)`
              }
              else {
                if(h > layouts[currentBreakpoint][index].y) {
                  layouts[currentBreakpoint][index].y = layouts[currentBreakpoint][index].y + itemsResizedDiff[iIndex].translateY
                  item.tag.style.transform = `translateX(${coor[0]}px) translateY(${layouts[currentBreakpoint][index].y * 10}px)`
                }
              }

            }
          }
        })

      })
    })
  }

  getComputedTranslateXY(obj) {
    const transArr = [];
      if(!window.getComputedStyle) return;
      const style = getComputedStyle(obj),
          transform = style.transform || style.webkitTransform || style.mozTransform || 'none';
      let mat = transform.match(/^matrix3d\((.+)\)$/);
      if(mat) return parseFloat(mat[1].split(', ')[13]);
      mat = transform.match(/^matrix\((.+)\)$/);
      mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
      mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;
      return transArr;
  }

  updateInput(index, name, inputContent) {
    let {contents, title, breakpoints, freezeUpdate, layouts} = this.state
    const {currentBreakpoint} = this.props
    if (name === 'title') {
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.translation')) return
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.addTitle')) return
      if (title) {
        title[`${this.props.locale}`] = inputContent
      } else {
        title = new Object()
        title[`${this.props.locale}`] = inputContent
      }
      this.setState({title: title})
    }
    if (name === 'content') {
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.draft')) return
      if (replaceHtmlEntities(inputContent) === I18n.t('app.newPage.translation')) return
      if (contents[index]) {
        contents[index][`${this.props.locale}`] = inputContent
      } else {
        if (freezeUpdate) {
          this.setState({freezeUpdate: false})
          return
        }
        contents[index] = new Object()
        contents[index][`${this.props.locale}`] = inputContent

      }
      this.setState({
        contents: contents
      }, () => {
        console.log('item updated')
        this.setItemHeigth()
      })

    }
  }

  onAddItem() {
    let layouts = this.state.layouts
    Object.keys(this.state.layouts).map((key, index) => {
      layouts[key] = [
        ...layouts[key],
        {
          "w": 2,
          "h": 28,
          "x": (layouts[key].length * 2 ) % this.state.cols[key],
          "y": 0,
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
    }, () => console.log('item added'))

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
      transition:'none',
      freezeUpdate: true,
      contents,
      layouts: layouts
    }, () => {
      this.onSetLeaf(false)
      this.setState({transition: 'height, transform'});
    })

  }

  onSetLeaf(bool) {
    this.props.setIsLoading(bool)
    const { match: { params : {id} }, getLeaf, setLeaf, setCurrentBreakpoint, currentBreakpoint} = this.props
    let {title, layouts, contents, breakpoints} = this.state
    setLeaf(id, title, layouts, contents)

  }


  gridItemFocus (index) {
    this.setState({focused: index})
  }

  changeBreakpoint (breakpoint) {
    console.log(breakpoint)
    this.props.setCurrentBreakpoint(breakpoint)
  }

  checkAllBreakpointAndUpdate() {
    const {layouts} = this.state
    for(let i = 0; i < Object.keys(layouts).length; i++){
        setTimeout(() => {
            console.log(Object.keys(layouts)[i], i);
          this.props.setCurrentBreakpoint(Object.keys(layouts)[i])
        }, i * 2000)
    }
  }

  render() {
    const {layouts, cols, breakpoints, checkedViews, title, scrolled, contents, focused, alerts} = this.state
    const {locale, leaf, currentBreakpoint} = this.props
    const { match: { params : {id} }, getLeaf, setLeaf} = this.props
    return (
      this.state.initDone &&
      <Fragment>
            <div className="grid-layouts-container">
              <header className="header-viewer">
                <h2>{I18n.t('app.newPage.title') || ''}</h2>
                <button className="add-btn" onClick={this.onAddItem} data-tip="React-tooltip">
                   <Add />
                   <ReactTooltip place="bottom" type="dark" effect="solid"/>
                </button>
                <button className="refresh-btn" onClick={(title, layouts, contents) => this.checkAllBreakpointAndUpdate()}>
                  <Refresh/>
                </button>
                <button className="refresh-btn" onClick={() => this.onSetLeaf(true)}>
                  <Refresh/>
                </button>
                <h3>{I18n.t('app.newPage.resolutions')}</h3>
                  { Object.entries(breakpoints).map((breakpoint, key) => {
                    return  (
                      <button
                        className={currentBreakpoint === `${breakpoint[0]}` ? `btn-focused ${breakpoint[0]}` : `${breakpoint[0]}` }
                        key={key}
                        onClick={() => this.changeBreakpoint(breakpoint[0], breakpoint[1])}>
                        <DesktopWindows/>{breakpoint[1]}
                        {checkedViews ? checkedViews[`${breakpoint[0]}`] ? <Done/> : null : null}
                        {currentBreakpoint === `${breakpoint[0]}` ? <Spinner isLoading={true} width={`20px`}/> : null}
                      </button>
                    )
                  }) }
              </header>
              <header className="header-grid-layout-container">
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
                  isDraggable= {true}
                  useCSSTransforms={true}
                  draggableCancel=".mce-content-body"
                  cols={cols}
                  breakpoints={breakpoints}
                  layouts={layouts}
                  onLayoutChange={(layout, layouts) =>
                    this.onLayoutChange(layout, layouts)}
                  onDragStart={() => console.log('????')}
                  >
                  {currentBreakpoint ? layouts[currentBreakpoint].map((layout, index) =>
                    {
                      return(
                      <div
                        className={focused === index ? "focused" : null}
                        key={layout.i}
                        data-grid={{x: layout.x , y: layout.y, w: layout.w,  h: layout.h}}>
                        <div className='item'>
                          <div className="remove">
                            <DeleteOutlined fontSize="small" onClick={this.onRemoveItem.bind(this, index)}/>
                            {layout.h}<br/>
                            {layout.y}<br/>
                            {layout.i}
                          </div>
                          <TinyEditor
                              setItemHeigth={this.setItemHeigth}
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

            .react-grid-item.cssTransforms {
              transition-duration: 500ms;
              transition-property: ${this.state.transition};
              transition-timing-function: linear;
            }

            .react-grid-item.resizing {
              z-index: 1;
              will-change: width, height;
              transition: none;
            }

            .react-grid-item.react-draggable-dragging {
              transition-duration: 500ms;
              transition-property:  transform;
              transition-timing-function: linear;
              z-index: 3;
              will-change: transform;
            }

            .react-grid-item {
              cursor: grab;
              &.focused {
                .item {
                  border: 2px dashed rgba(0,0,0,.1);
                }
              }

              .item {
                background: ${styles.mceBackground};
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
