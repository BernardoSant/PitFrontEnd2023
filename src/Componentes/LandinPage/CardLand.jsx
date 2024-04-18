

export const CardLand = (props) => {
    return (
        <>
            {props.Lado === 'Esquerda' && (
                <header className=" flex flex-col md:flex-row px-10 md:px-28 mt-32 justify-end items-center md:gap-10  gap-6">

                    <div className=" flex flex-col md:flex-auto md:w-8/12">

                        {props.Icon}
                        <h1 className="text-2xl font-semibold">{props.Titulo}</h1>
                        <h2 className="mt-3 text-left text-sm">
                            {props.Texto}
                        </h2>
                    </div>

                    <div className="flex-initial ">
                        <img src={props.Img} alt="" className="w-[100vh]" />
                    </div>

                </header>
            )}


            {props.Lado === 'Direita' && (
                <header className=" flex flex-col md:flex-row px-10 md:px-28 mt-32 justify-end items-center md:gap-10 gap-6" >

                    <div className="hidden md:block">
                        <img src={props.Img} alt="" className="w-[100vh]"/>
                    </div>

                    <div className=" flex flex-col md:flex-auto md:w-8/12">

                        {props.Icon}
                        <h1 className="text-2xl font-semibold">{props.Titulo}</h1>
                        <h2 className="mt-3 text-left text-sm">
                            {props.Texto}
                        </h2>

                    </div>

                    <div className="md:hidden">
                        <img src={props.Img} alt="" className="w-[100vh]" />
                    </div>

                </header>
            )}
        </>

    )
}