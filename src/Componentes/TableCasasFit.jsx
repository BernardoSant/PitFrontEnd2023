import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import axios from 'axios'

const Tabela = styled.table`
  width: 100%;
  background-color: #71717a;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1000px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding: 0 4px 4px 4px;
  color: black;

  @media (max-width: 500px){
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding: 8px;
  text-align: ${(props) => (props.aligncenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => (props.onlyWeb && "display: none")}
  }
`;

const Table = ({casas, setCasas, setOnEdit}) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  }

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3000/casasfit/" + id)
    .then(({data}) =>{
      const newArray = casas.filter(casa => casa.CASAFIT_ID !== id);

      toast.success(data);
      setCasas(newArray);
    })
    .catch(({data}) => {
      toast.error(data);
    })
  }

  return(
    <Tabela>
      <Thead>
        <Tr>
          <Th>Nome:</Th>
          <Th>CNPJ:</Th>
          <Th>CEP:</Th>
          <Th>Telefone:</Th>
          <Th>Abre às:</Th>
          <Th>Fecha às:</Th>
        </Tr>
      </Thead>
      <Tbody>
          {casas.map((item, i) =>(
            <Tr className='text-[#f0f8ff] border-b-2 border-orange-400' key={i}>
              <Td width="23%">{item.NOME}</Td>
              <Td width="18%">{item.CNPJ}</Td>
              <Td width="12%">{item.CEP}</Td>
              <Td width="15%">{item.TELEFONE}</Td>
              <Td width="10%">{item.HORARIO_ABRE}</Td>
              <Td width="10%">{item.HORARIO_FECHA}</Td>
              <Td width="6%" className='px-4'>
                <FaEdit className='text-black cursor-pointer hover:text-orange-500' onClick={() => handleEdit(item)}/>
              </Td>
              <Td width="6%">
                <FaTrash className='text-black cursor-pointer hover:text-orange-500' onClick={() => handleDelete(item.CASAFIT_ID)}/>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Tabela>
  )
}

Table.propTypes = {
  casas: PropTypes.array,
  setCasas: PropTypes.func,
  setOnEdit: PropTypes.func
}

export default Table