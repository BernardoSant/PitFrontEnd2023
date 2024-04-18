import { useState } from 'react';
import { InicioLand } from '../Componentes/LandinPage/Inicio';
import { ParceirosLand } from '../Componentes/LandinPage/Parceiros';
import { NutriLand } from '../Componentes/LandinPage/Nutri';
import { NavBar } from '../Componentes/LandinPage/NavBarLanding'
import { Link } from 'react-router-dom'
import { Footer } from '../Componentes/Footer';



export const Landingpage = () => {


    const [Inicio, setInicio] = useState(true); // Início é exibido por padrão
    const [Organizacao, setOrganizacao] = useState(false);
    const [Nutri, setNutri] = useState(false);
   

    const handleMostrarInicio = () => {
        setInicio(true);
        setOrganizacao(false);
        setNutri(false);
    };
    const handleMostrarOrganizacao = () => {
        setInicio(false);
        setOrganizacao(true);
        setNutri(false);
    };
    const handleMostrarNutri = () => {
        setInicio(false);
        setOrganizacao(false);
        setNutri(true);
    };







    return (<>
        <NavBar></NavBar>
        <dir className="bg-orange-50">

            <header className="w-auto h-auto px-7 flex-col flex gap-2 justify-center items-start md:w-1/2 md:px-20 py-10 pt-20" >
                <img src="src/assets/Logo/LogoMarca.ico" alt="" className='w-16' />
                <h1 className="mb-2 text-2xl md:text-3xl w-auto md:pr-32">
                    Fit Food é saúde!
                </h1>

                <h1 className="w-auto text-sm md:pr-16">
                    A nova plataforma que permite realizar dietas e aprimorar a saúde com mais facilidade.

                </h1>

                <div className="flex flex-col w-full  md:flex-row justify-left items-center gap-4 mt-3 ">

                    <Link to='/entrar' className="flex justify-center border-2 w-full bg-orange-500 border-orange-500 text-white text-xs font-semibold rounded-[4px] p-2 hover:bg-orange-800 ">
                        Entrar
                    </Link>


                    <Link to='/entrar' className="flex justify-center border-2 w-full border-orange-500 rounded-[4px] text-xs font-semibold  p-2 text-orange-700 hover:bg-[#0000001c]">
                        Comprar Plano
                    </Link>
                </div>

                <h1 className="text-xs mt-4 text-orange-700 font-medium">  Inscreva-se para obter a versão gratuita do FitFood</h1>

            </header>

            <header className=" px-3 md:px-16 mt-10 inline-block h-auto  drop-shadow-xl shadow-black">

                <div className="">
                    <div className="flex justify-between  w-full text-[10px] md:text-base  md:gap-6">

                        <button className={`bg-${Inicio ? 'white' : ""} text-${Inicio ? "orange-600" : 'black'} border-2 border-white w-full h-auto py-3 md:py-5 px-2 rounded-t-2xl drop-shadow-xl shadow-black z-${Inicio ? '10' : '0'} duration-500`}
                            onClick={handleMostrarInicio}>
                            Para Página Inicial
                        </button>

                        <button
                            className={` bg-${Organizacao ? 'white' : ""} text-${Organizacao ? "orange-600" : 'black'} border-2 border-white w-full h-auto py-3 md:py-5 px-2
                         rounded-t-2xl drop-shadow-2xl shadow-black  z-${Organizacao ? '10' : '0'} duration-500`}
                            onClick={handleMostrarOrganizacao}>
                            Para Restaurantes
                        </button>

                        <button className={`bg-${Nutri ? 'white' : ""} text-${Nutri ? "orange-600" : 'black'} border-2 border-white w-full h-auto py-3 md:py-5 px-2 rounded-t-2xl drop-shadow-xl shadow-black z-${Nutri ? '10' : '0'} duration-500`}
                            onClick={handleMostrarNutri}>
                            Para Nutricionistas
                        </button>
                    </div>
                </div>

                <header className="bg-white relative z-10  justify-center items-center rounded-b-2xl ">
                    {Inicio && (
                        <div>
                            <InicioLand />
                        </div>
                    )}



                    {Organizacao && (
                        <div className='bg-white  z-10 flex justify-center items-center pt-12 rounded-b-2xl '>

                            <ParceirosLand />

                        </div>
                    )}



                    {Nutri && (
                        <div className='bg-white  z-10 flex justify-center items-center pt-12 rounded-b-2xl '>

                            < NutriLand />

                        </div>
                    )}

                    <div className='flex flex-col md:flex-row gap-5 h-auto justify-center items-center pt-10 pb-16'>

                        <button className={`bg-${Inicio ? "orange-500" : 'white'} border-2  border-orange-500 h-auto w-auto inline-block p-2 px-5 rounded-full drop-shadow-md  z-${Inicio ? '10' : '0'} text-${Inicio ? 'white' : 'black'} duration-500`}
                            onClick={handleMostrarInicio}>
                            Para Página Inicial
                        </button>

                        <button className={`bg-${Organizacao ? 'orange-500' : "white"} border-2  border-orange-500 h-auto w-auto inline-block p-2 px-5 rounded-full drop-shadow-md  z-${Organizacao ? '10' : '0'} text-${Organizacao ? 'white' : 'black'} duration-500`}
                            onClick={handleMostrarOrganizacao}>
                            Para Organizações
                        </button>

                        <button className={`bg-${Nutri ? 'orange-500' : "white"} border-2  border-orange-500 h-auto w-auto inline-block p-2 px-5 rounded-full drop-shadow-md  z-${Nutri ? '10' : '0'} text-${Nutri ? 'white' : 'black'} duration-500`}
                            onClick={handleMostrarNutri}>
                            Para Nutri
                        </button>


                    </div>
                </header>


                <div className='h-52'></div>

            </header>
        </dir>

        <Footer></Footer>
    </>
    )
}