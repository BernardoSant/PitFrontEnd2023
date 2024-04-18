import { NavBar } from '../Componentes/Navbars/Navbar'
import { TabelaPlanos } from '../Componentes/TabelaPlanos'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const Planos = () => {

  const [name, setName] = useState('');
  const navigate = useNavigate();

  const username = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];

  const value = username;

  useEffect(() => {
    function checkACookieExists() {
      if (document.cookie.split(";").some((item) => item.trim().startsWith("token_front="))) {
        if (value != '') {
          return true;
        }
      }
      return false;
    }

    if (checkACookieExists()) {
      setName(username);
    } else {
      navigate('/entrar');
    }
  }, [value, username])

  // const planoSelecionado = "Free";

  return (
    <>
      <NavBar />

      <div className='flex flex-col justify-center items-center p-4 h-[100vh] pt-[12vh]'>
        <div className='flex flex-col items-center mb-4'>
          <h1 className='text-green-500 font-bold text-3xl pb-2'>Planos</h1>
          <p>Escolha o plano de sua preferência e comece sua vida mais <span className='text-orange-600 font-bold'>FIT</span>.</p>
        </div>
        <TabelaPlanos />
      </div>
    </>

  )
}