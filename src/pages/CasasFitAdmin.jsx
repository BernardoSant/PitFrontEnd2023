import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Form from '../Componentes/FormCasasFit'
import Table from '../Componentes/TableCasasFit'
import axios from 'axios'
import { NavbarAdmin } from '../Componentes/NavBarAdmin'

export const CasasfitAdmin = () => {
  const [casas, setCasas] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getCasas = async () => {
    try{
      const res = await axios.get('http://localhost:3000/casasfit');
      setCasas(res.data.sort((a, b) => (a.NOME > b.NOME ? 1 : -1)));
    } catch(error){
      toast.error(error)
    }
  }

  useEffect(() => {
    getCasas();
  }, [setCasas])

  return (
    <>
    <NavbarAdmin />
      <div className="flex flex-col gap-4 items-center justify-center bg-[#1A2238] h-screen">
        <h1 className='text-orange-500'><strong>CASAS FIT</strong></h1>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCasas={getCasas}/>
        <Table setOnEdit={setOnEdit} casas={casas} setCasas={setCasas}/>
      </div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    </> 
  )
}
