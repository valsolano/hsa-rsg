import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	return (
		<div className="flex h-screen bg-base-200">
			<Sidebar
				isOpen={sidebarOpen}
				isCollapsed={sidebarCollapsed}
				onClose={() => setSidebarOpen(false)}
			/>

			<div className="flex-1 flex flex-col overflow-hidden">
				<Header
					onMenuClick={() => setSidebarOpen(!sidebarOpen)}
					onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
					sidebarCollapsed={sidebarCollapsed}
				/>

				<main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-0 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
