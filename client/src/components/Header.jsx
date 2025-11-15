import { Menu, LogOut, User } from "lucide-react";

const Header = ({ onMenuClick, onToggleCollapse, sidebarCollapsed }) => {
	return (
		<header className="h-16 bg-base-100 border-b border-base-300 px-6 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<button
					onClick={onMenuClick}
					className="lg:hidden btn btn-ghost btn-sm px-2"
				>
					<Menu className="w-5 h-5" />
				</button>

				<button
					onClick={onToggleCollapse}
					className="hidden lg:flex btn btn-ghost btn-sm btn-square"
					title={sidebarCollapsed ? "Expandir menú" : "Colapsar menú"}
				>
					<Menu className="w-5 h-5" />
				</button>

				<h1 className="text-lg font-semibold text-base-content">
					Sistema de Gestión ONG
				</h1>
			</div>

			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 mr-3">
					<User className="w-5 h-5 text-base-content/70" />
					<div className="hidden sm:flex flex-col">
						<span className="text-sm font-medium">Juan Pérez</span>
						<span className="text-xs text-base-content/60">Administrador</span>
					</div>
				</div>

				<div className="divider divider-secondary opacity-40 divider-horizontal mx-2" />

				<button className="btn btn-ghost gap-2 hover:bg-slate-200">
					<LogOut className="w-4 h-4" />
					<span className="hidden sm:inline">Cerrar Sesión</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
