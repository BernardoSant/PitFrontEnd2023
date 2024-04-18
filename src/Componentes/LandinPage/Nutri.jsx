import { CardLand } from '../LandinPage/CardLand'
import { Titulo } from '../LandinPage/TituloLand'
import { FaSellsy } from "react-icons/fa6";

export const NutriLand = () => {
    return (
        <div className='bg-white z-10 flex flex-col justify-center items-center pt-12 rounded-b-2xl pb-10'>

            <Titulo
                Titulo=''
                SubTitulo='Ganhe uma renda extra fazendo dieta online.'
                Descrição='Tenha acesso a diversos clientes Fit Food e receba por instrui-los em sua caminhada.                '
                Img='src/assets/Imagens/Fit Food é saúde.png'
            ></Titulo>

            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Cara a cara:'
                Texto='Faça reuniões com possiveis clientes e receba por isso'
                Img='src/assets/Imagens/Cara a cara.png'>
            </CardLand>


            <CardLand
                Lado='Direita'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Tenha seus alunos:'
                Texto='Caso o cliente goste da dieta e reunião peça para ele colocar como "Preferencia" na lista de profissionais.'
                Img='src/assets/Imagens/Tenha seus alunos.png'>
            </CardLand>


            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Profissional:'
                Texto='É necessario ser graduado em nutrição ou educação fisíca para participar da Fit Food'
                Img='src/assets/Imagens/para parceiros.png'>
            </CardLand>


        

        </div>
    )
}