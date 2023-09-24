import React, { useState } from 'react'
import "./usersQuries.scss"
import { Avatar, Button, Col, Form, Image, Input, Modal, Row } from 'antd'
import userOne from "../../assets/raw/users/u1.png"
import userTwo from "../../assets/raw/users/u2.png"
import userThree from "../../assets/raw/users/u3.png"
import TextArea from 'antd/es/input/TextArea'

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

    const [isReplyQuerieModalOpen, setIsReplyQuerieModalOpen] = useState(false)
    const [activeContentCached, setActiveContentCached] = useState<any>({})

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

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
                                    item.status === "resolved" ?
                                    <div className='resolved-by'>Resolved By <strong>{item.resolvedBy}</strong></div>
                                    :
                                    <Button className='reply-btn' onClick={() => {setIsReplyQuerieModalOpen(true); setActiveContentCached(item)}}>Reply</Button>
                                }
                                
                            </div>



                        </Col>
                    ))
                }

            </Row>
            </div>


            <Modal title="Reply" open={isReplyQuerieModalOpen} footer={false} onOk={() => setIsReplyQuerieModalOpen(false)} onCancel={() => setIsReplyQuerieModalOpen(false)}>
<div style={{fontSize:"15px", marginTop:"30px"}}>Replying to <span style={{color:"#3498db", fontWeight:"600"}}>{activeContentCached?.userName}</span></div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical"
                    rootClassName='global-form'>
                    <div className="post-querie-reply-wrapper">
                        <Row gutter={[20, 0]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label=""
                                    name="reply"
                                    rules={[{ required: true, message: 'Required field' }]}
                                >
                                    <TextArea rows={4} placeholder="Add reply..."/>
                                </Form.Item>
                            </Col>
                        </Row>

                    </div>
                    <div className="d-flex" style={{ gap: "10px", justifyContent: "flex-end", padding: "10px" }}>
                        <Button className="global-btn-cancel d-btn" onClick={() => setIsReplyQuerieModalOpen(false)}>Cancel</Button>
                        <Button className="global-btn d-btn">Post Reply</Button>
                    </div>
                </Form>
            </Modal>
            
        </div>
    )
}

export default UsersQuries