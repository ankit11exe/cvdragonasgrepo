import { useState } from "react";
import backendApi from "../backendApi/configAxios";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function NewForm(){
    const [newData , setNewData ] = useState({
        name: "", email: "", phone: "", pfp: "",designation: "", role: "User", status: "Active" ,
    });

    const navigate = useNavigate();

    const handleChange = (event) =>{
        setNewData({...newData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await backendApi.post("/users",newData);
            navigate("/users");
        }
        catch(error){
            console.error(error);
        }
    };

    return(
        <div className="flex">
            <Sidebar/>
            <div className="w-250 ml-20 bg-white shadow-xl rounded-xl p-10">
                <h1 className="font-bold text-xl text-left">Add New User</h1> <br />
                <form className="text-left" onSubmit={handleSubmit} >
                    <label className="mr-10" htmlFor="name">Name</label><input className="mb-6 border border-gray-400 rounded-lg h-8 w-90" id="name" type="text" placeholder="Enter Name" name="name" value={newData.name} onChange={handleChange} required /> <br />

                    <label className="mr-10" htmlFor="phone">Mobile Number</label><input className="mb-6 border border-gray-400 rounded-lg h-8 w-90" id="phone" type="text"  placeholder="Enter Mobile Number" name="phone" value={newData.phone} onChange={handleChange} /> <br />

                    <label className="mr-10" htmlFor="email">Email</label><input className="mb-6 border border-gray-400 rounded-lg h-8 w-90" id="email" type="email"  placeholder="Enter Email" name="email" value={newData.email} onChange={handleChange} required /> <br />

                    <label className="mr-10" htmlFor="image">Profile Image</label><input className="mb-6 border border-gray-400 rounded-lg h-8 w-90" id="image" type="text"  placeholder="Enter Image URL Here" name="pfp" value={newData.pfp} onChange={handleChange} /> <br />

                    <label className="mr-10" htmlFor="designation">Designation</label><input className="mb-6 border border-gray-400 rounded-lg h-8 w-90" id="designation" type="text" placeholder="Enter Designation" name="designation" value={newData.designation} onChange={handleChange} required /> <br />

                    <label className="mr-10" htmlFor="role">Role</label>
                    <select  className="mb-6 border border-gray-400 rounded-lg h-8 w-20" id="role" name="role" value={newData.role} onChange={handleChange}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select> <br />

                    <label className="mr-10" htmlFor="status">Status</label>
                    <select className="mb-6 border border-gray-400 rounded-lg h-8 w-20" id="status" name="status" value={newData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select> <br />
                    
                    <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-white text-xl border border-yellow-500 rounded-sm h-8 w-50" type="submit">Publish</button>
                </form>
            </div>
        </div>
    );
}