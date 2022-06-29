import {VscHome} from 'react-icons/vsc'
import {GrFormNext} from 'react-icons/gr'
import {
  BsFillSquareFill,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
  BsBlockquoteLeft,
  BsCaretDownFill,
} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import BarCharts from './components/BarCharts'

import UserUpdate from './components/UserUpdate'
import UserDetails from './components/UserDetails'
import UserIncome from './components/UserIncome'

import './App.css'

const App = () => (
  <>
    <div className="mobile-view">
      <div className="sample2">
        <UserDetails />
      </div>
      <div className="sample1">
        <UserIncome />
      </div>
      <div className="sample">
        <UserUpdate />
      </div>
    </div>
    <div className="desktop-view">
      <div className="desktop-container">
        <div className="desktop-icon-containers">
          <BsSearch className="icons" />
          <VscHome className="home icons" />
          <BsBlockquoteLeft className="icons" />
          <BsReverseLayoutTextSidebarReverse className="icons" />
          <AiOutlineUser className="icons" />
        </div>
        <div className="desktop-container1">
          <div className="profile-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              className="profile-image"
              alt="images"
            />
            <div className="profile">
              <h1 className="profile-heading">Hi Mike,</h1>
              <p className="profile-para">welcome back.</p>
            </div>
          </div>
          <div className="details-container">
            <p className="detail-p">Today</p>
            <h1 className="detail-h">$19,892</h1>
            <h1 className="detail-para">Account Balance</h1>
            <div>
              <h1 className="heading-detail">$4,000</h1>
              <p className="para-detail">Year-to-date</p>
            </div>
            <div>
              <h1 className="heading-detail">$1,892</h1>
              <p className="para-detail">Total Interest</p>
            </div>
            <div className="button-container">
              <button type="button" className="button">
                I want to...
              </button>
            </div>
          </div>
          <div className="transactions-container">
            <h1 className="transaction-head">Recent Transactions</h1>
            <p className="transactions-para">2020-07-01</p>
            <h1 className="transactions-heading">
              Withdrawal Transfer to Bank-xx11
            </h1>
            <hr />
            <p className="transactions-para">2020-07-01</p>
            <h1 className="transactions-heading">
              Withdrawal Transfer to Bank-xx11
            </h1>
            <hr />
            <p className="transactions-para">2020-07-01</p>
            <h1 className="transactions-heading">
              Withdrawal Transfer to Bank-xx11
            </h1>
            <hr />
          </div>
        </div>
        <div>
          <div className="desktop-container2">
            <div>
              <h1 className="income-retirement">Retirement Income</h1>
              <h1 className="income-year">Starting Year 2056</h1>
              <div className="heading-container">
                <h1 className="income-heading">$300,000</h1>
                <h1 className="goal">My Goal</h1>
                <hr color="#3ea630" />
              </div>
              <div className="hori-container">
                <div className="hori">
                  <h1 className="heading-per">59%</h1>
                  <p className="para-goa">Goal Achieved</p>
                  <hr color="#3ea630" />
                </div>
                <div>
                  <h1 className="heading-per">k 300</h1>
                  <p className="para-goa">Est. Monthly Income</p>
                  <hr color="#3ea630" />
                </div>
              </div>
              <h1 className="header">Contributions Overtime</h1>
              <div className="icon-square-container">
                <div>
                  <BsFillSquareFill className="icon-square" />
                  <p className="emp-para">Employer</p>
                  <h1 className="emp-head">$73,500</h1>
                </div>
                <div>
                  <BsFillSquareFill className="icon-squares" />
                  <p className="emp-para">Employer</p>
                  <h1 className="emp-head">$73,500</h1>
                </div>
                <div>
                  <BsFillSquareFill className="icon-square1" />
                  <p className="emp-para">Employer</p>
                  <h1 className="emp-head">$73,500</h1>
                </div>
              </div>
            </div>
            <BarCharts />
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
          </div>
        </div>
        <div>
          <div className="desktop-user-container">
            <div className="strategys-container">
              <h1 className="rets-heading">Retirement Strategy</h1>
              <div>
                <h1 className="emps-head">Employee Contribution</h1>
                <hr color="blue" size="5" width="100%" />
              </div>
              <div>
                <h1 className="emps-head">Retirement Age</h1>
                <hr color="blue" size="5" width="100%" />
              </div>
              <div className="conts">
                <h1 className="emps-head">Employee Contribution</h1>
                <p className="emps-head">8.4%</p>
              </div>
              <div className="conts">
                <h1 className="emps-head">Interest Rate</h1>
                <p className="emps-head">5%</p>
              </div>
            </div>
            <button type="button" className="btns">
              Update
            </button>
            <div className="held-dec">
              <h1 className="help-head">View Help Docs</h1>
              <GrFormNext />
            </div>
            <div className="desk-hori">
              <hr />
              <div className="desk-head-h">
                <h1 className="desk-h-he">Are you considering a</h1>
                <h1 className="desk-h-hes">Housing Advance?</h1>
                <p className="desk-p">Limited time reduced interest.</p>
                <div className="held-decs">
                  <h1 className="help-head">Learn More</h1>
                  <GrFormNext />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default App
