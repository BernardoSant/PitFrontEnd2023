import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const ref = useRef('')
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [newRecord, setNewRecord] = useState(false);
  const [telefone, setTelefone] = useState('');
  const userId = document.cookie.split("; ").find((row) => row.startsWith("user_id="))?.split("=")[1];
  const navigate = useNavigate()

  const handleChangeCpf = (event) => {
    const { value } = event.target;
    // Remove qualquer caractere que não seja número
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara
    let maskedValue = '';
    if (numericValue.length <= 3) {
      maskedValue = numericValue;
    } else if (numericValue.length <= 6) {
      maskedValue = `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
    } else if (numericValue.length <= 9) {
      maskedValue = `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6)}`;
    } else {
      maskedValue = `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6, 9)}-${numericValue.slice(9, 11)}`;
    }

    setCpf(maskedValue);
  };

  const handleChangeCep = (event) => {
    const { value } = event.target;
    // Remove qualquer caractere que não seja número
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara
    let maskedValue = '';
    if (numericValue.length <= 5) {
      maskedValue = numericValue;
    } else if (numericValue.length <= 6) {
      maskedValue = `${numericValue.slice(0, 5)}-${numericValue.slice(5)}`;
    } else {
      maskedValue = `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`;
    }

    setCep(maskedValue);
  };

  const handleChangeTelefone = (event) => {
    const { value } = event.target;
    // Remove qualquer caractere que não seja número
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara
    let maskedValue = '';
    if (numericValue.length <= 2 && numericValue.length > 0) {
      maskedValue = `(${numericValue}`;
    } else if (numericValue.length <= 3) {
      maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
    } else if (numericValue.length <= 7) {
      maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 3)} ${numericValue.slice(3)}`;
    } else if (numericValue.length > 7) {
      maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 3)} ${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
    }

    setTelefone(maskedValue);
  };


  useEffect(() => {
    const profileFormData = ref.current;

    axios.get(`http://localhost:3000/profiles/${userId}`)
      .then(res => {
        if (res.data.length <= 0) {
          setNewRecord(true);
        } else {
          console.log(res.data);
          const profileData = res.data[0];
          setNewRecord(false);
          profileFormData.nome.value = profileData.nome;
          profileFormData.cpf.value = profileData.cpf;
          profileFormData.telefone.value = profileData.telefone;
          profileFormData.sexo.value = profileData.sexo;
          profileFormData.idade.value = profileData.idade;
          profileFormData.sangue.value = profileData.sangue;
          profileFormData.altura.value = profileData.altura;
          profileFormData.peso.value = profileData.peso;
          profileFormData.alergias.value = profileData.alergias;
          profileFormData.rua.value = profileData.rua;
          profileFormData.bairro.value = profileData.bairro;
          profileFormData.numero.value = profileData.numero;
          profileFormData.complemento.value = profileData.complemento;
          profileFormData.cep.value = profileData.cep;
        }
      })
      .catch(err => {
        toast.error(err.message);
      })
  }, [userId]);


  const handleSubmit = async (e) => {
    e.preventDefault();


    const profileCreate = ref.current;

    if (newRecord) {
      await axios.post("http://localhost:3000/profiles", {
        ID_USUARIO: parseInt(userId),
        NOME: profileCreate.nome.value,
        CPF: profileCreate.cpf.value,
        TELEFONE: profileCreate.telefone.value,
        SEXO: profileCreate.sexo.value,
        IDADE: parseInt(profileCreate.idade.value),
        SANGUE: profileCreate.sangue.value,
        ALTURA: parseInt(profileCreate.altura.value),
        PESO: parseFloat(profileCreate.peso.value),
        ALERGIAS: profileCreate.alergias.value,
        RUA: profileCreate.rua.value,
        BAIRRO: profileCreate.bairro.value,
        NUMERO: parseInt(profileCreate.numero.value),
        COMPLEMENTO: profileCreate.complemento.value.length > 0 ? profileCreate.complemento.value : 'Não tem',
        CEP: profileCreate.cep.value,
      })
        .then(res => {
          if (res.data.Status === 'Success') {
            alert("Dados cadastrados com sucesso")
            navigate('/perfil')
          } else {
            toast.error(res.data.Error)
          }
        })
        .catch(({ err }) => toast.error(err));
    }
    else {
      await axios.put(`http://localhost:3000/profiles`, {
        ID_USUARIO: parseInt(userId),
        NOME: profileCreate.nome.value,
        CPF: profileCreate.cpf.value,
        TELEFONE: profileCreate.telefone.value,
        SEXO: profileCreate.sexo.value,
        IDADE: parseInt(profileCreate.idade.value),
        SANGUE: profileCreate.sangue.value,
        ALTURA: parseInt(profileCreate.altura.value),
        PESO: parseFloat(profileCreate.peso.value),
        ALERGIAS: profileCreate.alergias.value,
        RUA: profileCreate.rua.value,
        BAIRRO: profileCreate.bairro.value,
        NUMERO: parseInt(profileCreate.numero.value),
        COMPLEMENTO: profileCreate.complemento.value.length > 0 ? profileCreate.complemento.value : 'Sem complemento',
        CEP: profileCreate.cep.value,
      })
        .then(res => {
          if (res.data.Status === 'Success') {
            alert("Dados cadastrados com sucesso")
            navigate('/perfil')
          } else {
            toast.error(res.data.Error)
          }
        })
        .catch(({ err }) => toast.error(err));
    }

    profileCreate.nome.value = "";
    profileCreate.cpf.value = "";
    profileCreate.telefone.value = "";
    profileCreate.sexo.value = "";
    profileCreate.idade.value = "";
    profileCreate.sangue.value = "";
    profileCreate.altura.value = "";
    profileCreate.peso.value = "";
    profileCreate.alergias.value = "";
    profileCreate.rua.value = "";
    profileCreate.bairro.value = "";
    profileCreate.numero.value = "";
    profileCreate.complemento.value = "";
    profileCreate.cep.value = "";

    setCep("");
    setCpf("");
    setTelefone("");
  };

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center p-2">
      <form
        ref={ref}
        className="bg-white p-8 rounded shadow w-3/4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Dados do Perfil</h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome*:
          </label>
          <input
            type="text"
            id="name"
            name="nome"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idade_id">
            Idade*:
          </label>
          <input
            type='number'
            id="idade_id"
            name="idade"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite sua Idade"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf_id">
            CPF*:
          </label>
          <input
            id="cpf_id"
            value={cpf}
            onChange={handleChangeCpf}
            name="cpf"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu CPF"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefone_id">
            Telefone*:
          </label>
          <input
            id="telefone_id"
            value={telefone}
            onChange={handleChangeTelefone}
            name="telefone"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu Telefone"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label defaultValue={"A"} htmlFor="sexo_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo*:</label>
          <select id="sexo_id" name="sexo" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="A">Escolha seu sexo</option>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="sangue_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo sanguíneo*:</label>
          <select defaultValue={"Aa"} id="sangue_id" name="sangue" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="Aa">Escolha seu tipo</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rua_id">
            Rua*:
          </label>
          <input
            id="rua_id"
            name="rua"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite sua rua"
            rows="2"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bairro_id">
            Bairro*:
          </label>
          <input
            id="bairro_id"
            name="bairro"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu bairro"
            rows="2"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_id">
            Número*:
          </label>
          <input
            id="numero_id"
            name="numero"
            type="number"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite o número da residência"
            rows="2"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complemento_id">
            Complemento:
          </label>
          <input
            id="complemento_id"
            name="complemento"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite o complemento"
            rows="2"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep_id">
            CEP*:
          </label>
          <input
            id="cep_id"
            value={cep}
            onChange={handleChangeCep}
            name="cep"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu CEP"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="altura_id">
            Altura (cm)*:
          </label>
          <input
            type="number"
            id="altura_id"
            name="altura"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite sua altura (cm)"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peso_id">
            Peso*:
          </label>
          <input
            type="number"
            id="peso_id"
            name="peso"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite seu peso (KG)"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alergias_id">
            Alergias*:
          </label>
          <textarea
            id="alergias_id"
            name="alergias"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Digite suas alergias"
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Salvar</button>
      </form>
    </div>
  );
};

export default ProfileForm;