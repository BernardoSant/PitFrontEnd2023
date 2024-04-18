import GlobalStyle from './styles/global'
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
{/* Telas de cadastros */ }

{/* Paginas Adimim */ }
import { UsersAdmin } from './pages/UsersAdmin'
import { CasasfitAdmin } from './pages/CasasFitAdmin'
import { HomeAdmin } from './pages/HomeAdmin'

{/* Paginas Abertas*/ }
import { Landingpage } from './pages/Landingpage'
import { Entrar } from './pages/Sing in/Entrar'
import { Cadastrar } from './pages/Sing up/Cadastrar'
import { Inicio } from './pages/Inicio'
import { Planos } from './pages/Planos'
import { PerfilUser } from './pages/Perfil/Perfil';

{/* Paginas Components*/ }
import { Notfound } from './pages/NotFound'
import { Footer } from './Componentes/Footer'
import ProfilePage from './pages/ProfilePage'

import { Teste } from './pages/Teste'
import { Page } from './pages/page';


export const Rotas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/page" element={<Page />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/perfil" element={<PerfilUser />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/casasfit" element={<CasasfitAdmin />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/dados" element={<ProfilePage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

      </Router>
      <GlobalStyle />
    </>
  )
}