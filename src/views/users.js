import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as UsersActions from '../actions/users';
import {bindActionCreators} from 'redux';
import ParallaxComponent from '@/components/ParallaxComponent'
import SwiperComponent from '@/components/SwiperComponent'
import TinyEditor from '@/views/admin/components/TinyEditor'


class Users extends React.Component {

    componentDidMount() {
        if (this.props.staticContext && this.props.staticContext.users) {
            this.props.setUsers(this.props.staticContext.users);
        } else {
            this.props.loadUsers();
        }
    }

    render() {
      console.log(this.props.users)
        return (
          <Fragment>
            <ParallaxComponent/>
            <SwiperComponent/>
              <h3>Users: </h3>
              {this.props.users.length > 0
                  ? <ul>
                      {this.props.users.map(user => <li key={user.id}>{user.login}</li>)}
                  </ul>
                  : <Fragment>No users</Fragment>
              }
          </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({users: state.users});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Users);
