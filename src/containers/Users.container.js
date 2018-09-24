import React, { Component } from 'react';

import UsersComponent from '../components/users/Users.component';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <UsersComponent users={this.state.users}/>
        );
    }
}
  
export default Users;