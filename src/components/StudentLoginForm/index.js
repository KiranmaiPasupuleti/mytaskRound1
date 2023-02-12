import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class StudentLoginForm extends Component {
  state = {
    studentuserName: '',
    studentpaswrd: '',
    errorMsg: false,
  }

  onChangeStudentUsername = event => {
    this.setState({studentuserName: event.target.value})
  }

  onChangeStudentPassword = event => {
    this.setState({studentpaswrd: event.target.value})
  }

  onSubmitStudentLogin = event => {
    event.preventDefault()
    const {studentpaswrd, studentuserName} = this.state
    const userLoginDetails = localStorage.getItem('studentDetails')
    console.log(userLoginDetails)
    const parsedLoginDetails = JSON.parse(userLoginDetails)
    const {studentusername, studentpassword} = parsedLoginDetails

    if (
      studentusername === studentuserName &&
      studentpassword === studentpaswrd
    ) {
      const {history} = this.props
      history.push('/student-page')
    } else {
      this.setState({errorMsg: true})
    }
  }

  render() {
    const {studentuserName, studentpaswrd, errorMsg} = this.state
    return (
      <div className="student-login-container">
        <form className="form-container" onSubmit={this.onSubmitStudentLogin}>
          <h1 className="student-login-heading">Student Login</h1>
          <div className="username-container">
            <label htmlFor="username">UserName</label>
            <input
              onChange={this.onChangeStudentUsername}
              className="input-username"
              id="username"
              type="text"
              value={studentuserName}
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChangeStudentPassword}
              className="input-password"
              id="password"
              type="password"
              value={studentpaswrd}
            />
          </div>

          {errorMsg && (
            <p className="student-error-login">
              *Provide Valid Username & password
            </p>
          )}
          <div className="btn-container">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
        <Link to="/student-signup">
          <p className="create-student-account">create account</p>
        </Link>
      </div>
    )
  }
}

export default StudentLoginForm
