import React, { Component } from 'react';
import axios from 'axios';
import './registration.css'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      confirmpassword: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        confirmpassword: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        if (value == '') errors.fullName = 'Login is required';
        else if (value.length >= 1 && value.length < 5) errors.fullName = 'Login must be 5 characters long';
        else errors.fullName = '';
          // value.length < 5
          //   ? 'Full Name is required and must be 5 characters long!'
          //   : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
      case 'confirmpassword':
          errors.confirmpassword =
            value != this.state.password
            ? "Password doesn't match"
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      const data = {login: this.state.fullName, password: this.state.password, email: this.state.email};
      axios({
        method: 'post',
        url: 'api/user/add',
        data: data
      });
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Registration</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Login</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              <div />
              {errors.fullName.length > 0 &&
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              <div />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              <div />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='confirmpassword'>
              <label htmlFor="confirmpassword">Re-enter password</label>
              <input type='password' name='confirmpassword' onChange={this.handleChange} noValidate />
              <div />
              {errors.confirmpassword.length > 0 &&
                <span className='error'>{errors.confirmpassword}</span>}
            </div>
            <div className='submit'>
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
