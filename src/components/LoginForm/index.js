import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  //   const onClickMasterBtn = () => (
  //     <div>
  //       <MasterLoginPage />
  //     </div>
  //   )

  <div className="login-page-container">
    <h1 className="heading">Choose Your Login</h1>
    <div className="login-buttons">
      <Link to="/master-login">
        <button className="login-btn" type="button">
          Master Login
        </button>
      </Link>
      <button className="login-btn" type="button">
        Student Login
      </button>
    </div>
  </div>
)

export default Home
