import React, {Fragment}  from 'react';
import {Link, Route, withRouter, Redirect} from 'react-router-dom';
import Home from '@/views/home/Home';
import Results from '@/views/results';
import SignIn from '@/views/auth/SignIn';
import SignUp from '@/views/auth/SignUp';
import Dashboard from '@/views/admin/Dashboard';
import CreateNewPage from '@/views/admin/components/CreateNewPage';
import Swiper from '@/views/Swiper';
import LeavesList from '@/views/admin/components/LeavesList';
import NewPage from '@/views/admin/components/NewPage';
import Page from '@/views/page/Page';

import {connect} from 'react-redux';

class PrivateRoute extends React.Component {

  render() {
    const {isSignedIn, component, path} = this.props
    if (isSignedIn) {
      return(
        <Route path={path} component={component}/>
      )
    } else {
      return(
        <Route path="/dashboard" component={Results}/>
      )
    }
  }
}

class Router extends React.Component {

  render() {
    const {isSignedIn, isAdmin} = this.props.auth
    return (
      <Fragment>
        <Route exact path="/" render={(props) => (<Home {...props} setCSS={this.setCSS}/>)}/>
        <Route path="/results" component={Results}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/swiper" component={Swiper}/>
        <Route path="/dashboard" render={() => (
          isAdmin ? (
            <Dashboard/>
          ) : (
            <p>Accès reservé</p>
          )
        )}/>
        <Route path="/newLeaf" component={CreateNewPage}/>
        <Route path="/deletePage" component={LeavesList}/>
        <Route path={`/page/:id`} render={(props) => (
          isAdmin ? (
            <NewPage {...props}/>
          ) : (
            <Page {...props}/>
          )
        )}/>
        <Route path="/designModification" component={Results}/>
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => ({auth: state.auth});

export default withRouter(connect(mapStateToProps) (Router))
