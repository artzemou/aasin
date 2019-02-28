import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';

import { CompactPicker, MaterialPicker,  AlphaPicker, ChromePicker} from 'react-color';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as SetStylesAction from '@/store/actions/setStyles'
import * as GetStylesAction from '@/store/actions/getStyles'
import { withRouter } from 'react-router';
import {Brush} from '@material-ui/icons'
import styles from '@/assets/css/styles'

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      displayColorPicker: false
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    console.log(this.props.location.pathname.replace('/', ''))
    this.props.getStyles(this.props.element)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.styles !== this.props.styles && this.props.styles) {
      this.setState({styles: JSON.parse(this.props.styles.styles)})
    }
    if(prevState.styles !== this.state.styles) {
      this.props.setCSS(JSON.parse(this.props.styles.styles))
    }
  }

  handleChangeComplete(color) {
    this.props.setCSS({ ...this.state.styles, background: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`})
    this.props.setStyles(this.props.styles.id || null, this.props.element, { ...this.state.styles, background: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`})
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose() {
    this.setState({ displayColorPicker: false })
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return(
      <Fragment>
        <div className="color-picker">
          <button onClick={ this.handleClick }><Brush/></button>
          { this.state.displayColorPicker ? <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
              <ChromePicker onChangeComplete={this.handleChangeComplete} />
            </div> : null }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({styles: state.styles})
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...SetStylesAction, ...GetStylesAction }, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps) (ColorPicker);
