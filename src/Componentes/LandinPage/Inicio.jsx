import { CardLand } from '../LandinPage/CardLand'
import { Titulo } from '../LandinPage/TituloLand'
import { FaSellsy } from "react-icons/fa6";

export const InicioLand = () => {
    return (
        <div className='bg-white z-10 flex flex-col justify-center items-center pt-12 rounded-b-2xl pb-10'>

            <Titulo
                Titulo='Gratuito ou premium:'
                SubTitulo='FitFood esta com você'
                Descrição='Fit Food é de todos
                Opções variadas a baixo custo para você!!'
                Img='src/assets/Imagens/Fit Food é saúde.png'
            ></Titulo>

            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Mude seu Mindset:'
                Texto='Plataforma totalmente direcionada para fazer de voce uma pessoa melhor e mais saudavel,sem marketing
                agressivo e mais saúde'
                Img='src/assets/Imagens/Mindset.png'>
            </CardLand>


            <CardLand
                Lado='Direita'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Nutrição:'
                Texto='Fit Food conta diversos profissionais de nutrição,para fazer sua dieta ser mais facil'
                Img='src/assets/Imagens/Nutrição.png'>
            </CardLand>


            <CardLand
                Lado='Esquerda'
                Icon={<FaSellsy className='w-10 text-orange-600' />}
                Titulo='Indique um amigo e ganhe Bonus:'
                Texto='A cada amigo convidado pelo seu código de amigo receba 20% de desconto na próxima refeição ou no plano.'
                Img='src/assets/Imagens/Indique amigos e ganhe Bônus.png'>
            </CardLand>


        

        </div>
    )
}