import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UmSearch from "../components/UmSearch";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import backendApi from "../backendApi/configAxios";


export default function UserManagement(){
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { getUsers(); }, []);

    const getUsers = async()=>{
        try{
            const res = await backendApi.get("/users");
            setUsers(res.data);
        }
        catch(error){
            console.error(error);
        }
    };

    const handleEdit = (user) => {
        navigate(`/users/edit/${user._id}`);
    };

    const handleDelete = async (userId) => {
        try {
            await backendApi.delete(`/users/${userId}`);
            setUsers(users.filter((user) => user._id !== userId));
        } 
        catch (error) {
        console.error(error.message);
        }
    };

    return(
        <div className="flex">
            <Sidebar/>
            <div className="ml-20">
                <Navbar/>
                <div>
                    <UmSearch/>
                    <div className="w-150 mt-10 ">
                        <table className="w-150 text-center flex justify-evenly">
                            <thead className="bg-rose-100 border border-rose-300 w-150 flex justify-evenly rounded-xl">
                                <tr>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Designation</th>
                                    <th className="p-3 text-left">Role</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Action Buttons</th>
                                </tr>
                            </thead>

                            <tbody >
                                {users.map((user)=>
                                <tr className="w-150 flex justify-evenly rounded-xl border border-red-200" key={user._id} >
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.role}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button className="w-6 h-6 mr-3" onClick={() => handleEdit(user)}>
                                            <img className="w-6 h-6" src="./assets/edit.png" alt="edit" />
                                        </button>

                                        <button className="w-6 h-6" onClick={() => handleDelete(user._id)}>
                                            <img className="w-6 h-6" src="./assets/delete.png" alt="delete" />
                                        </button>
                                    </td>
                                </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}