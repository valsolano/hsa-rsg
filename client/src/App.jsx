import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
};

export default App;
