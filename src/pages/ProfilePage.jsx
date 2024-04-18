import ProfileForm from "../Componentes/ProfileForm";
import { NavBar } from "../Componentes/Navbars/Navbar";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

  const navigate = useNavigate();

  const userId = document.cookie.split("; ").find((row) => row.startsWith("user_id="))?.split("=")[1];

  const value = userId;

  useEffect(() => {
    function checkACookieExists() {
      if (document.cookie.split(";").some((item) => item.trim().startsWith("token_front="))) {
        if (value != '') {
          return true;
        }
      }
      return false;
    }

    if (checkACookieExists()) {
      console.log("Authentication passed")
    } else {
      navigate('/entrar');
    }
  }, [value])

  return (
    <>
      <NavBar />
      <div className="pt-16">
        <ProfileForm />
      </div>
    </>
  )
}

export default ProfilePage;