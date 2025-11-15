import { Link, useLocation } from "react-router";
import {
	Home,
	Users,
	User,
	Settings,
	Stethoscope,
	Brain,
	Heart,
	Activity,
	FileText,
	X,
} from "lucide-react";
import logo from "../assets/img/logo.svg";

const Sidebar = ({ isOpen, isCollapsed, onClose }) => {
	const location = useLocation();

	const menuItems = [
		{
			section: "PRINCIPAL",
			items: [
				{ icon: Home, label: "Dashboard", path: "/" },
				{ icon: Users, label: "Internos", path: "/internos" },
				{ icon: User, label: "Usuarios", path: "/usuarios" },
			],
		},
		{
			section: "MÓDULOS CLÍNICOS",
			items: [
				{ icon: Stethoscope, label: "Gestión Médica", path: "/gestion-medica" },
				{ icon: Brain, label: "Psicología", path: "/psicologia" },
				{ icon: Heart, label: "Trabajo Social", path: "/trabajo-social" },
				{ icon: Activity, label: "Enfermería", path: "/enfermeria" },
			],
		},
		{
			section: "ADMINISTRACIÓN",
			items: [
				{ icon: FileText, label: "Reportes", path: "/reportes" },
				{ icon: Settings, label: "Configuración", path: "/configuracion" },
			],
		},
	];

	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 bg-slate-400 bg-opacity-50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}

			<aside
				className={`
        fixed lg:static inset-y-0 left-0 z-50
        bg-base-100 border-r border-slate-300
        transform transition-all duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}
        w-64
      `}
			>
				<div
					className={`
	  h-16 flex items-center border-b border-base-300
	  transition-all duration-200
	  ${isCollapsed ? "lg:justify-center lg:px-2" : "justify-between px-4"}
	`}
				>
					<div
						className={`flex items-center gap-3 ${
							isCollapsed ? "lg:gap-0" : ""
						}`}
					>
						<img src={logo} alt="Logo" className="w-10 h-10 flex-shrink-0" />
						<div className={`flex flex-col ${isCollapsed ? "lg:hidden" : ""}`}>
							<span className="font-bold text-sm">HOGAR</span>
							<span className="font-bold text-sm">SAN CAYETANO</span>
						</div>
					</div>
					<button onClick={onClose} className="lg:hidden btn btn-ghost btn-sm">
						<X className="w-5 h-5" />
					</button>
				</div>

				<nav
					className={`
          h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden
          p-4 space-y-6
          ${isCollapsed ? "lg:px-2 lg:py-3 lg:space-y-0 lg:scrollbar-hide" : ""}
        `}
				>
					{menuItems.map((section, idx) => (
						<div key={idx}>
							<div
								className={`
                text-xs font-semibold text-base-content/40 mb-2 px-3
                ${isCollapsed ? "lg:hidden" : ""}
              `}
							>
								{section.section}
							</div>
							{isCollapsed && idx > 0 && (
								<div className="hidden lg:block border-t border-base-300 my-2"></div>
							)}
							<ul
								className={`space-y-1 ${isCollapsed ? "lg:space-y-0.5" : ""}`}
							>
								{section.items.map((item, itemIdx) => {
									const isActive = location.pathname === item.path;
									return (
										<li key={itemIdx}>
											<Link
												to={item.path}
												onClick={onClose}
												className={`
                          flex items-center gap-3 px-3 py-2.5 rounded-lg
                          transition-colors group relative
                          ${
														isCollapsed
															? "lg:justify-center lg:px-0 lg:py-2 lg:gap-0"
															: ""
													}
                          ${
														isActive
															? "bg-base-300 text-base font-semibold"
															: "text-base-content/70 hover:bg-base-200"
													}
                        `}
												title={isCollapsed ? item.label : ""}
											>
												<item.icon className="w-5 h-5 flex-shrink-0" />
												<span
													className={`text-sm ${
														isCollapsed ? "lg:hidden" : ""
													}`}
												>
													{item.label}
												</span>

												{isCollapsed && (
													<div className="hidden lg:block absolute left-full ml-2 px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
														{item.label}
													</div>
												)}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</nav>
			</aside>
		</>
	);
};

export default Sidebar;
