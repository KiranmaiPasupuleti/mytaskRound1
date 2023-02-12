import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MasterCreateAccount extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeMasterUser = event => {
    this.setState({username: event.target.value})
  }

  onChangeMasterPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitCreateMaster = event => {
    event.preventDefault()
    const {password, username} = this.state
    const masterSignUpDetails = {
      username,
      password,
    }
    const stringifiedMasterSignUpDetails = JSON.stringify(masterSignUpDetails)
    localStorage.setItem('masterDetails', stringifiedMasterSignUpDetails)
  }

  render() {
    const {username, password} = this.state
    console.log(username, password)
    return (
      <div className="master-create-account-container">
        <h1 className="student-signup-heading">Master SignUp</h1>
        <form
          className="master-create-account"
          onSubmit={this.onSubmitCreateMaster}
        >
          <div className="input-container-username-master">
            <label htmlFor="master-username">Username</label>
            <input
              value={username}
              onChange={this.onChangeMasterUser}
              type="text"
              id="master-username"
            />
          </div>
          <div className="input-container-username-master">
            <label htmlFor="password-master">Password</label>
            <input
              value={password}
              onChange={this.onChangeMasterPassword}
              id="password-master"
              type="password"
            />
          </div>
          <div className="master-account-btn">
            <button className="master-create-btn" type="submit">
              Create Account
            </button>
          </div>
        </form>

        <Link to="/master-login">
          <button className="master-back" type="button">
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default MasterCreateAccount
