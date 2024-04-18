
import { Link } from 'react-router-dom'

import { PiUserCirclePlusLight } from "react-icons/pi";


export const NavBar = () => {



    return (

        <nav className=" w-full  flex-col flex justify-end items-center fixed h-auto z-50    ">

            {/* NAVBAR DO SISTEMA */}
            <dir className="bg-white w-full p-2 px-7 rounded-lg shadow-xl">

                <div className="flex flex-row items-between justify-between w-fulllg:border-b-0 ">


                    <Link to="/inicio">
                        <img src="src/assets/logo/Logo.ico" alt="" className='w-44' />
                    </Link>




                    <Link to='/entrar'>
                        <PiUserCirclePlusLight className='text-4xl'></PiUserCirclePlusLight>
                    </Link>





                </div>

               
            </dir>
           
        </nav>
    )

}