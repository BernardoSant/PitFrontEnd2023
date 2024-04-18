import GlobalStyle from '../../styles/global'
import { Cadastro } from "../Componentes/Cadastros"


export const CadastrarUser = () => {

     return (

          <footer  className="flex justify-center items-center bg-white">
               
            <div className="flex-auto w-3/5 h-full bg-slate-950 hidden sm:block "> </div>
          
            <div className="flex-auto flex justify-center items-center h-full"> 
            <Cadastro
            Titulo='Cadastre'
            Descrição='Entre para acessar sua conta e aproveitar todos os recursos do nosso site de saúde natural e bem-estar. Bem-vindo de volta!'
            Nome='Nome:'
            Senha='Confirmar Senha:'
            Button='Cadastrar-se'
            existente='Entrar'
            ></Cadastro> 
            </div>
          <GlobalStyle></GlobalStyle>
          </footer>
         
       
     )

}