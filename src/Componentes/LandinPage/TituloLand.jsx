export const Titulo = (props) => {
    return (
        <div className="">
            <h1 className='w-auto h-auto text-center font-bold  text-xl px-[75px] '>
                {props.Titulo} <br className="hidden md:block" />
                {props.SubTitulo}
            </h1>

            <h2 className='text-center text-xs mt-3 px-[90px] md:px-[250px]'>
                {props.Descrição}
            </h2>

            <img src={props.Img} alt="" className='overflow-auto w-[110%] mt-8 ' />

        </div>
    )
}