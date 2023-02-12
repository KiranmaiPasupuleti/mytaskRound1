import {Component} from 'react'
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
        <form onSubmit={this.onSubmitCreateMaster}>
          <div>
            <label htmlFor="master-username">Username</label>
            <input
              onChange={this.onChangeMasterUser}
              type="text"
              id="master-username"
            />
          </div>
          <div>
            <label htmlFor="password-master">Password</label>
            <input
              onChange={this.onChangeMasterPassword}
              id="password-master"
              type="password"
            />
          </div>
          <button type="submit">Create Master Account</button>
        </form>
      </div>
    )
  }
}

export default MasterCreateAccount
