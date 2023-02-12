import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class StudentCreateAccount extends Component {
  state = {
    studentusername: '',
    studentpassword: '',
  }

  onChangeStudentUser = event => {
    this.setState({studentusername: event.target.value})
  }

  onChangeStudentPassword = event => {
    this.setState({studentpassword: event.target.value})
  }

  onSubmitCreateStudent = event => {
    event.preventDefault()
    const {studentusername, studentpassword} = this.state
    const studentSignUpDetails = {
      studentusername,
      studentpassword,
    }
    const stringifiedStudentSignUpDetails = JSON.stringify(studentSignUpDetails)
    localStorage.setItem('studentDetails', stringifiedStudentSignUpDetails)
  }

  render() {
    const {studentusername, studentpassword} = this.state
    console.log(studentusername, studentpassword)
    return (
      <div className="student-create-account-container">
        <h1 className="student-signup-heading">Student SignUp</h1>
        <form
          className="student-create-account"
          onSubmit={this.onSubmitCreateStudent}
        >
          <div className="input-container-username-student">
            <label htmlFor="student-username">Username</label>
            <input
              onChange={this.onChangeStudentUser}
              value={studentusername}
              type="text"
              id="student-username"
            />
          </div>
          <div className="input-container-username-student">
            <label htmlFor="password-student">Password</label>
            <input
              onChange={this.onChangeStudentPassword}
              value={studentpassword}
              id="password-student"
              type="password"
            />
          </div>
          <div className="student-account-btn">
            <button className="student-create-btn" type="submit">
              Create Account
            </button>
          </div>
        </form>

        <Link to="/master-login">
          <button className="student-back" type="button">
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default StudentCreateAccount
