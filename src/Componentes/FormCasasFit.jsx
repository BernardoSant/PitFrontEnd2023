import { useRef, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { toast } from 'react-toastify'

const Form = ({getCasas, onEdit, setOnEdit}) => {
  const ref = useRef('')

  useEffect(() => {
    if(onEdit){
      const casa = ref.current;

      casa.nome.value = onEdit.NOME
      casa.cnpj.value = onEdit.CNPJ
      casa.cep.value = onEdit.CEP
      casa.telefone.value = onEdit.TELEFONE
      casa.horario_abre.value = onEdit.HORARIO_ABRE
      casa.horario_fecha.value = onEdit.HORARIO_FECHA
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const casa = ref.current;

    if(
      !casa.nome.value ||
      !casa.cnpj.value ||
      !casa.cep.value ||
      !casa.telefone.value ||
      !casa.horario_abre.value ||
      !casa.horario_fecha.value
    ){
      return toast.warn("Preencha todos os campos!");
    }

    if(onEdit) {
      await axios
        .put("http://localhost:3000/casasfit/" + onEdit.CASAFIT_ID, {
          NOME: casa.nome.value,
          CNPJ: casa.cnpj.value,
          CEP: casa.cep.value,
          TELEFONE: casa.telefone.value,
          HORARIO_ABRE: casa.horario_abre.value,
          HORARIO_FECHA: casa.horario_fecha.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    else{
      await axios.post("http://localhost:3000/casasfit", {
          NOME: casa.nome.value,
          CNPJ: casa.cnpj.value,
          CEP: casa.cep.value,
          TELEFONE: casa.telefone.value,
          HORARIO_ABRE: casa.horario_abre.value,
          HORARIO_FECHA: casa.horario_fecha.value,
        })
        .then(({data}) => toast.success(data))
        .catch(({error}) => toast.error(error));
    }

    casa.nome.value = "";
    casa.cnpj.value = "";
    casa.cep.value = "";
    casa.telefone.value = "";
    casa.horario_abre.value = "";
    casa.horario_fecha.value = "";

    setOnEdit(null);
    getCasas();
  }

  return (
    <>
      <form ref={ref} onSubmit={handleSubmit} className="flex bg-zinc-500 p-5 items-end gap-2.5 flex-wrap shadow-[0_0_5px_rgba(204, 204, 204,0.3)] rounded-md">
        <div className='flex flex-col'>
          <label htmlFor="">Nome</label>
          <input name='nome' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">CNPJ</label>
          <input name='cnpj' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">CEP</label>
          <input name='cep' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Telefone</label>
          <input name='telefone' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Abre às</label>
          <input name='horario_abre' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Fecha às</label>
          <input name='horario_fecha' className='w-30 px-2.5 border border-solid border-zinc-400 rounded-md h-10'/>
        </div>

        <button className='p-2.5 rounded-md border-none bg-orange-600 text-white h-10' type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Form;

Form.propTypes = {
  getCasas: PropTypes.func,
  onEdit: PropTypes.any,
  setOnEdit: PropTypes.func,
}
