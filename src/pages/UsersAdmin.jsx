import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { NavbarAdmin } from '../Componentes/NavBarAdmin'
import Form from '../Componentes/FormUsers'
import Table from '../Componentes/TableUsers'
import axios from 'axios'

export const UsersAdmin = () => {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try{
      const res = await axios.get('http://localhost:3000/users');
      setUsers(res.data.sort((a, b) => (a.NOME > b.NOME ? 1 : -1)));
    } catch(error){
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]); 
   
  return (
    <>
      <NavbarAdmin/>
      <div className="flex flex-col gap-4 items-center justify-center bg-[#1A2238] h-screen">
        <h1 className='text-orange-500'><strong>USUÁRIOS</strong></h1>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Table setOnEdit={setOnEdit} users={users} setUsers={setUsers}/>
      </div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    </>
  )
}
