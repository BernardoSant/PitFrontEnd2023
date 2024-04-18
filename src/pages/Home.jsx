import { Card } from "../components/CardHome"
import Motoqueiro from "../assets/img/entregador-proprio.png"
import Food from "../assets/img/peitodefrango.jpg"
import salada from "../assets/img/salada.jpg"
import pizza from "../assets/img/pizza.jpg"
import { NavbarAdmin } from "../components/NavBarAdmin"

export const Home = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
        <img
          src="https://um2004.s3.us-west-2.amazonaws.com/u5699226/visuals/a92ed4d8-91bf-4111-a602-561efb23c25c.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-cente"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h4 className="text-3xl font-bold tracking-tight text-orange-500 sm:text-5xl">
              Bem <span className="text-green-500">Vindo!</span>
            </h4>
            <p className="mt-6 text-lg leading-8 text-white font-bold">
              O <span className="text-orange-500">MELHOR</span> serviço de entrega de comida saudável de BH e região.
            </p>
            <p className="mt-6 text-lg leading-8 text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Inventore, optio alias quibusdam officia eos neque sit laudantium,
              earum ipsum quisquam natus quod totam. Quae ab id porro, molestiae facere possimus!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <br />
            <div className="bg-white grid mx-0-auto justify-center items-center grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <div className=" h-auto md:h-full bg-white flex flex-col items-center justify-center">
                <h1 className="text-left text-orange-600 text-5xl">
                  FOOD
                  <br />
                </h1>
                <br />
                <h1 className="text-left text-orange-600 text-5xl">
                  <span>DELIVERY</span>
                </h1>
                <br />
                <p className="text-center text-slate-600 text-sm max-w-2xl flex items-center justify-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium ducimus hic amet ab rem beatae, eveniet assumenda!
                  Ad fuga odit voluptates quidem illum hic odio. Ratione eos
                  dolor dolore eligendi.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci natus maxime aperiam ipsum. Libero, eum? Iusto eaque
                  optio laboriosam iure, aspernatur, eveniet necessitatibus
                  deserunt pariatur deleniti, quasi accusantium doloribus alias?
                </p>
              </div>
              <div className="relative h-full w-full">
                <img
                  className="w-full h-full object-cover"
                  src={Motoqueiro}
                  alt="Imagem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-20"></div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-food bg-center bg-cover w-full h-8">
        <div className="flex flex-row items-center">
          <h1 className="text-white text-6xl max-w-2xl p-4">
            Pontos principais
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="flex justify-center items-center relative">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-bold flex items-center justify-center absolute -top-6 -left-6">
              1
            </div>
            <div className="max-w-sm bg-white shadow-lg opacity-100 w-80 p-6 m-3 rounded-md">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Produtos de Qualidade
              </h5>
              <p className="font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                modi id molestias sint eveniet. Pariatur, possimus sequi eveniet
                hic, soluta, praesentium delectus corrupti asperiores quisquam
                deserunt tempore doloremque consectetur veritatis.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-bold flex items-center justify-center absolute -top-6 -left-6">
              2
            </div>
            <div className="max-w-sm bg-white shadow-lg opacity-100 w-80 p-6 m-3 rounded-md">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Entrega Rapida
              </h5>
              <p className="font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                modi id molestias sint eveniet. Pariatur, possimus sequi eveniet
                hic, soluta, praesentium delectus corrupti asperiores quisquam
                deserunt tempore doloremque consectetur veritatis.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-bold flex items-center justify-center absolute -top-6 -left-6">
              3
            </div>
            <div className="max-w-sm bg-white shadow-lg opacity-100 w-80 p-6 m-3 rounded-md">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Atendimento Rapido 
              </h5>
              <p className="font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                modi id molestias sint eveniet. Pariatur, possimus sequi eveniet
                hic, soluta, praesentium delectus corrupti asperiores quisquam
                deserunt tempore doloremque consectetur veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-10 justify-evenly items-center">
        <div className="bg-white w-full h-80">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">
              Melhores ofertas
            </h2>
            <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
              Ofertas diárias especiais para você!
            </h3>
            <p className="text-lg text-gray-700 text-center">
              Apresse-se para aproveitar as melhores ofertas de hoje pelo preço
              mais barato.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center -mt-36">
          <Card
            imgSrc={salada}
            imgAlt="Card Image 1"
            title="Salada"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            className="w-full sm:w-auto"
          />
          <Card
            imgSrc={Food}
            imgAlt="Card Image 2"
            title="Salmão"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            className="w-full sm:w-auto"
          />
          <Card
            imgSrc={pizza}
            imgAlt="Card Image 3"
            title="Pizza"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </>
  )
}
