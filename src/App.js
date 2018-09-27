import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layout from './components/shared/Layout.component';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Router>
					<Fragment>
						<Layout />
					</Fragment>
				</Router>
			</div>
		);
	}
}

export default App;
