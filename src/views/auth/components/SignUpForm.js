import React, {Fragment} from 'react'
import FormErrors from '@/views/auth/components/FormErrors'
import {connect} from 'react-redux';
import * as SignUpActions from '@/store/actions/signUp';
import {bindActionCreators} from 'redux';
import styles from '@/assets/css/styles'

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: []
    }

    this.checkForm = this.checkForm.bind(this)
    this.validEmail = this.validEmail.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      errors: [...nextProps.signUpState.accountStatus]
    })

  }

  checkForm (e) {
    e.preventDefault()
    let {firstName, name, email, password, passwordConfirm, errors} = this.state
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
    if(password !== passwordConfirm) {
      errorsList = [
        ...errorsList, 'Confirnation du mot de passe incorrecte.'
      ]
    }
    if(!errorsList.length){
      sessionStorage.setItem('auth', JSON.stringify(this.state));
      this.props.signUp(firstName, name, email, password)
    }
    this.setState({
      errors: [ ...errorsList ]
    })
  }

  validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  render() {
    let {firstName, name, email, password, passwordConfirm, errors} = this.state
    return (
      <Fragment>
        <form>
          <div className="alert__msg">
            {errors.map((error, index) => (<FormErrors key={index} error={error}/>))}
          </div>
          <input type="text" value={firstName} onChange={(e) => this.setState({firstName: e.target.value})}  placeholder="Votre prénom"/>
          <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})}  placeholder="Votre nom"/>
          <input type="text" value={email} onChange={(e) => this.setState({email: e.target.value})}  placeholder="Votre email"/>
          <input type="password" value={password} onChange={(e) => this.setState({password: e.target.value})}  placeholder="Votre mot de passe"/>
          <input type="password" value={passwordConfirm} onChange={(e) => this.setState({passwordConfirm: e.target.value})}  placeholder="Confirmez le mot de passe"/>
          <button onClick={(e) => this.checkForm(e)} >Créer un compte</button>
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
const mapStateToProps = (state) => ({signUpState: state.signUpState});
const mapActionCreatorsToProps = (dispatch) => bindActionCreators({...SignUpActions}, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(SignInForm);
