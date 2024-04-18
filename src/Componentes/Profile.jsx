
import { Link } from "react-router-dom";

const Profile = () => {
  const date = new Date();

  const todaysDate = date.toLocaleDateString();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-3/4 md:w-1/2 p-8 rounded shadow">
        <img
          src="https://source.unsplash.com/random/300×300"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-center">Plano Adquirido:</h1>
        <p className="text-gray-600 text-center">Grátis</p>
        <div className="mt-6">
          <div className="flex justify-evenly md:justify-between mb-4">
            <span className="font-bold">Data de Término:</span>
            <span>{todaysDate}</span>
          </div>
          <div className="flex justify-evenly md:justify-between mb-4">
            <span className="font-bold">Data da Cobrança:</span>
            <span>{todaysDate}</span>
          </div>
          <div className="flex justify-evenly md:justify-between">
            <span className="font-bold">Outros planos ainda em construção...</span>
            <Link to={"/planos"} className="bg-orange-500 rounded px-2 py-1">Veja</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;