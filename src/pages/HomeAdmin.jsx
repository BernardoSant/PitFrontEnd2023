import { NavbarAdmin } from '../Componentes/NavBarAdmin'

export const HomeAdmin = () => {
  return (
    <>
     <NavbarAdmin />
      <div className="flex items-center justify-center text-gray-400 bg-[#1A2238] h-screen">
        <h1 className="text-3xl">
          <strong>Página inicial - <span className="text-orange-500">Administração</span></strong>
        </h1>
      </div>
    </>
  )
}
