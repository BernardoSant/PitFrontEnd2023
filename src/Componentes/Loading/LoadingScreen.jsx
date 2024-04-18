
import {  useAnimation } from 'framer-motion';
import { useEffect } from 'react';




export const LoadingScreen = () => {

    const controls = useAnimation();

    useEffect(() =>{
        controls.start({
            opacity:1
        });
    })
    return (
        <>
            <div className=" w-full h-[100vh] flex justify-center items-center bg-orange-200">
                <div className="flex flex-row w-1/3 md:w-full justify-center items-center "
                
                >
                  <img src="src/assets/Logo/LogoMarca.ico" alt="" className="w-1/2 md:w-1/12"/>
                  <img src="src/assets/Logo/Nome.ico" alt="" />
                </div>
            </div>
        </>
    );
};
