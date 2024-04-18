
import { useState, useRef, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { HashRouter, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { styled } from "styled-components";
import { Link } from 'react-router-dom'

const backUrl = 'http://localhost:3000';

const Svg = styled.svg`
width: 2em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
`

const Circule = styled.circle`
fill: none;
stroke: hsl(0, 0%, 0%);
stroke-width: 2;
stroke-dasharray: 1, 200;
stroke-dashoffset: 0;
stroke-linecap: round;
animation: dash4 1.5s ease-in-out infinite;
`

export const Cadastros = (props) => {


    const navigate = useNavigate()
    const ref = useRef('')

    const [Entrar, setEntrar] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErro, setEmailError] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const [showPassword, setShowPassword] = useState(false)
    const [Show, setSegundo] = useState(false)

    //Email
    const emailCharde = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setEmailError(false);
        setEmailError(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail));
        setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail));
        setEmail(event.target.value);
    };
    const handleBlurEmail = () => {
        setIsEmailTouched(true);
    }

    //Senha
    const senhaCharde = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordError(false);
        setPasswordError(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword));
        setPasswordValid(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword));
        setPassword(event.target.value);

    };

    const handleBlurSenha = () => {
        setIsPasswordTouched(true);
    };

    //Confirmação de senha
    const ConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setIsValid(true);
    };

    const [cadastroValues, setCadastroValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleBlur = () => {
        if (password !== confirmPassword) {
            setIsValid(false);
        }
    };

    //Confirmação de Formulario copleto / validação para prosseguir tela 
    const HandleClick = () => {
        if (props.Titulo === 'Entrar') {
            handleLogin();
        }
        else if (props.Titulo === 'Cadastrar-se') {
            handleCadastro();
        }
    }

    axios.defaults.withCredentials = true;

    const handleLogin = () => {
        if (emailValid === (true) && passwordValid === (true)) {
            const values = { email: cadastroValues.email, password: cadastroValues.password }
            axios.post(`${backUrl}/login`, values)
                .then(res => {
                    if (res.data.Status === 'Success') {
                        const username = `username=${res.data.Username}; SameSite=Lax;`;
                        const userId = `user_id=${res.data.UserId}; SameSite=Lax;`;
                        const token_front = `token_front=${res.data.Token}; SameSite=Lax;`;
                        const userEmail = `email=${res.data.Email}; SameSite=Lax;`;

                        document.cookie = username;
                        document.cookie = userId;
                        document.cookie = token_front;
                        document.cookie = userEmail;

                        if (res.data.Login === true) {
                            setCarregando(true);
                            setTimeout(() => {
                                navigate('/dados');
                            }, 2000);
                        } else {
                            setCarregando(true);
                            setTimeout(() => {
                                navigate('/Inicio');
                            }, 2000);
                        }
                    } else {
                        alert(res.data.Error);
                    }
                })
                .catch(err => console.log(err))

        } else if (emailValid === (false) && passwordValid === (true)) {
            toast.error('Ops!! Insira um E-mail')
        } else if (emailValid === (true) && passwordValid === (false)) {
            toast.error('Ops!! Insira uma senha')
        } else {
            toast.error('Insira uma senha e e-mail!')
        }

    };

    const handleCadastro = () => {
        if (emailValid === (true) && passwordValid === (true) && password === confirmPassword) {
            axios.post(`${backUrl}/register`, cadastroValues)
                .then(res => {
                    if (res.data.Status === 'Success') {
                        setCarregando(true);
                        setTimeout(() => {
                            navigate('/entrar');
                        }, 2000);
                    } else {
                        toast.error(res.data.Error);
                    }
                })
                .catch(err => toast.error(err));
        }

        else if (emailValid === (false) && passwordValid === (true) && password === confirmPassword) {
            toast.error('Preencha o seu email!')
        }

        else if (emailValid === (true) && passwordValid === (false) && password === confirmPassword) {
            toast.error('Preencha sua senha!')
        }

        else if (emailValid === (true) && passwordValid === (false) && password !== confirmPassword) {
            toast.error('Senhas não estão iguais!')
        }

        else if (emailValid === (true) && passwordValid === (true) && password !== confirmPassword) {
            toast.error('Preencha os campos de validação de senha!')
        }

        else if (emailValid === (false) && passwordValid === (false) && password === confirmPassword) {
            toast.error('Preencha todos os campos!')
        }
    };


    const HandleClickEntrar = () => {
        if (props.Titulo === 'Entrar') {
            setEntrar(true);
            setTimeout(() => {
                navigate('/cadastrar');
            }, 700);
        } else if (props.Titulo === 'Cadastrar-se') {
            setEntrar(true);
            setTimeout(() => {
                navigate('/entrar');
            }, 700);
        };
    }

    //Animação para ver senha 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    //Animação para ver confirmação de senha 
    const SegundoShow = () => {
        setSegundo(!Show);
    };

    let contagemEntrada = 0

    useEffect(() => {
        const Logout = () => {
            const resetUser = "username=; SameSite=Lax;"
            const resetUserId = "user_id=; SameSite=Lax;"
            document.cookie = resetUser;
            document.cookie = resetUserId;
        }

        if (contagemEntrada === 0) {
            contagemEntrada++;
            Logout();
        }
    }, [])

    return (
        <>
            {Entrar ?
                <div >

                </div>
                : null
            }

            <header className={`flex flex-col gap-4 justify-center p-4 items-center max-w-sm rounded-2xl border-8 z-30
            bg-${props.Titulo === 'Entrar' && "orange-50"}
            border-${props.Titulo === 'Entrar' && "orange-200"}
            bg-${props.Titulo === 'Cadastrar-se' && "green-50"}
            border-${props.Titulo === 'Cadastrar-se' && "green-200"}
            `}
            >
                <img src="src/assets/Logo/LogoMarca.ico" alt="" className="w-16" />
                <div className=" flex flex-col  h-auto">

                    <h1 className="text-3xl flex font-bold">
                        {props.Titulo}
                    </h1>

                    <h2 className="text-sm">
                        {props.Descrição}
                    </h2>

                </div>

                <div className="flex flex-col gap-3 w-full ">

                    {props.Titulo === 'Cadastrar-se' && (
                        <div className="flex flex-row w-auto  border-b-2 border-b-black">
                            <h1 className="flex-none ">Nome:</h1>

                            <input
                                className='px-2 bg-transparent disabled:shadow-none  focus:outline-none focus:text-black'
                                id="nome"
                                name="name"
                                type="text"
                                onChange={e => setCadastroValues({ ...cadastroValues, name: e.target.value })}
                                placeholder='FitFood'
                                required />
                        </div>
                    )}

                    <div>
                        <div className="flex flex-row  items-center border-b-2 border-b-black">
                            <h1 className="w-auto after:content-['*']">Email:</h1>
                            <input
                                className="w-full px-2 bg-transparent disabled:shadow-none  focus:outline-none focus:text-black"
                                id="e_mail"
                                name="email"
                                type="email"
                                placeholder='Email@exemplo.com'
                                value={email}
                                required
                                onChange={e => { emailCharde(e); setCadastroValues({ ...cadastroValues, email: e.target.value }) }}
                                onBlur={handleBlurEmail} />
                        </div>
                        {email && (
                            <div>
                                {isEmailTouched && emailErro && (
                                    <p className="">
                                        Por Favor, insira um Email valido.
                                    </p>
                                )}
                            </div>
                        )}

                    </div>

                    <div className='flex flex-row justify-center items-center border-b-2 border-b-black'>
                        <label htmlFor="senha" className="w-auto">Senha:</label>

                        <input
                            className="w-full px-2 bg-transparent disabled:shadow-none  focus:outline-none focus:text-black"
                            type={showPassword ? 'text' : 'password'}
                            id="senha"
                            name="password"
                            required
                            placeholder='Senha'
                            value={password}
                            onChange={e => { senhaCharde(e); setCadastroValues({ ...cadastroValues, password: e.target.value }) }}
                            onBlur={handleBlurSenha}
                        />

                        <button
                            className="w-auto focus:outline-none "
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? <FaEye className="w-4" /> : <FaEyeSlash className="w-4" />}
                        </button>

                    </div>

                    <div>
                        {password && (
                            <div>
                                {isPasswordTouched && passwordError && (
                                    <p className="font-medium text-red-600 text-sm">
                                        <span className=" font-semibold"> A senha deve conter pelo menos </span><span className="marker:text-red-900 list-disc  space-y-1">
                                            <li> Uma letra Minuscula</li>
                                            <li> Uma letra Maiuscula</li>
                                            <li> Um Numero </li>
                                        </span>
                                    </p>
                                )}

                            </div>
                        )}

                    </div>
                    {props.Titulo === 'Entrar' && (
                        <a href="" className="-mt-4 text-[#FF4608] text-xs w-full h-auto underline decoration-solid decoration-1 font-semibold hover:text-[#FF4608]">Esqueci minha senha!</a>
                    )}
                    <div>
                        {props.Titulo === 'Cadastrar-se' && (
                            <div>
                                <div className="flex flex-col justify-center items-center border-b-2 border-b-black">

                                    <div className="w-full flex flex-row items-center ">

                                        <h1 className="flex-none ">Confirmar Senha:</h1>

                                        <input
                                            className="flex-auto w-full px-2 bg-transparent disabled:shadow-none  focus:outline-none focus:text-black"
                                            type={Show ? 'text' : 'password'}
                                            placeholder='Senha'
                                            value={confirmPassword}
                                            onChange={ConfirmPasswordChange}
                                            onBlur={handleBlur} />

                                        <button
                                            className="flex-auto focus:outline-none"
                                            onClick={SegundoShow}
                                        >
                                            {Show ? <FaEye className="w-4" /> : <FaEyeSlash className="w-4" />}
                                        </button>

                                    </div>



                                </div>
                                {!isValid && <p className="mb-2 font-semibold text-red-600 text-sm ">As senhas não coincidem.</p>}
                            </div>
                        )}



                    </div>

                </div>



                <div className='w-full'>

                    {props.Titulo === 'Entrar' && (
                        <button className={`grow w-full bg-orange-600
                 hover:text-white px-6 py-2 rounded-md  ease-in-out duration-300`}
                            onClick={HandleClick}
                            disabled={carregando}
                        >
                            {carregando
                                ? <div className="flex flex-row justify-center items-center gap-3">Carregando
                                    <Svg viewBox="25 25 50 50">
                                        <Circule r="20" cy="50" cx="50"></Circule>
                                    </Svg>
                                </div>
                                : props.Titulo === 'Cadastrar-se'
                                    ? 'Cadastrar'
                                    : props.Titulo === 'Entrar'
                                        ? 'Entrar'
                                        : null}
                        </button>
                    )}

                    {props.Titulo === 'Cadastrar-se' && (
                        <button className={`grow w-full  bg-green-600
                 hover:text-white px-6 py-2 rounded-md  ease-in-out duration-300`}
                            onClick={HandleClick}
                            type="submit"
                            disabled={carregando}
                        >
                            {carregando
                                ? <div className="flex flex-row justify-center items-center gap-3">Carregando
                                    <Svg viewBox="25 25 50 50">
                                        <Circule r="20" cy="50" cx="50"></Circule>
                                    </Svg>
                                </div>
                                : props.Titulo === 'Cadastrar-se'
                                    ? 'Cadastrar'
                                    : props.Titulo === 'Entrar'
                                        ? 'Entrar'
                                        : null}
                        </button>
                    )}



                </div>

                <div className='w-full '>
                    {props.Titulo === 'Cadastrar-se' && ('Ja tenho conta ')} {props.Titulo === 'Entrar' && ('Ainda não tenho conta ')}

                    {props.Titulo === 'Entrar' && (
                        <Link onClick={HandleClickEntrar} >
                            <a href=""
                                disabled={Entrar}
                                className="text-[#FF4608] hover:text-[#00b71c] underline decoration-solid decoration-1 font-semibold">
                                Cadastrar.
                            </a>
                        </Link>
                    )}
                    {props.Titulo === 'Cadastrar-se' && (
                        <Link onClick={HandleClickEntrar}>
                            <a href=""
                                disabled={Entrar}
                                className="text-[#00b71c] hover:text-[#FF4608] underline decoration-solid decoration-1 font-semibold">
                                Entrar.
                            </a>
                        </Link>
                    )}
                </div>

                {props.Titulo === 'Entrar' && (
                    <div className='w-full flex justify-center items-center '>
                        <div className={`flex-1 h-1  bg-gradient-to-l rounded-full from-[#FF4608]`}></div>
                        <span className="w-auto mx-2">OU</span>
                        <div className="flex-1 h-1 bg-gradient-to-r rounded-full from-[#FF4608] "></div>
                    </div>
                )}
                {props.Titulo === 'Cadastrar-se' && (
                    <div className='w-full flex justify-center items-center '>
                        <div className={`flex-1 h-1  bg-gradient-to-l rounded-full from-[#00b71c]`}></div>
                        <span className="w-auto mx-2">OU</span>
                        <div className="flex-1 h-1 bg-gradient-to-r rounded-full from-[#00b71c] "></div>
                    </div>
                )}



                <div className='flex flex-row w-full justify-center gap-8 items-center'>

                    <button className="w-auto flex flex-row items-center  gap-2 bg-gradient-to-r p-2 rounded-3xl from-cyan-600 to-blue-700 drop-shadow-lg shadow-black"><FaFacebook className="w-6 "></FaFacebook></button>
                    <button className="w-auto flex flex-row items-center gap-2 bg-gradient-to-r p-2 rounded-3xl from-red-600 to-red-700 drop-shadow-lg shadow-black"><FaGoogle className="w-6 "></FaGoogle> </button>

                </div>
                <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            </header>

        </>


    )

}