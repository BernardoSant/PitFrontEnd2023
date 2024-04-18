import { useRef, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { toast } from 'react-toastify'

const Form = ({getUsers, onEdit, setOnEdit}) => {
  const ref = useRef('')

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.NOME;
      user.cpf.value = onEdit.CPF;
      user.telefone.value = onEdit.TELEFONE;
      user.email.value = onEdit.EMAIL;
      user.endereco.value = onEdit.ENDERECO;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if(
      !user.nome.value ||
      !user.cpf.value ||
      !user.telefone.value ||
      !user.email.value ||
      !user.endereco.value
    ){
      return toast.warn("Preencha todos os campos!");
    }

    if(onEdit) {
      await axios
        .put("http://localhost:3000/users/" + onEdit.USUARIO_ID, {
          NOME: user.nome.value,
          CPF: user.cpf.value,
          TELEFONE: user.telefone.value,
          EMAIL: user.email.value,
          ENDERECO: user.endereco.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    else{
      await axios.post("http://localhost:3000/users", {
          NOME: user.nome.value,
          CPF: user.cpf.value,
          TELEFONE: user.telefone.value,
          EMAIL: user.email.value,
          ENDERECO: user.endereco.value,
        })
        .then(({data}) => toast.success(data))
        .catch(({error}) => toast.error(error));
    }

    user.nome.value = "";
    user.cpf.value = "";
    user.telefone.value = "";
    user.email.value = "";
    user.endereco.value = "";

    setOnEdit(null);
    getUsers();
  }
  return (
    <>
      <form ref={ref} onSubmit={handleSubmit} className="flex bg-zinc-500 p-5 items-end gap-2.5 flex-wrap shadow-[0_0_5px_rgba(204, 204, 204,0.3)] rounded-md">
        <div className='flex flex-col'>
          <label htmlFor="">Nome</label>
          <input name='nome' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">CPF</label>
          <input name='cpf' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Telefone</label>
          <input name='telefone' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Email</label>
          <input name='email' type='email' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Endereço</label>
          <input name='endereco' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <button className='p-2.5 rounded-md border-none bg-orange-600 text-white h-10' type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Form;

Form.propTypes = {
  getUsers: PropTypes.func,
  onEdit: PropTypes.any,
  setOnEdit: PropTypes.func,
}
