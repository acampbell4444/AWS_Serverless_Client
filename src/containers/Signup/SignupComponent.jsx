import React, { Component }                                 from 'react'
import { withRouter }                                       from 'react-router'
import { Button }         from 'react-bootstrap'
import { Field }                                            from 'redux-form'

import './Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      newUser: null
    };
  }

  validateForm() {
    const { email, password, passowrdConfirmation } = this.props
    return (
      email.length > 0 &&
      password.length > 0 &&
      password === passowrdConfirmation
    );
  }

  validateConfirmationForm() {
    return this.props.confirmCode.length > 0;
  }


  renderConfirmationForm() {
    const { confirmCode, history, newUserSignedUp, handleConfirmationSubmit, signupErrorMessage, updateSignupErrors, isLoading } = this.props
    return (
      <div className="Login">
        <form onSubmit={e => handleConfirmationSubmit(e, newUserSignedUp, confirmCode, history)}>
            <label>Confirmation Code</label>
            <Field 
              name="confirmCode" 
              type="tel"
              label='Confirmation Code'
              component={renderField}
              onFocus={e => signupErrorMessage ? updateSignupErrors('') : null }
              //validate={ [maxLength15, required, noRepeatUserName] }
            />
            <p>Please check your email for the code.</p>
          <Button
            block
            disabled={!this.validateConfirmationForm()}
            type='submit'
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <div>
                Confirm
              </div>
            )}
          </Button>
        </form>
        {signupErrorMessage&&(
          <div className='loginErrorAlert'>
            <div className="alert alert-danger" role="alert">
              {signupErrorMessage}
            </div>
          </div>
        )}
      </div>
    );
  }

  renderForm() {
    const { handleSignupSubmit, email, password, history, signupErrorMessage, updateSignupErrors, isLoading } = this.props

    return (
      <div className="Login">
        <form onSubmit={e => handleSignupSubmit(e, email, password, history)}>
          <label>Email</label>
          <Field 
            name="email" 
            type="email"
            label='email'
            component={renderField}
            onFocus={e => signupErrorMessage ? updateSignupErrors('') : null }
            //validate={ [maxLength15, required, noRepeatUserName] }
          />

          <label>Password</label>
          <Field 
            name="password" 
            type="password"
            label='password'
            component={renderField}
            onFocus={e => signupErrorMessage ? updateSignupErrors('') : null }
            //validate={ [maxLength15, required, noRepeatUserName] }
          />

          <label>Confirm Password</label>
          <Field 
            name="confirmPassword" 
            type="password"
            label='confirmPassword'
            component={renderField}
            onFocus={e => signupErrorMessage ? updateSignupErrors('') : null }
            //validate={ [maxLength15, required, noRepeatUserName] }
          />

          <Button
            block
            disabled={!this.validateForm()}
            type='submit'
            text='Signup'
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              <div>
                Confirm
              </div>
            )}
          </Button>

        </form>

        {signupErrorMessage&&(
          <div className='loginErrorAlert'>
            <div className="alert alert-danger" role="alert">
              {signupErrorMessage}
            </div>
          </div>
        )}

      </div>
    );
  }

  render() {
    return (
      <div className='Signup'>
        {!this.props.newUserSignedUp
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div >
    <input className='form-control loginput'{...input} placeholder={label} type={type}/>  
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export default withRouter(Signup)
