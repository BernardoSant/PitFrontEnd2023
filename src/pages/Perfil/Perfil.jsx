import { Perfil } from "../../Componentes/Perfil/Perfil"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const PerfilUser = () => {
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


    return (
        <div className="h-[100vh] w-full bg-orange-500 flex justify-center items-center xl:py-28 xl:px-48 ">
        <Perfil
        Img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4AQNIcLRvXTLoOVfM_IhYAhnew0I_oFLlA&usqp=CAU'></Perfil>

    </div>
    )
}
