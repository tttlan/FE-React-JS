import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from './components/shared/layout/AppLayout.component';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Router>
					<Fragment>
						<AppLayout />
					</Fragment>
				</Router>
			</div>
		);
	}
}

export default App;
