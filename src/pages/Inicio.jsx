import { NavBar } from "../Componentes/Navbars/Navbar"
import axios from 'axios';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineClose } from "react-icons/ai";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FiPlus, FiX } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";



export const Inicio = () => {
    const apiId = 'e5586df9';
    const apiKey = '7de06ecca549b650967863c9fde437d2';


    const api = axios.create({
        baseURL: 'https://api.edamam.com/',
        params: {
            app_id: apiId,
            app_key: apiKey,
        },
    });
    /* { recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0) }
     { recipe.recipe.totalNutrients.FAT.quantity.toFixed(0) }
     { recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0) }
     const totalCalorias = recipe.recipe.calories;*/
    // Suponha que você tenha o objeto totalNutrients disponível



    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [Detalhes, setDetalhes] = useState([]);
    const [selectedFood, setSelectedFood] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Inicio, setInicio] = useState(true);
    const [Alergia, setAlergia] = useState(false);
    const [Dieta, setDieta] = useState(false);
    const [Caloria, setCaloria] = useState(false);
    const [Nutrientes, setNutriente] = useState(false);
    const [Carregardo, setCarregardo] = useState(false);

    const [DetalhesReceita, setDetalhesReceita] = useState(false);
    const [ReceitasPesquisada, setReceitasPesquisada] = useState(false);



    const [filtersHealth, setFiltersHealth] = useState({});
    const [filtersDiet, setFiltersDiet] = useState({});
    const [filtersNutrient, setFiltersNutrient] = useState({});
    const [filtersAllergy, setFiltersAllergy] = useState({});

    // Variável de estado para armazenar os filtros selecionados


    const ClikInicio = () => {
        setSelectedFood('');
        setInicio(true);
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);
        setCarregardo(false)
    };
    const ClikAlergia = () => {
        setSelectedFood('');
        setInicio(false);
        setAlergia(true);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);
        setCarregardo(false)
    };
    const ClikDieta = () => {
        setSelectedFood('');
        setInicio(false);
        setAlergia(false);
        setDieta(true);
        setCaloria(false);
        setNutriente(false);
        setCarregardo(false)
    };
    const ClikCaloria = () => {
        setSelectedFood('');
        setInicio(false);
        setAlergia(false);
        setDieta(false);
        setCaloria(true);
        setNutriente(false);
        setCarregardo(false)
    };
    const ClikNutrientes = () => {
        handleClear();
        setInicio(false);
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(true);
        setCarregardo(false)
    };


    const handleFiltersHealth = (filterName) => {
        setFiltersHealth(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };
    const handleFiltersDiet = (filterName) => {
        setFiltersDiet(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };
    const handleFiltersNutrient = (filterName) => {
        setFiltersNutrient(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };
    /*const handleFiltersAllergy = (filterName) => {
        setFiltersAllergy(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };*/

    const handleRemoveFiltersHealth = (filterName) => {
        setFiltersHealth(prevFilters => ({
            ...prevFilters,
            [filterName]: false,
        }));
    };
    const handleRemoveFiltersDiet = (filterName) => {
        setFiltersDiet(prevFilters => ({
            ...prevFilters,
            [filterName]: false,
        }));
    };
    const handleRemoveFiltersNutrient = (filterName) => {
        setFiltersNutrient(prevFilters => ({
            ...prevFilters,
            [filterName]: false,
        }));
    };
    const handleRemoveFiltersAllergy = (filterName) => {
        setFiltersAllergy(prevFilters => ({
            ...prevFilters,
            [filterName]: false,
        }));
    };



    const extrairIdDaUri = (uri) => {
        return uri.split('#').pop().split('_').pop();
    };

    const IdRecipe = async (id) => {

        try {

            const params = {};
            if (id) {
                params.q = id;
            }
            const response = await api.get('/search', { params });
            if (response.data && response.data.hits && response.data.hits.length > 0) {
                setDetalhes(response.data.hits[0]);  // Supondo que a resposta seja um array com um único elemento
                console.log("Detalhes da receita:", response.data.hits[0]);


            } else {
                toast.error('Nenhuma receita encontrada com o ID fornecido.');

            }
            setRecipes(response.data.hits);
            console.log(response)
            console.log(id)
            console.log(params)
        } catch (error) {
            console.error('Erro ao buscar detalhes da receita:', error);
        }
        setSelectedFood(true);
        setCarregardo(true)
        setDetalhesReceita(true)
        setReceitasPesquisada(false);
        setInicio(false);
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);
    };


    const handleKeyPress = (event,) => {
        if (event.key === 'Enter') {
            if (searchTerm === '') {
                toast.info('Campo de Busca vazio');
                setCarregardo(false)
                setInicio(true)
            } else {
                setCarregardo(true)
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    handleSearch()
                }, 4000);
                setInicio(false)
            }
        }

        setCarregardo(true)
        setInicio(false)
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);
    };

    const handleSearchVoltar = () => {
        handleSearch()
        setCarregardo(false)
    };

    const handleSearchPesquisar = async () => {

        if (searchTerm === '') {
            toast.info('Campo de Busca vazio');
            setCarregardo(false)
            setInicio(true)
        } else {
            setCarregardo(true)
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                handleSearch()
            }, 4000);
            setInicio(false)
        }
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);
    };

    const handleClear = () => {
        setRecipes([])
        setSearchTerm('');
        setSelectedFood('');
        setInicio(true);
        setCarregardo(false)
    };

    const handleSearch = async () => {

        try {

            const params = {};

            // Se um termo de pesquisa foi fornecido, adicione-o aos parâmetros
            if (searchTerm) {
                params.q = searchTerm;
            } else {
                // Se searchTerm estiver vazio, definir params.q como false
                params.q = false;
            }



            // Lógica para filtros de saúde
            const selectedHealthFilters = Object.keys(filtersHealth).filter(key => filtersHealth[key]);
            if (selectedHealthFilters.length > 0) {
                params.health = selectedHealthFilters[0];

                if (selectedHealthFilters.length > 1) {
                    params.bull = selectedHealthFilters.slice(1).join('&bull');
                }
            }

            // Lógica para filtros de dieta
            const selectedDietFilters = Object.keys(filtersDiet).filter(key => filtersDiet[key]);
            if (selectedDietFilters.length > 0) {
                params.diet = selectedDietFilters.join(' ');
            }

            // Lógica para filtros de nutrientes
            const selectedNutrientFilters = Object.keys(filtersNutrient).filter(key => filtersNutrient[key]);
            if (selectedNutrientFilters.length > 0) {
                params.nutrient = selectedNutrientFilters.join(' ');
            }

            // Lógica para filtros de alergias
            const selectedAllergyFilters = Object.keys(filtersAllergy).filter(key => filtersAllergy[key]);
            if (selectedAllergyFilters.length > 0) {
                params.allergy = selectedAllergyFilters.join(' ');
            }

            const response = await api.get('/search', { params });
            setRecipes(response.data.hits);
            setInicio(false);
            setCarregardo(true)
            console.log("Detalhes da receita:", response);
            console.log(params)

        } catch (error) {
            toast.error('Receita não emcontrada!');
        }
        setCarregardo(true)
        setSelectedFood(true);
        setReceitasPesquisada(true)
        setDetalhesReceita(false)
        setAlergia(false);
        setDieta(false);
        setCaloria(false);
        setNutriente(false);

    };


    const filterNames = {
        'FAT': 'Gordura',
        'FASAT': 'Gordura Saturada',
        'FATRN': 'Gordura Trans',
        'FAMS': 'Gordura Monoinsaturada',
        'FAPU': 'Gordura Poli-insaturada',
        'CHOCDF': 'Carboidratos',
        'FIBTG': 'Fibra',
        'SUGAR': 'Açúcares',
        'PROCNT': 'Proteína',
        'CHOLE': 'Colesterol',
        'NA': 'Sódio',
        'CA': 'Cálcio',
        'MG': 'Magnésio',
        'K': 'Potássio',
        'FE': 'Ferro',
        'P': 'Fósforo',
        'VITA_RAE': 'Vitamina A',
        'VITC': 'Vitamina C',
        'THIA': 'Tiamina (B1)',
        'RIBF': 'Riboflavina (B2)',
        'NIA': 'Niacina (B3)',
        'VITB6A': 'Vitamina B6',
        'FOLDFE': 'Folato (Equivalente)',
        'VITB12': 'Vitamina B12',
        'VITD': 'Vitamina D',
        'TOCPHA': 'Vitamina E',
        'VITK1': 'Vitamina K',
        // Filtros de saúde
        "balanced": "Equilibrado",
        "dairy-free": "Sem laticínios",
        "gluten-free": "Sem glúten",
        "peanut-free": "Sem amendoim",
        "tree-Nut-free": "Sem nozes",
        "wheat-free": "Sem trigo",
        "soy-free": "Sem soja",
        "sesame-free": "Sem gergelim",
        "mustard-free": "Sem mostarda",
        "fish-free": "Sem peixe",
        "egg-free": "Sem ovos",
        "high-fiber": "Alto teor de fibra",
        "high-protein": "Alto teor de proteína",
        "low-carb": "Baixo teor de carboidratos",
        "low-fat": "Baixo teor de gordura",
        "low-sodium": "Baixo teor de sódio"
    };








    return (
        <>
            <NavBar></NavBar>

            <div className=" pt-[10vh] h-[100vh] flex flex-row justify-center items-start">

                <div className="h-full w-1/3 flex flex-col justify-start items-start shadow-2xl text-xl gap-5 pl-10 pt-24 z-20">

                    <button onClick={ClikInicio} className={`text-${Inicio ? '[#00b71c]' : ''}`}>
                        Inicio
                        <p className={`h-[2px]  w-${Inicio ? 'full' : '0'}   bg-[#00b71c] duration-300`}></p>
                    </button>

                    <button onClick={ClikAlergia} className={`text-${Alergia ? '[#00b71c]' : ''}`}>
                        Alergias
                        <p className={`h-[2px]  w-${Alergia ? 'full' : '0'} bg-[#00b71c] duration-300`}></p>
                    </button>

                    <button onClick={ClikDieta} className={`text-${Dieta ? '[#00b71c]' : ''}`}>
                        Dietas
                        <p className={`h-[2px] w-${Dieta ? 'full' : '0'}  bg-[#00b71c] duration-300`}></p>
                    </button>

                    <button onClick={ClikCaloria} className={`text-${Caloria ? '[#00b71c]' : ''}`}>
                        Calorias
                        <p className={`h-[2px] w-${Caloria ? 'full' : '0'}  bg-[#00b71c] duration-300`}></p>
                    </button>

                    <button onClick={ClikNutrientes} className={`text-${Nutrientes ? '[#00b71c]' : ''}`}>
                        Nutrientes
                        <p className={`h-[2px]  w-${Nutrientes ? 'full' : '0'}  bg-[#00b71c] duration-300`}></p>
                    </button>
                </div>

                <div className='w-full h-full flex flex-col '>

                    <dir className="w-full p-2 px-7 shadow-2xl z-10">

                        <div className='flex justify-center items-center gap-4 w-full '>
                            <input
                                className="w-80 border-b-2 border-[#00b71c] bg-transparent disabled:shadow-none  focus:outline-none focus:text-black text-base"
                                type="text"
                                placeholder="Pesquisar ingredientes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />

                            <button onClick={handleClear}><AiOutlineClose className="text-lg" /></button>
                            <button onClick={handleSearchPesquisar}><PiMagnifyingGlass className="text-lg " /></button>
                        </div>

                    </dir>


                    {Carregardo && (<div className="w-full h-full flex flex-col justify-center items-center overflow-auto ">
                        {loading ?
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="dot-1 absolute z-3 w-[30px] h-[30px] rounded-full bg-white"></div>
                                <div className="dot-2 absolute z-2 w-[60px] h-[60px] rounded-full bg-[#00b71c]"></div>
                                <div className="dot-3 absolute z-1 w-[90px] h-[90px] rounded-full bg-[#ea580c]"></div>
                            </div>
                            :
                            <div className="h-full">
                                {selectedFood && (
                                    <div className=' w-full h-full flex flex-col p-4  '>

                                        {recipes.map((recipe, index) => (
                                            <div key={index} className=''>

                                                {DetalhesReceita && (
                                                    <div key={index} className="w-full h-full flex flex-col gap-5 p-5 ">
                                                        <button onClick={handleSearchVoltar} className=""><GoArrowLeft className="text-lg bg-orange-600 w-auto h-auto p-1 rounded-full shadow-2xl " /></button>
                                                        <div className=" w-full h-auto flex flex-row justify-start items-center gap-16 px-5 pb-4 border-b-[2px]">
                                                            <img src={recipe.recipe.image} alt="" className="w-[16vh] rounded-3xl drop-shadow-xl " />
                                                            <h1 className="w-full text-2xl lg:text-4xl font-bold ">{recipe.recipe.label}</h1>
                                                        </div>

                                                        <div className="flex flex-col gap-5 justify-center items-center  ">
                                                            {/*
                                                 <div className="flex flex-col justify-center items-center w-full">

                                                                <div className=" flex flex-row w-full  justify-between items-center">
                                                                    <h1>Valor Diário </h1>
                                                                    <div>Calorias {recipe.recipe.calories.toFixed(0)}</div>
                                                                    <div className=" w-auto h-full flex flex-col gap-1 justify-start items-center p-4 font-normal">
                                                                        <p className=" flex flex-row justify-between items-center w-full gap-5"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-green-500 " />Proteína:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} {recipe.recipe.totalNutrients.PROCNT.unit}</p></p>
                                                                        <p className=" flex flex-row justify-between items-center w-full gap-5"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-yellow-500 " />Gordura:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)} {recipe.recipe.totalNutrients.FAT.unit}</p></p>
                                                                        <p className=" flex flex-row justify-between items-center w-full gap-5"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-red-500 " />Carboidratos:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipe.recipe.totalNutrients.CHOCDF.unit}</p></p>
                                                                    </div>
                                                                </div>

                                                            </div>*/}

                                                            <div className="w-full flex flex-col gap-[2px] justify-center items-center">
                                                                <div className="flex flex-row gap-[2px] w-full text-center">
                                                                    <h1 className="text-lg font-bold w-full py-1 px-2 bg-gray-200 rounded-tl-2xl shadow-inner">Gordura</h1>
                                                                    <h1 className="text-lg font-bold w-full py-1 px-2 bg-gray-200 shadow-inner">Carboidrato</h1>
                                                                    <h1 className="text-lg font-bold w-full py-1 px-2 bg-gray-200 rounded-tr-2xl shadow-inner">Proteina</h1>
                                                                </div>
                                                                <div className="flex flex-row justify-center items-center gap-[2px] w-full text-center">
                                                                    <h1 className="w-full flex justify-center items-center gap-2 py-1 px-2 bg-gray-200 rounded-bl-2xl shadow-inner"><p className="h-2 w-2 rounded-full bg-red-500 " />{recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FAT.unit}</h1>
                                                                    <h1 className="w-full flex justify-center items-center gap-2 py-1 px-2 bg-gray-200 shadow-inner"><p className="h-2 w-2 rounded-full bg-yellow-500 " />{recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{recipe.recipe.totalNutrients.CHOCDF.unit}</h1>
                                                                    <h1 className="w-full flex justify-center items-center gap-2 py-1 px-2 bg-gray-200 rounded-br-2xl shadow-inner"><p className="h-2 w-2 rounded-full bg-green-500 " />{recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{recipe.recipe.totalNutrients.PROCNT.unit}</h1>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col justify-center items-start gap-2">
                                                                <h1 className="font-semibold text-3xl">Alegações nutricionais</h1>
                                                                <p className="w-full h-full flex flex-wrap"> {recipe.recipe.healthLabels.join(` • `)}</p>
                                                            </div>

                                                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                                                <h1 className="font-semibold text-3xl">Ingredientes</h1>
                                                                <p className="w-full h-full flex flex-wrap"> {recipe.recipe.ingredientLines.join(`\n  • `)}</p>
                                                            </div>
                                                        </div>

                                                        <div className="w-full h-auto p-5 gap-2 shadow-md shadow-[#41414149] rounded-2xl flex-col flex justify-center items-start text-sm">
                                                            <h1 className="flex flex-row justify-between items-center w-full font-bold text-3xl border-b-[1px]">Dados Nutricionais </h1>
                                                            <h1 className="flex flex-row justify-between items-center w-full py-1 border-b-[6px] font-bold"><h2>Porção</h2>  {recipe.recipe.totalWeight.toFixed(0)} g</h1>
                                                            <h1 className="flex flex-col justify-between items-start w-full font-bold py-1 pb-2 gap-2 border-b-[3px]">
                                                                Quantidade por porção
                                                                <h2 className="text-3xl flex justify-between items-center w-full"><p>Calorias</p> {recipe.recipe.calories.toFixed(0)} </h2>
                                                            </h1>
                                                            <h1 className="flex flex-row justify-end items-center w-full pb-1 text-xs font-bold border-b-[1px]">% Valor diario</h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px] font-bold"><h2 className="flex gap-2">Gordura Total <p className="font-normal">{recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FAT.unit}</p></h2></h1>
                                                            <h3 className="w-full flex"><p className="w-5"></p><h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Gordura Saturadas {recipe.recipe.totalNutrients.FASAT.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FASAT.unit}</h2></h1></h3>
                                                            <h3 className="w-full flex"><p className="w-5"></p><h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Gordura Trans {recipe.recipe.totalNutrients.FATRN.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FATRN.unit}</h2></h1></h3>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px] font-bold"><h2 className="flex gap-2">Colesterol <p className="font-normal">{recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(2)}{recipe.recipe.totalNutrients.CHOLE.unit}</p></h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px] font-bold"><h2 className="flex gap-2">Sódio <p className="font-normal">{recipe.recipe.totalNutrients.NA.quantity.toFixed(2)}{recipe.recipe.totalNutrients.NA.unit}</p></h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px] font-bold"><h2 className="flex gap-2">Carboidrato Total <p className="font-normal">{recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{recipe.recipe.totalNutrients.CHOCDF.unit}</p> </h2></h1>
                                                            <h3 className="w-full flex"><p className="w-5"></p><h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Fibra Alimentar {recipe.recipe.totalNutrients.FIBTG.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FIBTG.unit} </h2></h1></h3>
                                                            <h3 className="w-full flex"><p className="w-5"></p><h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Açúcares Totais {recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}{recipe.recipe.totalNutrients.SUGAR.unit} </h2></h1></h3>


                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px] font-bold"><h2 className="flex gap-2">Proteína <p className="font-normal">{recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{recipe.recipe.totalNutrients.PROCNT.unit}</p> </h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Vitamina A {recipe.recipe.totalNutrients.VITA_RAE.quantity.toFixed(2)}{recipe.recipe.totalNutrients.VITA_RAE.unit} </h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Vitamina B {recipe.recipe.totalNutrients.VITB12.quantity.toFixed(2)}{recipe.recipe.totalNutrients.VITB12.unit} </h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Vitamina C {recipe.recipe.totalNutrients.VITC.quantity.toFixed(2)}{recipe.recipe.totalNutrients.VITC.unit} </h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Vitamina D {recipe.recipe.totalNutrients.VITD.quantity.toFixed(2)}{recipe.recipe.totalNutrients.VITD.unit} </h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Cálcio {recipe.recipe.totalNutrients.CA.quantity.toFixed(2)}{recipe.recipe.totalNutrients.CA.unit}</h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Ferro {recipe.recipe.totalNutrients.FE.quantity.toFixed(2)}{recipe.recipe.totalNutrients.FE.unit}</h2></h1>

                                                            <h1 className="flex flex-row justify-between items-center w-full py-[1px] border-b-[1px]"><h2>Potássio {recipe.recipe.totalNutrients.K.quantity.toFixed(2)}{recipe.recipe.totalNutrients.K.unit}</h2></h1>
                                                        </div>

                                                    </div>
                                                )}

                                                {ReceitasPesquisada && (
                                                    <div key={index}
                                                        onClick={() => IdRecipe(extrairIdDaUri(recipe.recipe.uri))}
                                                        className="flex flex-col h-auto gap-2 justify-center items-center shadow-md shadow-gray-300 mt-5 cursor-pointer">

                                                        <div className="flex fle-row gap-10 h-auto p-4">

                                                            <img src={recipe.recipe.image} alt="" className="w-[18vh]" />

                                                            <div className=" text-[1.3vh] flex flex-col w-full gap-2 justify-center items-start">
                                                                <p className="text-lg flex gap-3 justify-center items-center">{recipe.recipe.label} <p className=" font-semibold text-base">{recipe.recipe.dietLabels} </p></p>
                                                                <p className="w-full h-full flex flex-wrap"> {recipe.recipe.healthLabels.join(` • `)}</p>
                                                            </div>

                                                        </div>

                                                        <div className="flex flex-row justify-between w-full items-start h-auto text-sm font-semibold bg-gray-200">
                                                            <div className="w-full h-full flex flex-col justify-start items-center p-4  gap-2">
                                                                <p>{recipe.recipe.yield} pessoa</p>
                                                                <p className="flex justify-center items-center gap-2"><p className="text-3xl">{recipe.recipe.calories.toFixed(0)}</p> kcal</p>

                                                            </div>

                                                            <div className=" w-full h-full flex flex-col gap-2 justify-start items-center p-4 font-normal">
                                                                <p className=" flex flex-row justify-between items-center w-full"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-green-500 " />Proteína:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} {recipe.recipe.totalNutrients.PROCNT.unit}</p></p>
                                                                <p className=" flex flex-row justify-between items-center w-full"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-yellow-500 " />Gordura:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)} {recipe.recipe.totalNutrients.FAT.unit}</p></p>
                                                                <p className=" flex flex-row justify-between items-center w-full"><p className="flex justify-center items-center gap-1"><h1 className="h-2 w-2 rounded-full bg-red-500 " />Carboidratos:</p> <p className="font-semibold">{recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipe.recipe.totalNutrients.CHOCDF.unit}</p></p>
                                                            </div>

                                                            <div className=" w-full h-full flex flex-col justify-start items-center p-4 font-normal">
                                                                <p className="flex flex-row justify-between items-center w-full">Colesterol: <p className="font-semibold">{recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} {recipe.recipe.totalNutrients.CHOLE.unit}</p></p>
                                                                <p className="flex flex-row justify-between items-center w-full">Sódio: <p className="font-semibold">{recipe.recipe.totalNutrients.NA.quantity.toFixed(0)} {recipe.recipe.totalNutrients.NA.unit}</p></p>
                                                                <p className="flex flex-row justify-between items-center w-full">Cálcio: <p className="font-semibold">{recipe.recipe.totalNutrients.CA.quantity.toFixed(0)} {recipe.recipe.totalNutrients.CA.unit}</p></p>
                                                                <p className="flex flex-row justify-between items-center w-full">Magnésio: <p className="font-semibold">{recipe.recipe.totalNutrients.MG.quantity.toFixed(0)} {recipe.recipe.totalNutrients.MG.unit}</p></p>
                                                                <p className="flex flex-row justify-between items-center w-full">Potássio: <p className="font-semibold">{recipe.recipe.totalNutrients.K.quantity.toFixed(0)} {recipe.recipe.totalNutrients.K.unit}</p></p>
                                                                <p className="flex flex-row justify-between items-center w-full">Ferro: <p className="font-semibold">{recipe.recipe.totalNutrients.FE.quantity.toFixed(0)} {recipe.recipe.totalNutrients.FE.unit}</p></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    </div>)}
                            </div>
                        }
                    </div>)}




                    {Inicio && (
                        <div className='h-full w-full flex flex-col justify-center items-center text-2xl font-semibold'>
                            <img src="src/assets/Logo/Logo.ico" alt="" />
                            <p>Pesquise Algum alimento!</p>
                        </div>
                    )}

                    {Alergia && (
                        <div className="flex flex-row flex-wrap w-2/4 gap-3 p-5  z-0 ">
                            <button onClick={() => handleFiltersHealth('egg-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem Ovo</button>
                            <button onClick={() => handleFiltersHealth('fish-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem peixe</button>
                            <button onClick={() => handleFiltersHealth('mustard-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem mostarda</button>
                            <button onClick={() => handleFiltersHealth('sesame-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem gergelim</button>
                            <button onClick={() => handleFiltersHealth('soy-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem soja</button>
                            <button onClick={() => handleFiltersHealth('wheat-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem trigo</button>
                            <button onClick={() => handleFiltersHealth('tree-Nut-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem nozes</button>
                            <button onClick={() => handleFiltersHealth('peanut-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sem amendoim</button>
                            <button onClick={() => handleFiltersHealth('gluten-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Não contém gluten</button>
                            <button onClick={() => handleFiltersHealth('dairy-free')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Livre de laticínios</button>
                        </div>
                    )}

                    {Dieta && (
                        <div className="flex flex-row flex-wrap w-2/4 gap-3 p-5  z-0 ">
                            <button onClick={() => handleFiltersDiet('balanced')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Balanced</button>
                            <button onClick={() => handleFiltersDiet('high-fiber')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />High-Fiber</button>
                            <button onClick={() => handleFiltersDiet('high-protein')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />High-Protein</button>
                            <button onClick={() => handleFiltersDiet('low-carb')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Low-Carb</button>
                            <button onClick={() => handleFiltersDiet('low-fat')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />	Low-Fat</button>
                            <button onClick={() => handleFiltersDiet('low-sodium')} className="p-1 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Low-Sodium</button>

                        </div>
                    )}


                    {Caloria && (
                        <div className='h-full w-full flex flex-col justify-center items-center text-2xl font-semibold'>
                            <img src="src/assets/Logo/Logo.ico" alt="" />
                            <p>Estamos trabalhando nisso</p>
                        </div>
                    )}

                    {Nutrientes && (
                        <div className="flex flex-col w-full h-full flex-wrap  gap-3 p-5  z-0 ">
                            <div className="flex flex-col flex-wrap  gap-6 p-5  z-0 ">

                                <h1 className="text-2xl">Macronutrientes</h1>
                                <h2 className="w-full flex flex-row flex-wrap justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <button onClick={() => handleFiltersNutrient('FAT')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Gordura</button>
                                        <button onClick={() => handleFiltersNutrient('FASAT')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Gordura Saturada</button>
                                        <button onClick={() => handleFiltersNutrient('FATRN')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Gordura Trans</button>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button onClick={() => handleFiltersNutrient('FAMS')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Gordura Monoinsaturada</button>
                                        <button onClick={() => handleFiltersNutrient('FAPU')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Gordura Poli-insaturada</button>
                                        <button onClick={() => handleFiltersNutrient('CHOCDF')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Carboidratos</button>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button onClick={() => handleFiltersNutrient('FIBTG')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Fibra</button>
                                        <button onClick={() => handleFiltersNutrient('SUGAR')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Açúcares</button>
                                        <button onClick={() => handleFiltersNutrient('PROCNT')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Proteína</button>
                                    </div>
                                </h2>
                            </div>

                            <div className="flex flex-col flex-wrap  gap-6 p-5  z-0 ">
                                <h1 className="text-2xl">Micronutrientes</h1>
                                <h2 className=" flex  flex-COL flex-wrap justify-between items-center">
                                    <div className="flex flex-col gap-4">

                                        <button onClick={() => handleFiltersNutrient('CHOLE')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Colesterol</button>
                                        <button onClick={() => handleFiltersNutrient('NA')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Sódio</button>
                                        <button onClick={() => handleFiltersNutrient('CA')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Cálcio</button>
                                        <button onClick={() => handleFiltersNutrient('MG')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Magnésio</button>
                                        <button onClick={() => handleFiltersNutrient('K')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Potássio</button>
                                        <button onClick={() => handleFiltersNutrient('FE')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Ferro</button>

                                    </div>

                                    <div className="flex flex-col gap-4">

                                        <button onClick={() => handleFiltersNutrient('P')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Fósforo</button>
                                        <button onClick={() => handleFiltersNutrient('VITA_RAE')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina A</button>
                                        <button onClick={() => handleFiltersNutrient('VITC')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina C</button>
                                        <button onClick={() => handleFiltersNutrient('THIA')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Tiamina (B1)</button>
                                        <button onClick={() => handleFiltersNutrient('RIBF')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Riboflavina (B2)</button>
                                        <button onClick={() => handleFiltersNutrient('NIA')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Niacina (B3)</button>

                                    </div>

                                    <div className="flex flex-col gap-4">

                                        <button onClick={() => handleFiltersNutrient('VITB6A')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina B6</button>
                                        <button onClick={() => handleFiltersNutrient('FOLDFE')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Folato </button>
                                        <button onClick={() => handleFiltersNutrient('VITB12')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina B12</button>
                                        <button onClick={() => handleFiltersNutrient('VITD')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina D</button>
                                        <button onClick={() => handleFiltersNutrient('TOCPHA')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina E</button>
                                        <button onClick={() => handleFiltersNutrient('VITK1')} className="p-1 py-2 bg-gray-200 h-auto w-auto rounded-full flex flex-row justify-center items-center gap-2 text-sm cursor-pointer px-2"><FiPlus />Vitamina K</button>

                                    </div>

                                </h2>
                            </div>



                        </div>
                    )}
                </div >

                <div className=" h-full w-1/2 shadow-2xl z-20 p-5 pt-16">
                    <div className="flex flex-row flex-wrap gap-2 justify-start items-center ">

                        {Object.keys(filtersHealth).filter(key => filtersHealth[key]).map(filter => (
                            <div key={filter} className="">
                                <div className="bg-slate-200 flex flex-row justify-center items-center gap-2  p-2 px-3 rounded-full text-xs">
                                    {filterNames[filter]}
                                    <button onClick={() => handleRemoveFiltersHealth(filter)}><FiX /></button>
                                </div>
                            </div>
                        ))}
                        {Object.keys(filtersDiet).filter(key => filtersDiet[key]).map(filter => (
                            <div key={filter} className="">
                                <div className="bg-slate-200 flex flex-row justify-center items-center gap-2  p-2 px-3 rounded-full text-xs">
                                    {filterNames[filter]}
                                    <button onClick={() => handleRemoveFiltersDiet(filter)}><FiX /></button>
                                </div>
                            </div>
                        ))}
                        {Object.keys(filtersNutrient).filter(key => filtersNutrient[key]).map(filter => (
                            <div key={filter} className="">
                                <div className="bg-slate-200 flex flex-row justify-center items-center gap-2  p-2 px-3 rounded-full text-xs">
                                    {filterNames[filter]}
                                    <button onClick={() => handleRemoveFiltersNutrient(filter)}><FiX /></button>
                                </div>
                            </div>
                        ))}
                        {Object.keys(filtersAllergy).filter(key => filtersAllergy[key]).map(filter => (
                            <div key={filter} className="">
                                <div className="bg-slate-200 flex flex-row justify-center items-center gap-2  p-2 px-3 rounded-full text-xs">
                                    {filterNames[filter]}
                                    <button onClick={() => handleRemoveFiltersAllergy(filter)}><FiX /></button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        </>
    )
}