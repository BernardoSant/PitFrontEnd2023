import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export const CadastroCasa = () => {
    const [email, setEmail] = useState('');
    const [emailErro, setEmailError] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [Show, setSegundo] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid ] = useState(true);


    const emailCharde = (Event) => {
         const newEmail = Event.target.value;
         setEmail(newEmail);
         setEmailError(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail));
         setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail));
       };

       const senhaCharde = (event) => {
         const newPassword = event.target.value;
         setPassword(newPassword);
         setPasswordError(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword));
         setPasswordValid(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword));
         setIsValid(newPassword === confirmPassword);
       };

    const toggleShowPassword = () => {
         setShowPassword(!showPassword);
    };
    const SegundoShow = () => {
         setSegundo(!Show);
    };

    const ConfirmPasswordChange = (e) => {
         setConfirmPassword(e.target.value);
         setIsValid(password === e.target.value);
    };

    return (

        <div className=" bg-neutral-300  h-[50em] w-[100%] flex items-center justify-center">

            <div className=" bg-orange-600 h-4/5 w-[60%] rounded-lg  shadow-md shadow-black ">
                <div className=' grid grid-cols-2 h-[100%] '>

                    <div className="rounded-t-lg flex basis-1/4 items-center px-4">

                        <span className="flex-auto text-center ">
                            <p className=" text-4xl font-medium mb-12">Você já e quase um dos nossos contribuentes.</p>
                            <p className="text-base">Com a nossa plataforma, você vai poder almentar suas demanda de alimentações saudaveis. Não perca tempo e faça parte dessa comunidade de bem-estar.</p>
                        </span>

                    </div>

                    <div className=" rounded-r-lg bg-teal-100 ">
                        <div className="flex justify-center items-center mt-[25%]  basis-11/12">

                            <div className=" text-black ">
                                <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                    Email
                                </span>

                                <input id="email" className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                    focus:invalid:border-red-500 focus:invalid:ring-red-500 ' type="email" placeholder='Email@exemplo.com' value={email} onChange={emailCharde} />

                                {emailErro && (
                                    <p className="mb-2 font-semibold text-red-600 text-sm">
                                        Por Favor, insira um Email valido.
                                    </p>
                                )}
                                {emailValid && (
                                    <p className="mb-2 font-semibold text-green-600 text-sm">
                                        Email válido.
                                    </p>
                                )}

                                <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                    Senha
                                </span>
                                <dir className='flex mb-4'>
                                    <input id="senha" className='peer px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm placeholder-gray-400 rounded-lg
                                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                    focus:invalid:border-red-500 focus:invalid:ring-red-500 ' type={showPassword ? 'text' : 'password'} placeholder='Senha' value={password} onChange={senhaCharde}
                                    />

                                    <button
                                        className="ml-2 focus:outline-none"
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? <FaEye className="w-8" /> : <FaEyeSlash className="w-8" />}
                                    </button>
                                </dir>



                                {passwordError && (
                                    <p className="mb-4 font-medium text-red-600 text-sm">
                                        <span className=" font-semibold"> A senha deve conter pelo menos </span><span className="marker:text-red-900 list-disc  space-y-1">
                                            <li> Uma letra Minuscula</li>
                                            <li> Uma letra Maiuscula</li>
                                            <li> Um Numero </li>
                                        </span>
                                    </p>
                                )}
                                {passwordValid && (
                                    <p className="mb-2 font-semibold text-green-600 text-sm">
                                        Senha válida.
                                    </p>
                                )}

                                <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                    Confirme senha:
                                </span>

                                <dir className='flex mb-2'>
                                    <input id="confirmPassword" className='peer px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm placeholder-slate-400 rounded-lg
                                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                    focus:invalid:border-red-500 focus:invalid:ring-red-500 ' type={Show ? 'text' : 'password'} placeholder='Senha' value={confirmPassword} onChange={ConfirmPasswordChange}
                                    />

                                    <button
                                        className="ml-2 focus:outline-none"
                                        onClick={SegundoShow}
                                    >
                                        {Show ? <FaEye className="w-8" /> : <FaEyeSlash className="w-8" />}
                                    </button>
                                </dir>

                                {!isValid && <p className="mb-2 font-semibold text-red-600 text-sm ">As senhas não coincidem.</p>}



                                <p className='mb-6 font-medium text-xs flex items-center '>
                                    <span className="flex items-center grow"><input type="checkbox" className="w-6 checked:bg-orange-600 " /> Relembrar-me </span >
                                    <span className="flex-auto grow text-right"><a href="#" >Esqueceu a Senha?</a></span></p>
                                <p className='mb-4 font-bold text-base flex items-center text-center '>
                                    <a href="#" className="grow flex-auto border border-orange-600 ml-2 px-6 py-2 rounded-md hover:scale-95 ease-in-out duration-300 ">Cadastrar-se</a>
                                </p>




                                <div className="bg-zinc-400">

                                </div>
                                <div></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )

}