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
  max-width: 1200px;
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

const Table = ({users, setUsers, setOnEdit}) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  }

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3000/users/" + id)
    .then(({data}) =>{
      const newArray = users.filter(user => user.USUARIO_ID !== id);

      toast.success(data);
      setUsers(newArray);
    })
    .catch(({data}) => {
      toast.error(data);
    })
  }

  return(
    <Tabela>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Telefone</Th>
          <Th>Email</Th>
          <Th>Endereço</Th>
        </Tr>
      </Thead>
      <Tbody>
          {users.map((item, i) =>(
            <Tr className='text-[#f0f8ff] border-b-2 border-orange-400' key={i}>
              <Td width="21%">{item.NOME}</Td>
              <Td width="13%">{item.CPF}</Td>
              <Td width="15%">{item.TELEFONE}</Td>
              <Td width="20%">{item.EMAIL}</Td>
              <Td width="21%">{item.ENDERECO}</Td>
              <Td width="5%" className='px-4'>
                <FaEdit className='text-black cursor-pointer hover:text-orange-500' onClick={() => handleEdit(item)}/>
              </Td>
              <Td width="5%">
                <FaTrash className='text-black cursor-pointer hover:text-orange-500' onClick={() => handleDelete(item.USUARIO_ID)}/>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Tabela>
  )
}

Table.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  setOnEdit: PropTypes.func
}

export default Table