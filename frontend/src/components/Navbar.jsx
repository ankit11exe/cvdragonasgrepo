export default function Navbar(){
    return(
        <div className="w-250 flex justify-between items-center px-6 py-4 bg-white shadow-xl rounded-xl">
            <div className="flex items-center w-1/2">
                <input className="w-full border border-gray-400 rounded-full px-4 py-2" type="text" placeholder="Search..." />
            </div>
            <div>
                <img className="h-10 w-10 rounded-full" src="./assets/avatar.jpg" alt="avatar" />
            </div>
        </div>
    );
}