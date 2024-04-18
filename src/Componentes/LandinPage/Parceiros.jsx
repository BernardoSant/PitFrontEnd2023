import { CardLand } from '../LandinPage/CardLand'
import { Titulo } from '../LandinPage/TituloLand'
import { FaSellsy } from "react-icons/fa6";

export const ParceirosLand = () => {
    return (
        <div className='bg-white z-10 flex flex-col justify-center items-center pt-12 rounded-b-2xl pb-10'>

            <Titulo
                Titulo='Fit Food:'
                SubTitulo='Alimentação ideal para seu cliente'
                Descrição='Registre seu restaurante e tenha acesso a maior plataforma de nutrição saúdavel do Brasil.'
                Img='src/assets/Imagens/Fit Food é saúde.png'
            ></Titulo>

            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Aumente sua renda:'
                Texto='Registrado na Fit Food milhares de pessoas terão acesso ao menu do seu restaurante'
                Img='src/assets/Imagens/Aumente sua renda.png'>
            </CardLand>


            <CardLand
                Lado='Direita'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Não fique para trás:'
                Texto='A população cada dia esta comprando mais via delivery,não perca a oportunidade de fazer parte.'
                Img='src/assets/Imagens/Não fique para tras.png'>
            </CardLand>


            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Requisito:'
                Texto='Preencha o formulário e veja se seu restaurante tem as qualificações para ingressar na Fit Food'
                Img='src/assets/Imagens/Requisitos.png'>
            </CardLand>


        

        </div>
    )
}