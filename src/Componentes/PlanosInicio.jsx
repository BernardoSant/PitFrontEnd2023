import { Link } from "react-router-dom"

const PlanoInicio = () => {
    return (
        <header className="w-full flex flex-row p-4 gap-4 md:gap-6  md:px-24 lg:px-40">

            <div className="group flex-1 z-10 mt-1 flex  justify-center text-center sm:ml-0  ">
                <div className=" flex-auto overflow-hidden rounded-lg border border-black text-xs md:text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <Link to="/planos">
                        <div className=" divide-gray-900/5 bg-[#FF4608] py-1 group-hover:bg-orange-500 w-full text-center">
                            <a href="#" className=" items-center w-full text-center text-base font-bold text-gray-900  ">
                                Gratis
                            </a>
                        </div>
                    
                    <div className="p-2">

                     
                            <div className="group relative  flex gap-x-6 rounded-lg p-1 items-center  hover:bg-gray-50">

                                <div className="font-bold text-center w-full  md:text-xl text-gray-900">
                                    R$0/MÊS
                                </div>

                            </div>
                    

                    </div>
</Link>

                </div>
            </div>


            <div className="group flex-1 z-10 mt-1 flex  justify-center text-center sm:ml-0 scale-110 ">
                <div className=" flex-auto overflow-hidden rounded-lg border border-black text-xs md:text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <Link to="/planos">
                        <div className=" divide-gray-900/5 bg-[#c0c0c0] py-1 group-hover:bg-gray-300 w-full text-center">
                            <a href="#" className=" items-center w-full text-center text-base font-bold text-gray-900  ">
                                Prata
                            </a>
                        </div>
                   
                    <div className="p-2">




                    
                            <div className="group relative  flex gap-x-6 rounded-lg p-1 items-center  hover:bg-gray-50">

                                <div className="font-bold text-center w-full  md:text-xl text-gray-900">
                                    R$69,99/MÊS
                                </div>

                            </div>
                    
                    </div>
 </Link>

                </div>
            </div>



            <div className="group flex-1 z-10 mt-1 flex  justify-center text-center sm:ml-0  ">
                <div className=" flex-auto overflow-hidden rounded-lg border border-black text-xs md:text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <Link to="/planos">
                        <div className=" divide-gray-900/5 bg-[#ffd700] py-1 group-hover:bg-yellow-400 w-full text-center">
                            <a href="#" className=" items-center w-full text-center text-base font-bold text-gray-900  ">
                                Ouro
                            </a>
                        </div>
                    
                    <div className="p-2">




                     
                            <div className="group relative  flex gap-x-6 rounded-lg p-1 items-center  hover:bg-gray-50">

                                <div className="font-bold text-center  md:text-xl w-full text-gray-900">
                                    R$120,99/MÊS
                                </div>

                            </div>
                        
                    </div>
                    </Link>


                </div>
            </div>

        </header>
    )
}
export default PlanoInicio