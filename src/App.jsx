import React, {useEffect} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "screens/Home";

function App() {
	
	return (
		<>
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
		</>
	);
}

export default App;
