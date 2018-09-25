import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
  
export default Sidebar;