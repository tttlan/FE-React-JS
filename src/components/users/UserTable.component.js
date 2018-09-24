import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UserTable extends Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user, index) => {
                                return (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}
  
export default UserTable;