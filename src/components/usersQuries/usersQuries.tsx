import React from 'react'
import "./usersQuries.scss"
import { Avatar, Col, Image, Row } from 'antd'
import userOne from "../../assets/raw/users/u1.png"
import userTwo from "../../assets/raw/users/u2.png"
import userThree from "../../assets/raw/users/u3.png"

const userQuerieStatus = [
    {
        id:'01',
        userName: "Sara Andrew",
        userImage: userOne,
        querieMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio maiores assumenda fuga consectetur, odit ipsa voluptatibus, illo, nemo dignissimos facere repellendus hic veritatis tempore? Voluptate est at dicta odit.",
        createdOn: "2 min ago",
        status: "resolved",
        resolvedBy:"Jhon Doe"
    },
    {
        id:'02',
        userName: "Alex Jhon",
        userImage: userTwo,
        querieMessage: "consectetur adipisicing elit. Voluptate optio maiores assumenda fuga consectetur, odit ipsa voluptatibus, illo, nemo dignissimos facere repellendus hic veritatis tempore? Voluptate est at dicta odit.",
        createdOn: "10 min ago",
        status: "pending"
    },
    {
        id:'03',
        userName: "Willam Marks",
        userImage: userThree,
        querieMessage: " sit amet consectetur adipisicing elit.optio maiores assumenda fuga consectetur, odit ipsa voluptatibus, illo, nemo dignissimos facere repellendus hic veritatis tempore? Voluptate est at dicta odit.",
        createdOn: "1 hour ago",
        status: "pending"
    },
    {
        id:'04',
        userName: "Willam Marks",
        userImage: userOne,
        querieMessage: "optio maiores assumendaillo, veritatis tempore? Voluptate est at dicta odit.",
        createdOn: "4 hours ago",
        status: "pending"
    },
]

const UsersQuries = () => {
    return (
        <div className='users-quries-main-wrapper bx-bg--white border-repel card-shadow'>
            <div className="common-head-wrapper-title">
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3>Users Quries</h3>
                    {/* <div className='head-ins'>
            <Button className='service-quality'>SQ-level : <strong>High</strong></Button>
          </div> */}
                </div>
            </div>

            <div className="cards-wrapper">
            <Row gutter={[20, 20]}>
                {
                    userQuerieStatus.map((item) => (
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="user-quries-gripper">
                                <div className="flex-status">
                                {(() => {
                                    switch (item.status) {
                                        case 'resolved':
                                            return <div className="querie-status qs-resolved">Resolved</div>;
                                        case 'pending':
                                            return <div className="querie-status qs-pending">Pending</div>;
                                        default:
                                            return <div className="querie-status">Unknown Status</div>;
                                    }
                                })()}
                                </div>
                                
                                <div className="card-head-flex">
                                    <div className='user-info'>
                                        <Avatar size={40} icon={<Image src={item.userImage} alt="."></Image>} />
                                        <h3>{item.userName}</h3>
                                    </div>
                                    <span>{item.createdOn}</span>
                                </div>
                                <div className="message-container">
                                    <strong>Querie : </strong>
                                    <p className='clamp-text'>{item.querieMessage}</p>
                                </div>
                                {
                                    item.status === "resolved" &&
                                    <div className='resolved-by'>Resolved By <strong>{item.resolvedBy}</strong></div>
                                }
                            </div>

                        </Col>
                    ))
                }

            </Row>
            </div>

            
        </div>
    )
}

export default UsersQuries