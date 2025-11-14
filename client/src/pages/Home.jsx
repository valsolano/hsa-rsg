import React from "react";
import { Link } from "react-router";

const Home = () => {
	return (
		<div>
			<Link to={"/login"} className="btn btn-outline">
				Iniciar Sesión
			</Link>
			<p className="text-red-500">Home</p>
		</div>
	);
};

export default Home;
