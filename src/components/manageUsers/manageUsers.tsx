import React, { useState } from 'react'
import "./manageUsers.scss"
import { Avatar, Button, Dropdown, Image, Input, MenuProps, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';

import userOne from "../../assets/raw/users/u1.png"
import userTwo from "../../assets/raw/users/u2.png"
import userThree from "../../assets/raw/users/u3.png"
import searchIcon from "../../assets/icons/search.svg"
import cancelIcon from "../../assets/icons/cancel-colored.svg"
import viewIcon from "../../assets/icons/view.svg"
import editIcon from "../../assets/icons/edit-pencil.svg"
import deleteIcon from "../../assets/icons/delete.svg"
import dotsIcon from "../../assets/icons/dots.svg"

const ManageUsers = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='d-flex align-center' style={{ gap: "10px", }}>
                    <img src={viewIcon} width={20} height={20} alt="" />
                    <label>View User</label>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='d-flex align-center' style={{ gap: "10px", }}>
                    <img src={editIcon} width={20} height={20} alt="" />
                    <label>Edit User</label>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className='d-flex align-center' style={{ gap: "10px", }}>
                    <img src={deleteIcon} width={20} height={20} alt="" />
                    <label>Delete User</label>
                </div>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            userId: "#456783",
            userImage: userOne,
            userName: 'Sara Andrew',
            role: "Manager",
            invitationStatus: 'pending',
            createdDate: "02-07-2023"
        },
        {
            key: '2',
            userId: "#987333",
            userImage: userTwo,
            userName: 'Sofia jordon',
            role: "Employee",
            invitationStatus: 'approved',
            createdDate: "02-07-2023"
        },
        {
            key: '3',
            userId: "#747480",
            userImage: userThree,
            userName: 'Willam Marks',
            role: "Collaborator",
            invitationStatus: 'approved',
            createdDate: "02-07-2023"
        },
    ];

    const columns: ColumnsType<any> = [
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'user image',
            dataIndex: 'userId',
            key: 'userId',
            render: (_: any, record: any) => (
                <div>
                    <Avatar shape="circle" size={40} icon={<Image src={record.userImage} alt="" />} />
                </div>
            ),
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Role / Designation',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Invitation Status',
            dataIndex: 'status',
            key: 'status',
            render: (_: any, record: any) => (
                <div>
                    {(() => {
                        switch (record.invitationStatus) {
                            case 'approved':
                                return <div className="badge-common badge-approved">Approved</div>;
                            case 'pending':
                                return <div className="badge-common badge-processing">Pending</div>;
                            default:
                                return <div className="badge-common">Unknown Status</div>;
                        }
                    })()}
                </div>
            ),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (_: any, record: any) => (
                <div>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <img src={dotsIcon} width={20} height={20} alt="" />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            ),
        },

    ];

    const [searchText, setSearchText] = useState('');

    const handleSearch = (e: any) => {
        setSearchText(e.target.value);
    };

    // const filteredData = data.filter((item) =>
    //   item.orderName.toLowerCase().includes(searchText.toLowerCase())
    // );
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <div className='manage-users-main bx-bg--white border-repel card-shadow'>
            <div className="common-head-wrapper-title">
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3>Manage Users</h3>
                </div>

            </div>
            <div className='inset-wrapper'>
                <Input className='search-wrapper' onChange={handleSearch} placeholder="Search..." suffix={<img width={16} height={16} src={searchIcon} alt="" />} />
                <Button className='add-user-button'>Add User</Button>
            </div>


            <div className='wrapper-users-table'>
                <Table
                    dataSource={filteredData}
                    columns={columns}
                    pagination={{ pageSize: 7 }}
                    scroll={{ x: "max-content" }}
                />
            </div>
        </div>
    )
}

export default ManageUsers