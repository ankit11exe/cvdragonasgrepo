import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="w-50 bg-white h-screen shadow-xl/20 flex flex-col flex-shrink-0 justify-between rounded-xl mt-0 ml-0 mr-0" >
            <div >
                <div className="p-6 flex items-center justify-center">
                    <img className="h-12" src="./assets/logo.png" alt="logo" />
                </div>
                <nav className="mt-6">
                    <Link className="flex items-center justify-center gap-3 p-3 hover:bg-yellow-100 bg-yellow-50 rounded-lg text-yellow-600 font-semibold" to="/dashboard">Dashboard</Link>
                    <Link className="flex items-center justify-center gap-3 p-3 hover:bg-yellow-100 bg-yellow-50 rounded-lg mt-2 text-yellow-600 font-semibold" to="/users">User Management</Link>
                </nav>
            </div>
            <div className="p-4 text-xs text-gray-500">
                <p>Version 1.0.0</p>
            </div>
        </div>
    );
}