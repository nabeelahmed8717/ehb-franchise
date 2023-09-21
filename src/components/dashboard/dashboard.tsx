import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.scss"



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

    </div>
  )
}

export default Dashboard