import {BsX, BsCaretDownFill} from 'react-icons/bs'

import './index.css'

const UserUpdate = () => (
  <div className="user-container">
    <div className="notification">
      <BsX />
    </div>
    <h1 className="update-head">How do I compares to my peers?</h1>
    <p className="update-para">
      These numbers represent current goal achievement.
    </p>
    <div>
      <div className="age-container">
        <h1 className="age">Age:</h1>
        <div className="under">
          <h1 className="under-head">Under 30</h1>
          <BsCaretDownFill />
        </div>
      </div>
      <hr />
      <div className="age-container">
        <h1 className="age">Salary:</h1>
        <div className="under">
          <h1 className="under-head">K 20 - K 30</h1>
          <BsCaretDownFill />
        </div>
      </div>
      <hr />
      <div className="age-container">
        <h1 className="age">Gender:</h1>
        <div className="under">
          <h1 className="under-head">Male</h1>
          <BsCaretDownFill />
        </div>
      </div>
      <hr />
    </div>
    <div className="strategy-container">
      <h1 className="ret-heading">Retirement Strategy</h1>
      <div>
        <h1 className="emp-head">Employee Contribution</h1>
        <hr color="blue" size="5" width="100%" />
      </div>
      <div>
        <h1 className="emp-head">Retirement Age</h1>
        <hr color="blue" size="5" width="100%" />
      </div>
      <div className="cont">
        <h1 className="emp-head">Employee Contribution</h1>
        <p className="emp-head">8.4%</p>
      </div>
      <div className="cont">
        <h1 className="emp-head">Interest Rate</h1>
        <p className="emp-head">5%</p>
      </div>
    </div>
    <button type="button" className="btn">
      Update
    </button>
  </div>
)

export default UserUpdate
