import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.scss"
import { Button, Col, Row } from 'antd'

import storesIcon from "../../assets/icons/store-alt.svg"
import wifiIcon from "../../assets/icons/wifi-alt.svg"
import riderIcon from "../../assets/icons/biking-mountain.svg"
import starIcon from "../../assets/icons/star-outlined.svg"
import dollarSign from "../../assets/icons/dollarSign.svg"
import arrowUpRight from "../../assets/icons/arrow-up-right.svg"



const Dashboard = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);


  return (
    <div className="dashboard-main-wrapper">
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Franchise Dashboard</h3>
          {/* <div className='head-ins'>
            <Button className='service-quality'>SQ-level : <strong>High</strong></Button>
          </div> */}
        </div>

      </div>

      <br />
      <br />
      <br />
      <Row gutter={30}>
        <Col lg={6} md={24} sm={24} xs={24}>
          <Row gutter={[10, 10]}>
            <Col lg={12} md={6} sm={6} xs={12}>
              <div className="info-main-cards-f" style={{ backgroundColor: "#F0F4FF" }}>
                <div className='wrp-icon'><img src={storesIcon} width={19} height={19} alt="" /></div>
                <h3>Registered stores</h3>
                <p>348</p>
              </div>
            </Col>
            <Col lg={12} md={6} sm={6} xs={12}>
              <div className="info-main-cards-f" style={{ backgroundColor: "#FAF8F3" }}>
                <div className='wrp-icon'><img src={wifiIcon} width={19} height={19} alt="" /></div>
                <h3>Active Stores</h3>
                <p>324</p>
              </div>
            </Col>
            <Col lg={12} md={6} sm={6} xs={12}>
              <div className="info-main-cards-f" style={{ backgroundColor: "#EEFCEF" }}>
                <div className='wrp-icon'><img src={riderIcon} width={19} height={19} alt="" /></div>
                <h3>Active Riders</h3>
                <p>200</p>
              </div>
            </Col>
            <Col lg={12} md={6} sm={6} xs={12}>
              <div className="info-main-cards-f" style={{ backgroundColor: "#E5F5FA" }}>
                <div className='wrp-icon'><img src={starIcon} width={19} height={19} alt="" /></div>
                <h3>Ratings</h3>
                <p>3.4</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
            <div className="wrapper-current-package">
              <h3>Current Package</h3>
              <div className="package-details">
                <h3>Level 2</h3>
                <p>Price : <span>$ 2,000</span></p>
              <Button className='package-upgrade-btn'>Upgrade</Button>
              </div>
            </div>
            </Col>
          </Row>
        </Col>
        <Col lg={18} md={24} sm={24} xs={24}>
          <div className="container-earnings">
            <Row gutter={[0, 10]}>
              <Col lg={4} md={4} sm={24} xs={24}>
                <div className="earning-icon">
                  <div className="icon-inner">
                    <img src={dollarSign} width={22} height={22} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={20} md={20} sm={24} xs={24}>
                <div className='wrapper-md-er'>
                  <Row gutter={[0, 10]}>
                    <Col lg={18} md={18} sm={24} xs={24}>
                      <div className='earning-content'>
                        <p>Your this month Earnings</p>
                        <h2>& <span>2,647.34</span></h2>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={24} xs={24}>
                      <Button className='nav-wallet-btn'>Go to Wallet</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>


          </div>

          <Row gutter={[20,20]}>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="wrapper-gripper-bonuses-overview-cd">
                <h3>Level Bonus <img src={arrowUpRight} width={15} height={20} alt="" /></h3>
                <div className="wgbo-set-inner">
                  <div className="info-bonuses-flex">
                    <p>Wobble Store Created</p>
                    <h3><span>5%</span> ~ <span>0.4$</span> </h3>
                  </div>
                  <div className="info-bonuses-flex">
                    <p>Premium Gucci shirt sold</p>
                    <h3><span>3%</span> ~ <span>0.3$</span> </h3>
                  </div>
                  <div className="info-bonuses-flex">
                    <p>Free-Range Eggs (1 dozen) sold</p>
                    <h3><span>3%</span> ~ <span>1.00$</span> </h3>
                  </div>
                  <div className="info-bonuses-flex">
                    <p>Premium Gucci shirt sold</p>
                    <h3><span>3%</span> ~ <span>0.3$</span> </h3>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="wrapper-gripper-bonuses-overview-cd">
                <h3>Direct Bonus <img src={arrowUpRight} width={15} height={20} alt="" /></h3>
                <div className="wgbo-set-inner">
                  <div className="info-bonuses-flex">
                    <p>20 Franchise sold</p>
                    <h3><span>5%</span> ~ <span>2000$</span> </h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard