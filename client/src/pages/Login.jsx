import background from "../assets/img/background.jpg";
import logo from "../assets/img/logo.svg";
import { Link, useNavigate } from "react-router";

function Login() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="absolute inset-0"></div>

			<div className="card bg-white shadow-2xl z-10">
				<div className="card-body m-6">
					<div className="flex justify-center">
						<img src={logo} alt="Logo" className="w-24 object-contain" />
					</div>
					<h2 className="card-title text-2xl font-extrabold text-center justify-center mb-4">
						Iniciar Sesión
					</h2>

					<p className="text-center text-sm">
						Por favor ingrese su correo y contraseña para acceder al sistema
					</p>
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Correo</span>
							</label>
							<input
								type="email"
								placeholder="correo@email.com"
								className="input input-bordered input-sm"
							/>
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Contraseña</span>
							</label>
							<input
								type="password"
								placeholder="Ingrese su contraseña"
								className="input input-bordered input-sm"
							/>
							<label className="label">
								<Link className="label-text-alt font-bold text-sky-500 hover:text-sky-700 hover:underline">
									¿Olvidaste la contraseña?
								</Link>
							</label>
						</div>

						<div className="form-control mt-2">
							<button className="btn btn-neutral">Iniciar Sesión</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
