import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';

import Sidebar from './components/shared/Sidebar.component';
import Header from './components/shared/Header.component';
import Routes from './routes';

class App extends Component {
    render() {
        return (
          	<div className="App">
			  	<Router>
					<Fragment>
						<Header />
						<Sidebar />
						<Routes />
					</Fragment>
				</Router>
          	</div>
        );
    }
}

export default App;
