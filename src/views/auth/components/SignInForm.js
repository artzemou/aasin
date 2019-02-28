import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as SignInActions from '@/store/actions/signIn';
import {bindActionCreators} from 'redux';
import FormErrors from '@/views/auth/components/FormErrors'
import styles from '@/assets/css/styles'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        errors: []
    }
    this.checkForm = this.checkForm.bind(this)
    this.validEmail = this.validEmail.bind(this)
  }

  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem('auth'))
    if (auth) {
      this.setState({
        email: auth.email,
        password: auth.password
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      errors: [...nextProps.auth.errors]
    })
  }

  checkForm (e) {
    e.preventDefault()
    let {email, password, passwordConfirm, errors} = this.state
    let errorsList = []
    console.log(!email, !password)
    if(!email) {
      errorsList = [
        ...errorsList, 'Email obligatoire.'
      ]
    } else if(!this.validEmail(email)) {
      errorsList = [
        ...errorsList, 'Format email invalide.'
      ]
    }
    if(!password) {
      errorsList = [
        ...errorsList, 'Mot de passe obligatoire.'
      ]
    }
    if(!errorsList.length){
      sessionStorage.setItem('auth', JSON.stringify(this.state));
      this.props.signIn(email, password)
    }
    this.setState({
      errors: [ ...errorsList ]
    })
  }

  validEmail (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }

  render() {
    let {email, password, errors} = this.state
    return (
      <Fragment>
        <form>
          <div className="alert__msg">
            {errors.map((error, index) => (<FormErrors key={index} error={error}/>))}
          </div>
          <input type="text" value={email} onChange={(e) => this.setState({email: e.target.value})}  placeholder="Votre email"/>
          <input type="password" value={password} onChange={(e) => this.setState({password: e.target.value})}  placeholder="Votre mot de passe"/>
          <button onClick={(e) => this.checkForm(e)} >Connexion</button>
          <a href="/signUp">Créer un compte</a>
        </form>
        <style jsx>{`
          form{
            max-width: 300px
          }
        `}</style>
      </Fragment>

    )
  }
}


const mapStateToProps = (state) => ({auth: state.auth});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators(SignInActions, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(LoginForm);
