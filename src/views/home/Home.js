import React, {Fragment} from 'react'
import ColorPicker from '@/views/admin/components/ColorPicker'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false,
      styles: {}
    }
    this.setCSS = this.setCSS.bind(this)
  }

  componentDidMount() {
    this.setState({
      initDone: true
    })
  }

  setCSS(styles) {
    this.setState({
       styles: styles
    })
  }

  render() {
    return (
      this.state.initDone &&
      <Fragment>
        <ColorPicker {...this.props} setCSS={this.setCSS} element={this.constructor.name}/>
        <style jsx global>{`
           main {
             background: ${this.state.styles.background} !important;
           }
        `}</style>
      </Fragment>
    )
  }
}

export default Home
