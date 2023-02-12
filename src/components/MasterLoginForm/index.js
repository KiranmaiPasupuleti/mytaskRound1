import {Link} from 'react-router-dom'
import {Component} from 'react'

// import MasterPage from '../MasterPage'

import './index.css'

class MasterLoginForm extends Component {
  state = {
    userName: '',
    paswrd: '',
    errorMessage: false,
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({paswrd: event.target.value})
  }

  onSubmitMasterLogin = event => {
    event.preventDefault()
    const {paswrd, userName} = this.state
    const userLoginDetails = localStorage.getItem('masterDetails')
    console.log(userLoginDetails)
    const parsedLoginDetails = JSON.parse(userLoginDetails)
    const {username, password} = parsedLoginDetails

    if (username === userName && password === paswrd) {
      const {history} = this.props
      history.push('/master-page')
    } else {
      this.setState({errorMessage: true})
    }
  }

  render() {
    const {userName, paswrd, errorMessage} = this.state
    return (
      <div className="master-login-container">
        <h1 className="master-login-heading">Master Login</h1>
        <form className="form-container" onSubmit={this.onSubmitMasterLogin}>
          <div className="username-container">
            <label htmlFor="username">UserName</label>
            <input
              onChange={this.onChangeUsername}
              className="input-username"
              id="username"
              type="text"
              value={userName}
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChangePassword}
              className="input-password"
              id="password"
              type="password"
              value={paswrd}
            />
          </div>

          {errorMessage && (
            <p className="master-error-login">
              *Provide Valid Username & password
            </p>
          )}

          <div className="btn-container">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
        <Link to="/master-signup">
          <p className="create-master-account">create account</p>
        </Link>
      </div>
    )
  }
}

export default MasterLoginForm
