import React from 'react'
/*
email password and password confirmation fields are all filled in. 
The email field must have exactly one @ sign in it. 
The password must have eight or more characters in it. 
The password and the password confirmation field must be the same. 
And if any of these conditions aren't met, you should display an error message. 
If they're all met, instead, display a success message. 
If the user fits all of the criteria, the user interface should say something like user created. If instead they don't meet validation, they should get the error messages displayed on the page. Now, we'll go ahead and pause, work through the challenge, and then come back. We'll go over the solution together. (upbeat music) Welcome back. The first thing that I'm going to do is create a function that fires when the form is*/

class ErrorMsg extends React.Component {
  render() {
    return (
      <div className='errorMsg'>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
  }
  handleInputChange = (syntheticEvent) => {
    const inputName = syntheticEvent.target.name;
    const inputValue = syntheticEvent.target.value;
    this.props.validate(inputValue);
    this.props.handleInputChange(inputName, inputValue);
  }
  render() {
    return (
      <div>
        <input
          type={this.props.inputType}
          name={this.props.inputName}//'email'
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
class FormValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      errorMsg: ''
    }
    this.errors = {
      email: true,
      password: true,
      passwordConfirm: true
    }
  }
  handleInputChange = (inputName, inputValue) => {
    this.setState({
      [inputName]: inputValue
    });
  }
  handleSubmit = (syntheticEvent) => {
    syntheticEvent.preventDefault();
    this.validateSubmit();
    this.printForm();
  }
  printForm = () => {
    console.log(this.state);
  }
  // validations
  validateSubmit = () => {
    if (this.errors.email || this.errors.password || this.errors.passwordConfirm) {
      alert('Please correct the form and submit again.');
    } else {
      alert('Form submited.');
    }
  }
  validateEmail = (email) => {
    var isValid = /.+@.+\..+/.test(email);
    if (!isValid) {
      this.setState({
        errorMsg: 'Invalid email.'
      });
    } else {
      this.setState({
        errorMsg: ''
      });
    }
    this.errors.email = !isValid;
  }
  validatePassword = (password, isConfirm) => {
    var isValid = password.length >= 8;
    if (!isValid) {
      this.setState({
        errorMsg: 'Invalid password.'
      });
      if (isConfirm) {
        this.errors.passwordConfirm = !isValid;
      } else {
        this.errors.password = !isValid;
      }
    } else {
      this.setState({
        errorMsg: ''
      });
    }
  }
  validatePasswordConfirm = (passwordConfirm) => {
    this.validatePassword(passwordConfirm, true);
    if (this.state.password !== passwordConfirm) {
      this.setState({
        errorMsg: 'Password confirmation and password do match.'
      });
    } else {
      this.setState({
        errorMsg: ''
      });
    }
  }
  render() {
    const formValidatorJsx = (
      <form onSubmit={this.handleSubmit}>
        <ErrorMsg message={this.state.errorMsg} />
        <h2>Sign Up!</h2>
        <label htmlFor='email'>Email</label>
        <ValidatedInput
          inputType='text'
          inputName='email'
          handleInputChange={this.handleInputChange}
          validate={this.validateEmail}
        />
        <label htmlFor='password'>Password</label>
        <ValidatedInput
          inputType='password'
          inputName='password'
          handleInputChange={this.handleInputChange}
          validate={this.validatePassword}
        />
        <label htmlFor='password-confirm'>Confirm Password </label>
        <ValidatedInput
          inputType='password'
          inputName='passwordConfirm'
          handleInputChange={this.handleInputChange}
          validate={this.validatePasswordConfirm}
        />
        <input type='submit' value='Submit' />
      </form>

    );
    return formValidatorJsx;
  }
}
export default FormValidator;