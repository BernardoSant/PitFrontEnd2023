import { Link } from 'react-router-dom';
import { TbArticle, TbArticleFilledFilled } from "react-icons/tb";
import { SlBadge, SlUser, SlLogout } from "react-icons/sl";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

    const [Show, setSegundo] = useState(false)
    const [Menu, setMenu] = useState(false)

    const navigate = useNavigate();

    const userId = document.cookie.split("; ").find((row) => row.startsWith("user_id="))?.split("=")[1];

    const value = userId;

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
            console.log("Authentication passed")
        } else {
            navigate('/entrar');
        }
    }, [value])


    const SegundoShow = () => {
        setSegundo(!Show);
        setMenu(!Menu);
    };

    return (
        <><nav className="h-[10vh] w-full bg-white border-b-2 border-gray-200 flex flex-row justify-between items-center px-8 z-50 fixed">

            <Link to={'/inicio'}><img src="src/assets/Logo/LogoMarca.ico" alt="" className="w-12" /></Link>

            <button
                className="text-orange-600 drop-shadow-2xl shadow-black"
                onClick={SegundoShow}
            >
                {Show ? <TbArticleFilledFilled className="text-3xl " /> : <TbArticle className="text-3xl" />}
            </button>

        </nav>

            {Menu && (
                <div className='w-full h-full absolute duration-500'>

                    <div className='w-full h-full bg-slate-500 opacity-60 absolute hidden md:block z-0'></div>

                    <div className='w-full h-full flex justify-end items-center '>

                        <div className='bg-white z-40 h-full w-full md:w-52 pt-[11vh] flex flex-col gap-3 items-center'>

                            <Link to={'/perfil'} className='w-full'>
                                <div className="group relative flex flex-row justify-center items-center gap-x-6 p-1 w-full duration-400 hover:text-green-300 cursor-pointer hover:bg-gray-100">

                                    <SlUser className='w-4 md:h-6 md:w-6 text-gray-600 group-hover:text-[#00b71c]'></SlUser>

                                    <p className="font-bold text-gray-900 group-hover:text-[#00b71c]">
                                        Perfil
                                    </p>

                                </div>
                            </Link>

                            <Link className='w-full' to={'/planos'}>
                                <div className="group relative flex flex-row justify-center items-center gap-x-6 p-1 w-full duration-400 hover:text-green-300 cursor-pointer hover:bg-gray-100">

                                    <SlBadge className='w-4 md:h-6 md:w-6 text-gray-600 group-hover:text-[#00b71c]'></SlBadge>

                                    <p className="font-bold text-gray-900 group-hover:text-[#00b71c]">
                                        Planos
                                    </p>

                                </div>
                            </Link>

                            <Link className='w-full' to={'/inicio'}>
                                <div className="group relative flex flex-row justify-center items-center gap-x-6 p-1 w-full duration-400 hover:text-green-300 cursor-pointer hover:bg-gray-100">

                                    <svg className="h-4 w-4 md:h-6 md:w-6   text-gray-600 group-hover:text-[#00b71c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>

                                    <p className="font-bold text-gray-900 group-hover:text-[#00b71c]">
                                        Inicio
                                    </p>

                                </div>
                            </Link>

                            <div className="group relative flex flex-row justify-center items-center gap-x-6 p-1 w-full duration-400 hover:text-green-300 cursor-pointer hover:bg-gray-100">

                                <Link to='/entrar' className="font-bold flex gap-x-6 text-gray-900 group-hover:text-[#00b71c]">
                                    <SlLogout className='w-4 md:h-6 md:w-6 text-gray-600 group-hover:text-[#00b71c]'></SlLogout>
                                    Sair
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}