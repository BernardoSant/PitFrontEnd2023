import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi"
import { BiSearchAlt2 } from "react-icons/bi"





export const NavBar = () => {
    const [Abrir, setAbrir] = useState(false);



    const [showAngle, setShowAngle] = useState(false)

    const toggleShowAngle = () => {
        setShowAngle(!showAngle);
        setAbrir(!Abrir);
    };

    
    return (

        <nav className=" bg-white w-full fixed py-2 pr-3">
            {/* NAVBAR DO SISTEMA */}

            <div className="flex flex-row items-center justify-between w-full pr-6 lg:border-b-0 mx-4">

                <nav className='flex items-center gap-3'>

                    <div className="text-md font-bold  lg:flex-grow inline-block">
                        <button
                            className=" rounded flex items-center w-7 " type={showAngle ? 'ver' : 'nver'} onClick={toggleShowAngle}  >
                            <FaBars className='w-full h-full'></FaBars>
                        </button>
                    </div>



                    <div className="flex flex-shrink-0 w-6   text-[#00b71c]">
                        <Link to="/inicio">
                            <span className="font-Archivo text-xl lg:text-2xl">Fit<span className='text-[#FF4608] font-Archivo'>Food</span></span>
                        </Link>
                    </div>
                </nav>
                <div className='flex gap-2  justify-end'>
                    <div className=' flex items-center justify-center'>
                        <BiSearchAlt2 className="w-6 h-full"></BiSearchAlt2>
                    </div>

                    <div className=' flex items-center justify-center'>
                        <FaRegUserCircle className='w-6 h-full'></FaRegUserCircle>
                    </div>

                    <div className='flex flex-grow items-center justify-center'>

                        <HiShoppingBag className='w-7 h-full'></HiShoppingBag>

                        <div className='flex flex-col text-xs'>

                            <div className='flex-1'>R$ 0,00</div>

                            <div className='flex-1'>0 itens</div>

                        </div>

                    </div>
                </div>
            </div>
            {/* Barra de pesquisa 
                <label className="relative lg:block flex-1 hidden">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center  pl-2">
                        <FaLeaf></FaLeaf>
                    </span>
                    <input className="placeholder:italic block bg-white text-sm  border border-slate-300 rounded-md py-[3px] pl-9 shadow-sm focus:outline-none focus:border-[#FF4608] focus:ring-[#FF4608] focus:ring-1 sm:text-sm" placeholder="Buscar por iten ou loja" type="text" name="search" />
                </label>*/}


            {/* NavBar para celular */}
            {Abrir && (
                <div className="absolute left-1/2 z-10 mt-2 flex w-screen -translate-x-1/2 ">
                    <div className="w-screen max-w-fit flex-auto overflow-hidden rounded-br-lg  bg-white text-xs md:text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">

                        <div className="p-4">

                            <Link to="/inicio">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center  hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6   text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                            <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <a href="#" className="font-bold text-gray-900">
                                            Inicio
                                            <span className="absolute inset-0"></span>
                                        </a>
                                    </div>

                                </div>
                            </Link>

                            <Link to="">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6  text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                        </svg>
                                    </div>

                                    <div>
                                        <a href="#" className="font-semibold text-gray-900">
                                            Nutricionista
                                            <span className="absolute inset-0"></span>
                                        </a>

                                    </div>

                                </div>
                            </Link>

                            <Link to="">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6  text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                        </svg>
                                    </div>

                                    <div>
                                        <a href="#" className="font-semibold text-gray-900">
                                            Restaurante
                                            <span className="absolute inset-0"></span>
                                        </a>

                                    </div>

                                </div>
                            </Link>

                            <Link to="">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6  text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <a href="#" className="font-semibold text-gray-900">
                                            Pedido
                                            <span className="absolute inset-0"></span>
                                        </a>

                                    </div>
                                </div>
                            </Link>

                            <Link to="/planos">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6  text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>


                                    <div>
                                        <a href="#" className="font-semibold text-gray-900">
                                            Planos
                                            <span className="absolute inset-0"></span>
                                        </a>

                                    </div>

                                </div>
                            </Link>

                            <Link to="">
                                <div className="group relative flex gap-x-6 rounded-lg p-1 items-center hover:bg-gray-50">

                                    <div className="mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg className="h-4 w-4 md:h-6 md:w-6  flex-none text-gray-400 group-hover:text-[#00b71c] " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" />
                                        </svg>
                                    </div>


                                    <div>
                                        <a href="#" className="font-semibold text-gray-900">
                                            Contato
                                            <span className="absolute inset-0"></span>
                                        </a>

                                    </div>

                                </div>
                            </Link>

                        </div>

                        
                    </div>
                </div>

            )}


            {/* 
          
               <div className='relative ml-3'>
                <div>
                    <button type='button' className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id="user-menu-button" aria-expanded="false" aria-haspopup="true"> ola</button>
                </div>
                <div className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
                
                </div>
               </div>
        */}
        </nav>
    )

}