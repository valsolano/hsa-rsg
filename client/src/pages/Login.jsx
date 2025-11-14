import background from "../assets/img/background.jpg";
import logo from "../assets/img/logo.svg";

function Login() {
	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

			<div className="card w-md bg-white shadow-2xl z-10">
				<div className="card-body">
					<div className="flex justify-center">
						<img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
					</div>
					<h2 className="card-title text-2xl font-bold text-center justify-center mb-4">
						Iniciar Sesión
					</h2>

					<p className="text-center text-sm">
						Por favor ingrese su correo y contraseña para acceder al sistema
					</p>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Correo</span>
						</label>
						<input
							type="email"
							placeholder="correo@email.com"
							className="input input-bordered"
						/>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Contraseña</span>
						</label>
						<input
							type="password"
							placeholder="Ingrese su contraseña"
							className="input input-bordered"
						/>
						<label className="label">
							<a href="#" className="label-text-alt link link-hover italic ">
								¿Olvidaste la contraseña?
							</a>
						</label>
					</div>

					<div className="form-control mt-2">
						<button className="btn">Login</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
