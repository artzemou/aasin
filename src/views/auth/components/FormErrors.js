import React, {Fragment, Component} from 'react';
import styles from '@/assets/css/styles'

class FormsErrors extends Component {
  render() {
    const {error} = this.props
    return(
      <Fragment>
        <div className="error">{error}</div>
      </Fragment>
    )
  }
}

export default FormsErrors;
