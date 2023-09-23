import React from 'react'
import "./sideBar.scss"
import { Avatar, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import orderIcon from "../../assets/icons/orders.svg"
import productsIcon from "../../assets/icons/products.svg"
import settingsIcon from "../../assets/icons/settings.svg"
import packagesIcon from "../../assets/icons/packages.svg"
import marketingIcon from "../../assets/icons/marketing.svg"
import verificationIcon from "../../assets/icons/check-circle.svg"
import analysisIcon from "../../assets/icons/analysis.svg"
import guideIcon from "../../assets/icons/memo-pad.svg"
import manageUsersIcon from "../../assets/icons/user-gear.svg"

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(<div onClick={() => navigate('./home')}>Dashboard</div>, '1', <PieChartOutlined />),
    getItem(<div onClick={() => navigate('./manage-franchise')}>Manage Franchise</div>, '6', <img src={settingsIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./packages')} >Packages</div>, '7', <img src={packagesIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./marketing')}>Marketing</div>, '8', <img src={marketingIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./manage-users')}>Manage Users</div>, '9', <img src={manageUsersIcon} width={15} height={15} alt="" />),
    getItem(<div>Reports</div>, '10', <img src={analysisIcon} width={15} height={15} alt="" />),
    getItem(<div>User Guides</div>, '11', <img src={guideIcon} width={15} height={15} alt="" />),

  ];

  return (
    <div className='main-sidebar-wrapper'>
      <div className="logo-main-area">
        <h3>EHB</h3>
        <p>EHB Franchises</p>
      </div>
      <div className="user-utils-wrapper">
       <div className="user-utils-main-inner">
       <Avatar size={64} icon={<UserOutlined />} />
       <h3>Apex Limited</h3>
       </div> 

      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
        items={items}
      />
      </div>
      
    </div>
  )
}

export default SideBar