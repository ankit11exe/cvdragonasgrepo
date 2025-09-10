import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backendApi from "../backendApi/configAxios";
import Sidebar from "../components/Sidebar";

export default function EditForm(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pfp: "",
        designation: "",
        role: "User",
        status: "Active",
    });

    const getUsers = async () => {
        try {
            const res = await backendApi.get(`/users/${id}`);
            setFormData(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {getUsers();}, [id]);

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await backendApi.put(`/users/${id}`,formData);
            navigate("/users");
        }
        catch(error){
            console.error(error);
        }
    };


    return(
        <div className="flex">
            <Sidebar/>
            <div>
                <h1>Edit Users Detail</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label><input id="name" type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange}/> <br />

                    <label htmlFor="phone">Mobile Number</label><input id="phone" type="text"  placeholder="Enter Mobile Number" name="phone" value={formData.phone} onChange={handleChange} /> <br />

                    <label htmlFor="email">Email</label><input id="email" type="email"  placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required /> <br />

                    <label htmlFor="image">Profile Image</label><input id="image" type="text"  placeholder="Enter Image URL Here" name="pfp" value={formData.pfp} onChange={handleChange} /> <br />

                    <label htmlFor="designation">Designation</label><input id="designation" type="text" placeholder="Enter Designation" name="designation" value={formData.designation} onChange={handleChange} required /> <br />

                    <label htmlFor="role">Role</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select> <br />

                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select> <br />

                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
}