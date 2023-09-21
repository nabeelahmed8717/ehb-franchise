import React from 'react'
import "./sqPackages.scss"
import { Card, Col, Row } from 'antd'


const packagesData = [
    {
        title: 'BASIC',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'STANDARD',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
            "Eligible for product verification",
            "Eligible for product verification",
        ]
    },
    {
        title: 'HIGH',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'PREMIUM',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
]

const SqPackages = () => {
    return (
        <div className='packages-main-wrapper wrapper-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
           packages
        </div>
    )
}

export default SqPackages