import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CadastroCasados = () => {
    const navigate = useNavigate()
    const [cnpj, setCnpj] = useState("");
    const [cnpjError, setCnpjError] = useState(false);
    const [cnpjValid, setCnpjValid] = useState(false);
    const [cep, setCep] = useState("");
    const [cepError, setCepError] = useState(false);
    const [cepValid, setCepValid] = useState(false);
     //cnpj 
    const cnpjChange = (event) => {
        const newCnpj = event.target.value;
        const formattedCnpj = formatCnpj(newCnpj);
        setCnpj(formattedCnpj);
        setCnpjError(!validateCnpj(newCnpj));
        setCnpjValid(validateCnpj(newCnpj));
    };

    const formatCnpj = (cnpj) => {
        // Remove caracteres não numéricos
        const numericCnpj = cnpj.replace(/\D/g, "");

        // Aplica a máscara
        const maskedCnpj = numericCnpj.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
            "$1.$2.$3/$4-$5"
        );

        return maskedCnpj;
    };

    const validateCnpj = (cnpj) => {
        // Remove caracteres não numéricos
        const numericCnpj = cnpj.replace(/\D/g, "");

        // Verifica se possui 14 dígitos
        if (numericCnpj.length !== 14) {
            return false;
        }
        return true;
    };

    //cep
    const cepChange = (event) => {
        const newCep = event.target.value;
        const formattedCep = formatCep(newCep);
        setCep(formattedCep);
        setCepError(!validateCep(newCep));
        setCepValid(validateCep(newCep));
      };
    
      const formatCep = (cep) => {
        // Remove caracteres não numéricos
        const numericCep = cep.replace(/\D/g, "");
    
        // Aplica a máscara
        const maskedCep = numericCep.replace(/^(\d{5})(\d{3}).*/, "$1-$2");
    
        return maskedCep;
      };
    
      const validateCep = (cep) => {
        // Remove caracteres não numéricos
        const numericCep = cep.replace(/\D/g, "");
    

        if (numericCep.length !== 8) {
          return false;
        }

        return true;
      };
    
      const CadastroCasados = () =>{
        navigate('/cadatrocasa')
      }

    return (

        <div className=" bg-neutral-300  h-[50em] w-[100%] flex items-center justify-center">

            <div className=" bg-orange-600 h-4/5 w-[60%] rounded-lg  shadow-md shadow-black ">
                <div className=' grid grid-cols-2 h-[100%] '>

                    <div className="rounded-t-lg flex basis-1/4 items-center px-4">

                        <span className="flex-auto text-center ">
                            <p className=" text-4xl font-medium mb-12">Seja um dos nossos contribuentes.</p>
                            <p className="text-base">Com a nossa plataforma, você vai poder almentar suas demanda de alimentações saudaveis. Não perca tempo e faça parte dessa comunidade de bem-estar.</p>
                        </span>

                    </div>

                    <div className=" rounded-r-lg bg-teal-100 ">
                        <div className="flex justify-center items-center mt-[6%]  basis-11/12">

                            <div className=" text-black ">
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        Nome Empresarial
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="Nome da Empresa"

                                    />

                                </div>
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        CNPJ
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="Digite o CNPJ"
                                        value={cnpj}
                                        onChange={cnpjChange}
                                    />
                                    {cnpjError && <p className="mb-2 font-semibold text-red-600 text-sm">CNPJ inválido. Por favor, verifique o formato.</p>}
                                    {cnpjValid && <p className="mb-2 font-semibold text-green-600 text-sm">CNPJ válido.</p>}
                                </div>
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        CEP
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="Digite o CEP"
                                        value={cep}
                                        onChange={cepChange}
                                    />
                                    {cepError && <p className="mb-2 font-semibold text-red-600 text-sm">CEP inválido. Por favor, verifique o formato.</p>}
                                    {cepValid && <p className="mb-2 font-semibold text-green-600 text-sm">CEP válido.</p>}
                                </div>
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        Rua
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="Rua"
                                        
                                    />
                                    
                                </div>
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        Bairro
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="Bairro"        
                                    />
                                    
                                </div>
                                <div>
                                    <span className="mb-1 text-base after:content-['*'] after:mb-1 after:text-red-500 block  font-bold text-slate-700">
                                        N°
                                    </span>
                                    <input
                                        className='peer mb-2 px-2 py-2 w-full  font-semibold bg-transparent border border-slate-300 text-sm shadow-sm text-black placeholder-gray-400 rounded-lg
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                     disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600
                                     focus:invalid:border-red-500 focus:invalid:ring-red-500 '
                                        type="text"
                                        placeholder="N°"
                                    />
                                    
                                </div>

                                <br />
                                <p className='mb-4 font-bold text-base flex items-center text-center '>
                                    <a href="" className="grow flex-auto border border-orange-600 ml-2 px-6 py-2 rounded-md hover:scale-95 ease-in-out duration-300 " onClick={CadastroCasados}>Proximo</a>
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