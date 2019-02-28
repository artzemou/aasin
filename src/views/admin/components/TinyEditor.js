import React, {Fragment} from 'react'
import { Editor } from '@tinymce/tinymce-react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as LoadingActions from '@/store/actions/isLoading'

import styles from '@/assets/css/styles'

class TinyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      arrowPos: null,
      memuPanelTopPosition: null,
      memuPanelLeftPosition: null,
      mcePanelId: null,
      mcePanelEmement: null,
      mceArrowDown: false
    }

    this.handleEditorChange = this.handleEditorChange.bind(this)
  }

  handleOnBlur() {
    this.props.gridItemFocus(null)
    if (document.querySelector('.mce-panel')) {
      if (document.querySelector('.mce-tinymce-inline')) {
        document.querySelector('.mce-tinymce-inline').classList.remove('visible')
        document.querySelector('.mce-tinymce-inline').parentNode.removeChild(document.querySelector('.mce-panel'))
      }
    }

  }

  handleOnClick(index) {
    this.props.gridItemFocus ? this.props.gridItemFocus(index) : null
    if (document.querySelector('.mce-panel')) {
      if (document.querySelector('.mce-tinymce-inline')) {
        document.querySelector('.mce-tinymce-inline').classList.remove('visible')
        document.querySelector('.mce-tinymce-inline').parentNode.removeChild(document.querySelector('.mce-panel'))
      }
    }
  }

  handleOnDblclick(e) {
    if (document.querySelector('.mce-panel')) {
      this.setState({memuPanelLeftPosition: null})
      if (document.querySelector('.mce-tinymce-inline')) {
        document.querySelector('.mce-tinymce-inline').classList.remove('visible')
        document.querySelector('.mce-tinymce-inline').parentNode.removeChild(document.querySelector('.mce-panel'))
      }
    }

    let {mcePanelEmement, mcePanelId, x, y, mceArrowDown} = this.state
    setTimeout(() => {
      if (document.querySelector('.mce-tinymce-inline')) {
        let element = document.querySelector('.mce-tinymce-inline')
        let main = document.querySelector('main')
        let sidebar = document.querySelector('#side-bar')
        let headerViewerHeight = document.querySelector('.header-grid-layout-container').getBoundingClientRect().height + document.querySelector('.header-viewer').getBoundingClientRect().height
        let viewerWidth = main.clientWidth
        let navOffsetLeft = sidebar.offsetLeft + sidebar.clientWidth
        let memuPanelTopPosition = parseFloat(element.style.top) + main.scrollTop
        let memuPanelLeftPosition = element.offsetLeft - navOffsetLeft - parseFloat(window.getComputedStyle(main).marginLeft)
        let arrowPos = 20
        if (memuPanelLeftPosition + element.getBoundingClientRect().width > viewerWidth) {
          memuPanelLeftPosition = memuPanelLeftPosition  - (memuPanelLeftPosition  + element.getBoundingClientRect().width - viewerWidth)
        }
        arrowPos = e.screenX - memuPanelLeftPosition - navOffsetLeft - 80
        if (element.classList.contains('mce-arrow-right')) element.classList.remove('mce-arrow-right')
        if (element.classList.contains('mce-arrow-left')) element.classList.remove('mce-arrow-left')
        if (element.classList.contains('mce-arrow-down')) memuPanelTopPosition += 80
        else if (!element.classList.contains('mce-arrow-up')) memuPanelTopPosition += 30
        this.setState({
          mcePanelId: element.getAttribute('id'),
          memuPanelLeftPosition: memuPanelLeftPosition,
          memuPanelTopPosition: memuPanelTopPosition,
          arrowPos: arrowPos,
          mcePanelEmement: element
        })
        document.querySelector('.mce-tinymce-inline').parentNode.removeChild(document.querySelector('.mce-panel'))
        document.querySelector('main').appendChild(element)
        element.classList.add('visible')

      } else if (mcePanelEmement) {
        document.querySelector('main').appendChild(mcePanelEmement)
        let element = document.querySelector('.mce-tinymce-inline')
        let main = document.querySelector('main')
        let sidebar = document.querySelector('#side-bar')
        let headerViewerHeight = document.querySelector('.header-grid-layout-container').getBoundingClientRect().height + document.querySelector('.header-viewer').getBoundingClientRect().height
        let viewerWidth = main.clientWidth
        let navOffsetLeft = sidebar.offsetLeft + sidebar.clientWidth
        let memuPanelTopPosition = parseFloat(element.style.top)  + main.scrollTop
        let memuPanelLeftPosition = element.offsetLeft - navOffsetLeft - parseFloat(window.getComputedStyle(main).marginLeft)
        let arrowPos = 20
        if (memuPanelLeftPosition + element.getBoundingClientRect().width > viewerWidth) {
          memuPanelLeftPosition = memuPanelLeftPosition  - (memuPanelLeftPosition  + element.getBoundingClientRect().width - viewerWidth)
        }
        arrowPos = e.screenX - memuPanelLeftPosition - navOffsetLeft - 80
        if (element.classList.contains('mce-arrow-right')) element.classList.remove('mce-arrow-right')
        if (element.classList.contains('mce-arrow-left')) element.classList.remove('mce-arrow-left')
        if (element.classList.contains('mce-arrow-down')) memuPanelTopPosition += 80
        else if (!element.classList.contains('mce-arrow-up')) memuPanelTopPosition += 30
        this.setState({
          mcePanelId: element.getAttribute('id'),
          mcePanelEmement: element,
          memuPanelLeftPosition: memuPanelLeftPosition,
          memuPanelTopPosition: memuPanelTopPosition,
          arrowPos: arrowPos
        })
        document.querySelector('.mce-tinymce-inline').parentNode.removeChild(document.querySelector('.mce-panel'))
        document.querySelector('main').appendChild(element)
        element.classList.add('visible')
      }
    }, 250)

  }

  handleEditorChange(content) {
    console.log('editor changed')
    const {index, name, updateInput} = this.props
    updateInput(index, name, content)
  }

  handleonMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY })
  }

  render() {
    const {content, index, i18n} = this.props
    const { x, y } = this.state;
    const path ='/public/langs/'+ i18n.locale +'.js'
    return (
      <Fragment>
        <Editor
          id={index.toString()}
          apiKey="p5t98x5vqdbfs0hiit7iwz9u29u82f2oj8gfv5b7bm650kdl"
          value={content}
          initialValue={this.props.initialValue || null}
          init={{
            theme: 'inlite',
            language_url: `/public/langs/${i18n.locale}.js`,
            plugins: ['image table link paste textpattern autolink', 'code', 'textcolor'],
            // insert_toolbar: 'quickimage',
            selection_toolbar: 'quickimage | link | bold italic | alignleft aligncenter alignright alignjustify | fontsizeselect fontselect',
            inline: true,
            paste_data_images: true,
            // init_instance_callback : this.initInstance,
            browser_spellcheck : false,
            force_br_newlines : false,
            force_p_newlines : true,
            forced_root_block : 'p',
            // powerpaste_word_import: 'merge',
            // powerpaste_html_import: 'merge',
            font_formats:
                "Muli=Muli, sans-serif;"+
                "Comic Sans MS=comic sans ms,sans-serif;"+
                "Tahoma=tahoma,arial,helvetica,sans-serif;"+
                "Symbol=symbol;"+
                "Andale Mono=andale mono,times;"+
                "Helvetica=helvetica;"
            // onDblclick: this.handleOnDblclick(index)
          }}
          onEditorChange={this.handleEditorChange}
          onFocus={() => this.handleOnClick(index)}
          onDblclick={(e) => this.handleOnDblclick(e)}
          onMouseMove={(e) => this.handleonMouseMove(e)}
          onBlur={() => this.handleOnBlur()}
          onPaste={() => this.props.setItemHeigth()}

        />

        <style jsx global>{`

          html, body{
            .mce-panel{
              background: ${styles.mceBackground};
              opacity: 0;
              transition: opacity 0 linear 500ms;
              .mce-btn{
                background: ${styles.primaryColor};
              }
              &.mce-foot {
                opacity: 1;
                .mce-btn {
                  color: #595959;
                  background: transparent;
                  border-color: #c5c5c5;
                }
              }
            }
            .mce-arrow{
                &:after{
                  opacity: 0;
                }
                &:before{
                  opacity: 0;
                }
            }

            .mce-btn{
              &.mce-active {
                  box-shadow: none;
                  background: rgba(0,0,0,0.1);
                  color: #595959;
                  border-color: transparent;
                  &.mce-active{
                    button, i{
                      color: #595959;
                    }
                    &:hover, &:focus, &:active{
                      box-shadow: none;
                      background: rgba(0,0,0,0.1);
                      color: #595959;
                      border-color: transparent;
                      i{
                        border-top-color: #b5bcc2;
                      }
                    }
                  }
              }

            }

            .mce-menu-item{
              &.mce-active{
                &.mce-menu-item-normal{
                  background: rgba(0,0,0,0.1);
                  .mce-text, .mce-ico{
                    color: #595959;
                  }
                }
              }
            }
          }
        `}</style>
        <style jsx global>{`
          html, body{
            .mce-tinymce-inline{
              &.visible{
                top: ${this.state.memuPanelTopPosition}px !important;
                left: ${this.state.memuPanelLeftPosition}px !important;
                display: block !important;
                opacity: 1;
              }
            }

            .mce-arrow{
                &.visible{
                  &:after{
                    opacity: 1;
                    left: ${this.state.arrowPos > 20 ?  this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20 }px;
                    top: -8px;
                    border-bottom-color: rgb(238, 238, 238);
                    border-bottom-color: ${styles.mceBackground};
                    border-width: 0 8px 8px;
                    margin-left: -8px;

                  }
                  &:before{
                    opacity: 1;
                    left: ${this.state.arrowPos > 20 ?  this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20 }px;
                    top: -9px;
                    border-top-color: rgb(238, 238, 238);
                    border-bottom-color: #c5c5c5;
                    border-width: 0 9px 9px;
                    margin-left: -9px;
                  }
                }
            }
          }

        `}</style>
      </Fragment>

    );
  }
}

const mapStateToProps = (state) => ({...state});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...LoadingActions}, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(TinyEditor);
