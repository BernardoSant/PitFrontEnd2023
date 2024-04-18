import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PiUserCirclePlusLight } from "react-icons/pi";

export const Api = () => {

    const apiId = 'e5586df9';
    const apiKey = '7de06ecca549b650967863c9fde437d2';

    const api = axios.create({
        baseURL: 'https://api.edamam.com/',
        params: {
            app_id: apiId,
            app_key: apiKey,
        },
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedFood, setSelectedFood] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarReceitas() {
            try {


                const response = await api.get('/search', {
                    params: {
                        q: searchTerm,
                    },
                });


                setRecipes(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setLoading(false);
            }
        }

        buscarReceitas();
    }, [searchTerm]);


    const handleRecipeClick = (recipeLabel) => {
        setSearchTerm(recipeLabel); // Definir o valor do campo de pesquisa com o nome da receita selecionada
    };

    const handleBodyClick = (event) => {
        // Verificar se o clique ocorreu fora do aplicativo (no body da página)
        // eslint-disable-next-line no-undef
        if (!appRef.current.contains(event.target)) {
            setSearchTerm(''); // Limpar o campo de pesquisa
        }
    };

    useEffect(() => {
        // Adicionar um ouvinte de evento de clique ao body da página
        document.body.addEventListener('click', handleBodyClick);

        // Remover o ouvinte de evento de clique quando o componente é desmontado
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    const handleSearch = () => {
        setSelectedFood(searchTerm);

    };

    const handleClear = () => {
        setSearchTerm('');
        setSelectedFood('');
    };

    if (loading) {
        return <div>Carregando...</div>;
    }





    return (
        <div className='w-full'>

            <dir className="bg-white w-full p-2 px-7 rounded-lg shadow-xl">

                <div className="flex flex-row items-between justify-between w-fulllg:border-b-0 ">


                    <Link to="/inicio">
                        <img src="src/assets/logo/LogoNav.ico" alt="" className='w-44' />
                    </Link>

                    <div className='flex gap-8 w-full'>
                        <input
                            type="text"
                            placeholder="Pesquisar ingredientes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <button onClick={handleClear}>Limpar</button>
                        <button onClick={handleSearch}>Pesquisar</button>


                    </div>


                    <Link to='/entrar'>
                        <PiUserCirclePlusLight className='text-4xl'></PiUserCirclePlusLight>
                    </Link>





                </div>
            </dir>



            {/*Sugestão de pesquisa*/}
            {!selectedFood && (
                <div className=''>
                    {
                        recipes.map((recipe, index) => (
                            <li key={index} onClick={() => handleRecipeClick(recipe.recipe.label)}>
                                {recipe.recipe.label}

                            </li>
                        ))}
                </div>
            )}

            {/*Pesquisa feita*/}
            {selectedFood && (<div
                className='bg-slate-500 w-full'
            >
                <h2>Alimento Selecionado:</h2>
                <div className='flex flex-wrap'>
                    {recipes.map((recipe, index) => (
                        <li key={index}>
                            {recipe.recipe.label}
                            {recipe.recipe.healthLabels}
                            <img src={recipe.recipe.image} alt="" />
                        </li>
                    ))}
                </div>
            </div>)}


        </div >
    )
}