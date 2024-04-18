import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify";

{/*import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';*/ }

export const TabelaPlanos = () => {
  const navigate = useNavigate();
  const [idPlano, setIdPlano] = useState(0);
  const userId = document.cookie.split("; ").find((row) => row.startsWith("user_id="))?.split("=")[1];

  useEffect(() => {
    axios.get(`http://localhost:3000/planos/${userId}`)
      .then(res => {
        setIdPlano(res.data.Plano);
      })
      .catch(err => {
        toast.error("Erro ao buscar plano : " + err);
      })
  })

  const handleAssinar = async (planoId) => {
    await axios.post("http://localhost:3000/planos/", {
      userId,
      planoId
    })
      .then(res => {
        if (res.data.Status === 'Success') {
          alert("Plano assinado com sucesso!");
          navigate('/perfil')
        } else {
          toast.error(res.data.Error)
        }
      })
      .catch(({ err }) => toast.error(err));
  }

  return (<>
    <div className='h-auto w-full  flex flex-row justify-center items-center gap-5 px-10'>

      <div className='bg-orange-100 rounded-lg border-8 border-orange-300 h-full w-full flex flex-col justify-start items-center gap-16 py-6'>


        <div className='flex flex-col justify-center items-center'>
          <img src="src/assets/Logo/LogoMarca.ico" alt="" className='w-[10vh]' />
          <h1 className="font-bold text-3xl">FitGrátis</h1>
          <span className="text-xl">R$0/MÊS</span>
        </div>

        <div className='h-full flex flex-col justify-between'>
          <div className='h-full text-center  flex flex-col justify-center items-center'>
            <p><b>+15</b> receitas Nutricionais</p>
            <p><b>Chat Privado </b>com Nutricionista</p>
            <p><b>1</b> Cupom de desconto Mensal</p>
            <p>Entregas rápidas</p>
            <p></p>
          </div>

        </div>

        <div className="flex justify-center items-center w-full">
          {
            idPlano === 1 ?
              <button className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">ASSINADO</button>
              :
              <button onClick={() => handleAssinar(1)} className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">Assine já</button>
          }
        </div>
      </div>

      <div className='bg-orange-100 rounded-lg border-8 border-green-300 h-full w-full flex flex-col justify-start items-center gap-16 py-6'>


        <div className='flex flex-col justify-center items-center'>
          <img src="src/assets/Logo/FitPrata.ico" alt="" className='w-[10vh]' />
          <h1 className="font-bold text-3xl">FitPrata</h1>
          <span className="text-xl">R$49,99/MÊS</span>
        </div>

        <div className='h-full flex flex-col justify-between'>
          <div className='h-full text-center flex flex-col justify-center items-center'>
            <p>Controle de <b>evolução</b></p>
            <p><b>+25</b> receitas Nutricionais</p>
            <p><b>Chat Privado </b>com Nutricionista</p>
            <p><b>1</b> Cupom(s) em academias parceiras</p>
            <p><b>2</b> Cupom(s) de desconto mensal</p>
            <p>Entregas rápidas</p>
          </div>
          
        </div>

        <div className="flex justify-center items-center w-full">
            {
              idPlano === 2 ?
                <button className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">ASSINADO</button>
                :
                <button onClick={() => handleAssinar(2)} className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">Assine já</button>
            }
          </div>
      </div>

      <div className='bg-green-100 rounded-lg border-8 border-green-300 h-full w-full flex flex-col justify-start items-center gap-16 py-6'>


        <div className='flex flex-col justify-center items-center text-center'>
          <img src="src/assets/Logo/FitGold.ico" alt="" className='w-[10vh]' />
          <h1 className="font-bold text-3xl">FitGold</h1>
          <span className="text-xl">R$119,99/MÊS</span>
        </div>

        <div className='h-full flex flex-col justify-between'>
          <div className='h-full text-center flex flex-col justify-center items-center'>
            <p>Controle de <b>evolução</b></p>
            <p><b>+40</b> receitas Nutricionais</p>
            <p><b>Chat Privado </b>com Nutricionista</p>
            <p ><b>1</b> Cupom em academias parceiras</p>
            <p><b>1 Avaliação presencial</b>  com  Nutricionista</p>
            <p><b>4</b> Cupom(s) de desconto mensal</p>
            <p>Entregas rápidas</p>
          </div>
          
        </div>
        
        <div className="flex justify-center items-center w-full">
            {
              idPlano === 3 ?
                <button className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">ASSINADO</button>
                :
                <button onClick={() => handleAssinar(3)} className="bg-orange-600 w-auto py-1 px-16 rounded-md font-semibold hover:text-slate-50">Assine já</button>
            }
          </div>
      </div>

    </div>
    {/*<PricingTable highlightColor="#f97316">
      <PricingSlot onClick={console.log("gratis")} buttonText="TESTE DE GRAÇA" title="GRÁTIS" priceText="R$0/MÊS">
        <PricingDetail> <b>40+</b> receitas</PricingDetail>
        <PricingDetail> Controle de <b>evolução</b></PricingDetail>
        <PricingDetail> <b>Chat privado</b> com nutricionista</PricingDetail>
        <PricingDetail strikethrough> <b>Envio de até 7 refeições</b> por semana para a sua casa</PricingDetail>
        <PricingDetail strikethrough> <b>Envio de até 14 refeições</b> por semana para a sua casa</PricingDetail>
      </PricingSlot>

      <PricingSlot highlighted onClick={console.log("medio")} buttonText="ASSINE JÁ" title="PRATA" priceText="R$69,99/MÊS">
        <PricingDetail> <b>40+</b> receitas</PricingDetail>
        <PricingDetail> Controle de <b>evolução</b></PricingDetail>
        <PricingDetail> <b>Chat privado</b> com nutricionista</PricingDetail>
        <PricingDetail> <b>Envio de até 7 refeições</b> por semana para a sua casa</PricingDetail>
        <PricingDetail strikethrough> <b>Envio de até 14 refeições</b> por semana para a sua casa</PricingDetail>
      </PricingSlot>

      <PricingSlot onClick={console.log("bom")} buttonText="ASSINE JÁ" title="OURO" priceText="R$120,99/MÊS">
        <PricingDetail> <b>40+</b> receitas</PricingDetail>
        <PricingDetail> Controle de <b>evolução</b></PricingDetail>
        <PricingDetail> <b>Chat privado</b> com nutricionista</PricingDetail>
        <PricingDetail> <b>Envio de até 7 refeições</b> por semana para a sua casa</PricingDetail>
        <PricingDetail> <b>Envio de até 14 refeições</b> por semana para a sua casa</PricingDetail>
      </PricingSlot>
    </PricingTable>
*/}
  </>
  )
}