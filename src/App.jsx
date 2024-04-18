import { useState, useEffect } from 'react';
import { Rotas } from './Rotas'
import { LoadingScreen } from './Componentes/Loading/LoadingScreen';

function App() {
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCarregando(false); 
    }, 1000);
  }, []);

  return (
    <>
      {carregando ? 
        <LoadingScreen/>
       : 
          <Rotas/>
      }
      
    </>
  )
}

export default App
