import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from './pages/Dashboard'

import './App.css'
import UserManagement from "./pages/UserMangement";
import NewForm from "./pages/NewForm";
import EditForm from "./pages/EditForm";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement/>}/>
        <Route path="/users/new" element={<NewForm/>}/>
        <Route path="/users/edit/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
