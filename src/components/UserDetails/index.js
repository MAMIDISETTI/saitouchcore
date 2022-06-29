import {IoIosNotificationsOutline} from 'react-icons/io'

import {VscHome} from 'react-icons/vsc'

import {
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
  BsBlockquoteLeft,
} from 'react-icons/bs'

import {AiOutlineUser} from 'react-icons/ai'

import './index.css'

const UserDetails = () => (
  <div className="container1">
    <div className="notification">
      <IoIosNotificationsOutline className="icon-con" />
    </div>
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
    <div className="detail-container">
      <p className="detail-p">Today</p>
      <h1 className="detail-h">$19,892</h1>
      <h1 className="detail-para">Account Balance</h1>
      <div className="detail-container1">
        <div>
          <h1 className="heading-detail">$4,000</h1>
          <p className="para-detail">Year-to-date</p>
        </div>
        <div className="detail-another">
          <h1 className="heading-detail">$1,892</h1>
          <p className="para-detail">Total Interest</p>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="button">
          I want to...
        </button>
      </div>
    </div>
    <div className="transaction-container">
      <h1 className="transaction-head">Recent Transactions</h1>
      <p className="transaction-para">2020-07-01</p>
      <h1 className="transaction-heading">Withdrawal Transfer to Bank-xx11</h1>
    </div>
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
