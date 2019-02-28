import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ResultsActions from '@/store/actions/results';
import * as LoginActions from '@/store/actions/signIn';
import ParallaxComponent from '@/components/ParallaxComponent'

class Results extends React.Component {
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
    if (this.props.staticContext && this.props.staticContext.results) {
      console.log('.?...')
      this.props.setResults(this.props.staticContext.results);
    } else {
    }

  }

  setCSS(styles) {
    console.log(styles, typeof styles)
    this.setState({
       styles: styles
    })
  }

  render() {
    return (
      this.state.initDone &&
      <Fragment>
        <ParallaxComponent/>
          <ul>
            {this.props.results.map((result, index) => <li key={index} dangerouslySetInnerHTML={{__html: result.id + '' + result.title}}/>)}
          </ul>
          <style jsx global>{`
             main {
               background: ${this.state.styles.mceBackground} !important;
             }
          `}</style>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({results: state.results, auth: state.auth});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators(ResultsActions, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Results);
