import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
	return (
		<div className="text-slate-800">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>

				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
};

export default App;
