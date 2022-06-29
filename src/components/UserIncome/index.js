import {IoIosNotificationsOutline} from 'react-icons/io'
import {
  BsFillSquareFill,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
  BsBlockquoteLeft,
} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

import {VscHome} from 'react-icons/vsc'

import BarCharts from '../BarCharts'

import './index.css'

const UserDetails = () => (
  <div className="container2">
    <div className="notification">
      <IoIosNotificationsOutline className="icon-con" />
    </div>
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
    <div className="icon-containers">
      <VscHome className="home" />
      <BsBlockquoteLeft />
      <BsReverseLayoutTextSidebarReverse />
      <AiOutlineUser />
      <BsSearch />
    </div>
  </div>
)
export default UserDetails
