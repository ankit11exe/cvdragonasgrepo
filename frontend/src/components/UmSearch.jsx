import { useNavigate } from "react-router-dom";

export default function UmSearch(){
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/users/new");
    };

    return(
        <div className="w-150 px-6 py-4 bg-white shadow-xl rounded-xl mt-10">
            <span className="flex mb-5">
                <img className="mr-5" src="./assets/userlogo.png" alt="userlogo" />
                <h1 className="font-semibold text-2xl">User Management</h1>
            </span>
            <div className="flex justify-between">
                <div className="flex justify-start">
                    <input className="border border-yellow-400 rounded-full px-4 py-2 w-80 " type="text" placeholder="Search..."/>
                </div>
                <button onClick={handleNavigate} className="flex items-center justify-center border border-yellow-500 h-10 w-10 text-yellow-500 rounded-xl text-xl">+</button>

            </div>
            
        </div>
    );
}