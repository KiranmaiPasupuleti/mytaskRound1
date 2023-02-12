import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class StudentPage extends Component {
  state = {localData: []}

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const data = localStorage.getItem('Data')
    if (data !== null) {
      const me = data.split(',')

      this.setState({localData: me})
    }
  }

  render() {
    const {localData} = this.state

    return (
      <div className="main-container">
        <div className="button-container">
          <Link to="/">
            <button className="logout-btn">logout</button>
          </Link>
        </div>
        <div className="student-page-container">
          {localData.map(each => (
            <p className="para">{each}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default StudentPage
