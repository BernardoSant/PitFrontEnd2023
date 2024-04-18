import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { HiPencilAlt } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { IoIosMan } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegSave, FaHouseUser, FaAddressBook } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { GoArrowLeft } from "react-icons/go";
import { BsFillChatRightDotsFill, BsFillCalendarWeekFill, BsBoxArrowLeft } from "react-icons/bs";
import { toast } from 'react-toastify'

export const Perfil = (props) => {
    const [Perfil, setPerfil] = useState(true); // Início é exibido por padrão
    const [Calendario, setCalendario] = useState(false);
    const [Amamnese, setAmamnese] = useState(false);
    const [Chat, setChat] = useState(false);
    const [Ajuda, setAjuda] = useState(false);
    const [Log, setLog] = useState(false);

    const navigate = useNavigate();

    const [Nome, setNome] = useState('');
    const [Genero, setGenero] = useState('');
    const [Idade, setIdade] = useState(0);
    const [Sangue, setSangue] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Altura, setAltura] = useState(0);
    const [Peso, setPeso] = useState(0);
    const [Alergia, setAlergia] = useState('');
    const [Rua, setRua] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Numero, setNumero] = useState(0);
    const [Complemento, setComplemento] = useState('');
    const [editando, setEditando] = useState(false);
    const [cpf, setCpf] = useState('');

    const [cep, setCep] = useState("");


    const pdfUrl = 'https://imgv2-2-f.scribdassets.com/img/document/342108625/original/e4456e866d/1693510342?v=1';

    const FromEdit = () => {
        setEditando(true);
    };

    const CancelarEdit = () => {
        setEditando(false);
    };

    const SalvarDados = () => {
        // Faça algo com os novos valores aqui, como enviá-los para um servido
        setEditando(false);
    }

    const handleDownload = () => {
        // Crie um elemento "a" para simular o download do arquivo
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'seuarquivo.pdf';
        link.click();
    };


    const handleMostrarPerfil = () => {
        setPerfil(true);
        setCalendario(false);
        setAmamnese(false);
        setChat(false);
        setAjuda(false);
        setLog(false);
        setEditando(false);
    };

    const handleMostrar2 = () => {
        setPerfil(false);
        setCalendario(true);
        setAmamnese(false);
        setChat(false);
        setAjuda(false);
        setLog(false);
        setEditando(false);
    };

    const handleMostrar3 = () => {
        setPerfil(false);
        setCalendario(false);
        setAmamnese(true);
        setChat(false);
        setAjuda(false);
        setLog(false);
        setEditando(false);
    };

    const handleMostrar4 = () => {
        setPerfil(false);
        setCalendario(false);
        setAmamnese(false);
        setChat(true);
        setAjuda(false);
        setLog(false);
        setEditando(false);
    };

    const handleMostrarAjuda = () => {
        setPerfil(false);
        setCalendario(false);
        setAmamnese(false);
        setChat(false);
        setAjuda(true);
        setLog(false);
        setEditando(false);
    };

    const date = new Date();

    const todaysDate = date.toLocaleDateString();

    const [idPlano, setIdPlano] = useState(0);
    const [dataInicio, setDataInicio] = useState('');
    const userId = document.cookie.split("; ").find((row) => row.startsWith("user_id="))?.split("=")[1];

    useEffect(() => {
        axios.get(`http://localhost:3000/profiles/${userId}`)
            .then(res => {
                if (res.data.length <= 0) {
                    alert('Sem dados do perfil');
                } else {
                    console.log(res.data);
                    const profileData = res.data[0];
                    setNome(profileData.nome)
                    setCpf(profileData.cpf)
                    setTelefone(profileData.telefone)
                    setGenero(profileData.sexo)
                    setIdade(profileData.idade)
                    setSangue(profileData.sangue)
                    setAltura(profileData.altura)
                    setPeso(profileData.peso)
                    setAlergia(profileData.alergias)
                    setRua(profileData.rua)
                    setBairro(profileData.bairro)
                    setNumero(profileData.numero)
                    setComplemento(profileData.complemento)
                    setCep(profileData.cep)
                }
            })
            .catch(err => {
                toast.error(err.message);
            });
        axios.get(`http://localhost:3000/planos/${userId}`)
            .then(res => {
                setIdPlano(res.data.Plano);
                setDataInicio(res.data.DataInicio);
            })
            .catch(err => {
                toast.error("Erro ao buscar plano : " + err);
            })
    })

    const dataNova = dataInicio.split('T')[0];
    let [year, month, day] = dataNova.split('-')
    let dataInicial = new Date(+year, +month - 1, +day)
    console.log(dataInicial);
    dataInicial = dataInicial.toLocaleDateString();

    return (
        <div className=" bg-white h-full xl:max-h-screen w-full xl:rounded-2xl flex flex-col shadow-2xl shadow-gray-900">

            <div className="w-full h-[10vh] rounded-t-2xl flex justify-between items-center p-2 px-4" >
                <img src="src/assets/Logo/Logo.ico" alt="" className="w-40" />

                <div className="flex flex-row justify-center items-center gap-2">
                    <img src={props.Img} alt="" className='w-9 h-9 rounded-full' />
                    <p className="font-semibold">{Nome}</p>
                </div>
            </div>

            <div className="flex flex-row w-full h-full">

                <div className="w-40  rounded-bl-2xl flex flex-col justify-between items-center py-6 p-1">

                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <p className={` bg-${Perfil ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                            onClick={handleMostrarPerfil}><FaHouseUser className='w-5' /> Perfil</p>

                        <p className={` bg-${Amamnese ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                            onClick={handleMostrar3}><FaAddressBook className='w-5' />Anamnese</p>

                        <p className={` bg-${Calendario ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                            onClick={handleMostrar2}><BsFillCalendarWeekFill className='w-5' />Calendario</p>


                        <p className={` bg-${Chat ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                            onClick={handleMostrar4}><BsFillChatRightDotsFill className='w-5' />Chat</p>

                    </div>

                    <div className=" w-full flex flex-col justify-center items-center gap-2">

                        <p className={` bg-${Ajuda ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                            onClick={handleMostrarAjuda}><FiHelpCircle className='w-5' />Me Ajuda</p>

                        <Link to='/entrar' className={` bg-${Log ? '[#00b71c]' : ""} drop-shadow-xl px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}
                        ><BiLogOut className='w-5' />Log out</Link>

                        <Link to={'/inicio'} className={` px-2 w-full text-center rounded-md p-1 flex flex-row justify-start items-center cursor-pointer gap-2`}>
                            <GoArrowLeft className='w-5' /> <p>Voltar</p>
                        </Link>

                    </div>
                </div>

                <div className="flex-auto">
                    {Perfil && (<div className='w-full h-full pr-8 px-5 pt-5 pb-4 rounded-br-2xl flex flex-col justify-start items-start gap-3'>

                        <div className='text-2xl'>Meu Perfil</div>

                        <div className='w-full '>
                            <div className='w-full rounded-md flex justify-end  '>
                                <Link to='/dados' className="absolute h-6 w-6 rounded-full bg-[#00b71c] flex justify-center items-center -mt-2 -mr-2 cursor-pointer ">
                                    <span><HiPencilAlt /> </span>
                                </Link>
                                {editando && (
                                    <span className="absolute h-6 w-6 rounded-full bg-red-600 flex justify-center items-center mt-6 -mr-2 cursor-pointer "
                                        onClick={CancelarEdit}><MdOutlineCancel /> </span>)}

                                {editando && (
                                    <span className="absolute h-6 w-6 rounded-full bg-orange-600 flex justify-center items-center mt-14 -mr-2 cursor-pointer "
                                        onClick={SalvarDados}><FaRegSave />  </span>)}
                            </div>

                            <div className='w-full bg-gray-200 h-auto rounded-md  flex flex-row justify-between items-center px-6 py-3 gap-5 '>

                                <div className='flex flex-row gap-3'>
                                    <img src={props.Img} alt="" className='w-16 h-16 rounded-full' />

                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-lg font-medium'>{Nome}</h1>
                                    </div>
                                </div>

                                {/*O (p) na parte de baixo esta so para demostrar um cadastro terar q trocar como nome e usuario*/}
                                <div className=' flex flex-row  w-full justify-center'>

                                    <div className='text-base flex flex-col justify-center items-start  w-36'>
                                        <h1 className='flex flex-row justify-center gap-1'>Sexo: <span className='font-bold'>{editando ? (
                                            <select id="genero" name="genero" value={Genero} onChange={(e) => setGenero(e.target.value)}
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'>
                                                <option value="M">Homem</option>
                                                <option value="F">Mulher</option>
                                            </select>
                                        ) : (
                                            Genero === 'M' ? 'M' : 'F'
                                        )}</span></h1>

                                        <h2 className='flex flex-row justify-center gap-1'>Idade: <span className='font-bold'>{editando ? (
                                            <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="number"
                                                value={Idade}
                                                onChange={(e) => setIdade(e.target.value)}
                                            />
                                        ) : (
                                            Idade
                                        )}</span></h2>

                                        <h3 className='flex flex-row justify-center gap-1'>Sangue: <span className='font-bold'>{editando ? (
                                            <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="text"
                                                value={Sangue}
                                                onChange={(e) => setSangue(e.target.value)}
                                            />
                                        ) : (
                                            Sangue
                                        )}</span></h3>

                                    </div>

                                    <div className='text-base flex flex-col justify-start items-start'>
                                        <h3 className='flex flex-row justify-center gap-1'><p>CPF:</p> <p className='font-bold flex justify-center items-center'>{cpf}</p></h3>
                                        <h3 className='flex flex-row justify-center gap-1'><p>Telefone: </p> <span className='font-bold'>{editando ? (
                                            <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="number"
                                                value={Telefone}
                                                onChange={(e) => setTelefone(e.target.value)}
                                            />
                                        ) : (
                                            Telefone
                                        )}</span></h3>
                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className=' w-full h-auto flex flex-col xl:flex-row gap-4'>


                            <div className='bg-gray-200 h-auto w-full rounded-md flex flex-col justify-center items-start gap-4 p-3'>

                                <div className='text-lg font-medium'>Informações Nutricionais</div>

                                <div className='flex flex-row w-full flex-wrap justify-center items-center h-auto'>

                                    <IoIosMan className='text-[20vh]  text-[#00b71c] ' />

                                    <div className='text-base flex flex-col justify-center items-start gap-3 w-40'>
                                        <h1 className='flex flex-row justify-center gap-1'>Altura: <span className='font-bold'>{editando ? (
                                            <form action=""> <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="number"
                                                value={Altura}
                                                onChange={(e) => setAltura(e.target.value)}
                                            /></form>
                                        ) : (
                                            Altura
                                        )}</span>cm</h1>

                                        <h2 className='flex flex-row justify-center gap-1'>Peso: <span className='font-bold'>{editando ? (
                                            <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="number"
                                                value={Peso}
                                                onChange={(e) => setPeso(e.target.value)}
                                            />
                                        ) : (
                                            Peso
                                        )}</span>Kg</h2>

                                        <h3 className='flex flex-col justify-center gap-1'><p className='flex-1'>Alergias:</p> <span className='font-bold'>{editando ? (
                                            <input
                                                className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                type="text"
                                                value={Alergia}
                                                onChange={(e) => setAlergia(e.target.value)}
                                            />
                                        ) : (
                                            Alergia
                                        )}
                                        </span></h3>

                                    </div>
                                </div>

                            </div>

                            <div className=' h-full w-full  flex flex-col gap-4 justify-center items-center'>


                                <div className='bg-gray-200 w-full h-full rounded-md flex flex-col justify-between items-start p-3'>

                                    <div className='text-lg font-medium'>Plano</div>

                                    <div className='w-full h-auto flex gap-5 flex-row justify-center items-center'>
                                        {
                                            idPlano == 1 ?
                                                <>
                                                    <img src="src/assets/Logo/LogoMarca.ico" alt="" className='w-24' />
                                                    <div className='flex flex-col gap-2'>

                                                        <p className='w-full text-center text-xl font-medium'>Gratis</p>
                                                        <div className=''>
                                                            <h1 className='flex gap-2 text-base'>
                                                                <span>Data de Inicio:</span>
                                                                <span className='font-bold'>{dataInicial}</span>
                                                            </h1>

                                                            <h2 className='flex gap-2 text-base'>
                                                                <span>Data de Cobrança:</span>
                                                                <span className='font-bold'>{todaysDate}</span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </>
                                                : idPlano == 2 ?
                                                    <>
                                                        <img src="src/assets/Logo/FitPrata.ico" alt="" className='w-24' />
                                                        <div className='flex flex-col gap-2'>

                                                            <p className='w-full text-center text-xl font-medium'>Fit Prata</p>
                                                            <div className=''>
                                                                <h1 className='flex gap-2 text-base'>
                                                                    <span>Data de Inicio:</span>
                                                                    <span className='font-bold'>{dataInicial}</span>
                                                                </h1>

                                                                <h2 className='flex gap-2 text-base'>
                                                                    <span>Data de Cobrança:</span>
                                                                    <span className='font-bold'>{todaysDate}</span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <img src="src/assets/Logo/FitGold.ico" alt="" className='w-24' />
                                                        <div className='flex flex-col gap-2'>

                                                            <p className='w-full text-center text-xl font-medium'>Fit Gold</p>
                                                            <div className=''>
                                                                <h1 className='flex gap-2 text-base'>
                                                                    <span>Data de Inicio:</span>
                                                                    <span className='font-bold'>{dataInicial}</span>
                                                                </h1>

                                                                <h2 className='flex gap-2 text-base'>
                                                                    <span>Data de Cobrança:</span>
                                                                    <span className='font-bold'>{todaysDate}</span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </>
                                        }
                                    </div>
                                </div>

                                <div className='bg-gray-200 w-full h-auto rounded-md flex flex-col justify-start items-sart p-3 gap-6'>

                                    <div className='text-lg font-medium'>Endereço</div>

                                    <div className='flex flex-row w-full justify-center items-center gap-6'>
                                        <GrLocation className='text-[10vh] w-auto' />

                                        <div className='text-base flex flex-row  justify-start items-start gap-[22vh] '>
                                            <div>
                                                <h1 className='flex flex-row justify-start gap-1 w-full'>Rua: <span className='font-bold'>{editando ? (
                                                    <input
                                                        className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                        type="text"
                                                        value={Rua}
                                                        onChange={(e) => setRua(e.target.value)}
                                                    />
                                                ) : (
                                                    Rua
                                                )}</span></h1>

                                                <h2 className='flex flex-row justify-start gap-1 w-full'>Bairro: <span className='font-bold'>{editando ? (
                                                    <input
                                                        className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                        type="text"
                                                        value={Bairro}
                                                        onChange={(e) => setBairro(e.target.value)}
                                                    />
                                                ) : (
                                                    Bairro
                                                )}</span></h2>

                                                <h2 className='flex flex-row justify-start gap-1 w-full'>N°: <span className='font-bold'>{editando ? (
                                                    <input
                                                        className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                        type="number"
                                                        value={Numero}
                                                        onChange={(e) => setNumero(e.target.value)}
                                                    />
                                                ) : (
                                                    Numero
                                                )}</span></h2>
                                            </div>
                                            <div>
                                                <h2 className='flex flex-row justify-start gap-1 w-full'>Complemento: <span className='font-bold'> {editando ? (
                                                    <input
                                                        className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                        type="text"
                                                        value={Complemento}
                                                        onChange={(e) => setComplemento(e.target.value)}
                                                    />
                                                ) : (
                                                    Complemento
                                                )}</span></h2>

                                                <h2 className='flex flex-row justify-start gap-1 w-full' htmlFor="cep">CEP: <span className='font-bold'>{editando ? (
                                                    <input
                                                        className='w-full border-b-2 border-black bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base'
                                                        type="text"
                                                        value={cep}
                                                        onChange={(e) => setCep(e.target.value)}
                                                    />
                                                ) : (
                                                    cep
                                                )}</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)}

                    {Amamnese && (
                        <>
                            <div className='h-full w-full flex flex-col justify-start items-center pt-5 px-7 pb-4 gap-4'>

                                <h1 className='text-2xl font-semibold'>Tabela Anamnese</h1>

                                <div className='h-full w-auto flex flex-row justify-between items-center'>

                                    <div className='w-auto h-auto bg-gray-200 flex justify-center items-center p-4 rounded-md'>
                                        <img src={pdfUrl} type="application/pdf" className='w-96' />
                                    </div>

                                    <div className='h-full w-full flex flex-col justify-center items-center gap-5'>
                                        <img src="src/assets/Logo/Logo.ico" alt="" />
                                        <button onClick={handleDownload} className='bg-[#00b71c] p-1 px-6 rounded-md'>Baixar Arquivo</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {Calendario && (
                        <>
                            <div className='h-full w-full flex flex-col justify-center items-center text-2xl font-semibold'>
                                <img src="src/assets/Logo/Logo.ico" alt="" />
                                <p>Estamos trabalhando nisso!</p>
                            </div>
                        </>
                    )}

                    {Chat && (
                        <>
                            <div className='h-full w-full flex flex-col justify-center items-center text-2xl font-semibold'>
                                <img src="src/assets/Logo/Logo.ico" alt="" />
                                <p>Estamos trabalhando nisso!</p>
                            </div>
                        </>
                    )}


                </div>

            </div>
        </div>
    )
}