import { Cadastros } from "../../Componentes/CadastroUser/Cadastros"
export const Entrar = () => {


     return (
          <>
               <div className="h-[100vh] w-full flex flex-row justify-center items-center">

                    <div>
                    <Cadastros
                         Titulo='Entrar'
                         Descrição='Entre para acessar sua conta e aproveitar todos os recursos do nosso site de saúde natural e bem-estar. Bem-vindo de volta!'
                    ></Cadastros>
                    </div>
               </div>
          </>
     )

}