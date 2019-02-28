import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as DeleteLeaf from '@/store/actions/deleteLeaf'
import * as LeavesActions from '@/store/actions/getLeaves'

import {I18n} from 'react-redux-i18n'
import {Delete} from '@material-ui/icons'
import styles from '@/assets/css/styles'

class LeavesList extends Component {
  componentDidMount() {
    this.props.getLeaves()
  }

  render() {
    const {leaves, locale} = this.props
    return(
      <Fragment>
        {leaves.map((leaf, index) => (
          <li key={index}>
            <div className="remove">
              <Delete onClick={() => this.props.deleteLeaf(leaf.id)}/>
            </div>
            <span dangerouslySetInnerHTML={{__html: JSON.parse(leaf.title) ? JSON.parse(leaf.title).hasOwnProperty(`${locale}`) ? JSON.parse(leaf.title)[`${locale}`] : I18n.t('app.nav.translation') : I18n.t('app.nav.addTitle')}}/>
          </li>
        ))}
      <style jsx>{`
        li {
          position: relative;
          .remove{
            position: absolute;
            right: 1.5rem;
            top: 1.5em;
            z-index: 1;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.26);
          }
        }
      `}</style>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({leaves: state.leaves, locale: state.i18n.locale})
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...LeavesActions, ...DeleteLeaf}, dispatch)

export default connect(mapStateToProps, mapActionCreatorsToProps) (LeavesList)
