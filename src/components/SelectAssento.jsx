import { useState } from "react";
import styled from "styled-components";
import Seat from "./Seat";


export default function SelectAssento(prop) {
  let seats = [... prop.seats]
  
  let [ids, setIds] = useState()
  
  console.log(ids)
  return (
  <>
    
    <Container>
      <form>
      <SeatSelection>

        {seats.map((n) => n.isAvailable ? <Seat  value={n.id} number={n.name} ids={(ids) => setIds(ids)}></Seat> : <SeatUnavailable value={n.id}>{n.name}</SeatUnavailable>)}
          
      
      </SeatSelection>
      </form>
    </Container>
    <SeatStyles>
      <SeatSelected></SeatSelected> <SeatAvailable></SeatAvailable> <SeatUnavailable></SeatUnavailable>

      
    </SeatStyles>
    <SeatDescription>
    <span>Selecionado</span>  <span>Disponivel</span> <span>Indisponivel</span>
    </SeatDescription>

    <BuyerData>
    <label>
      <NameBuyer>
        
          <div>Nome do comprador:</div>
        <input type='text'></input>
        
      </NameBuyer>
      <CpfBuyer>
      
          <div>CPF do comprador:</div>
        <input type='number'></input>
        
      </CpfBuyer>
      <Submit>
      <input type="submit"></input>
      </Submit>
      </label>
    </BuyerData>
  </>
  );
}

const Container = styled.div`
    width: 345px;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   
`
const SeatSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SeatUnavailable = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: #f7c52b;
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
`
const SeatAvailable = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: #5992d3;
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
`
const SeatStyles = styled.div`
justify-content: center;
display: flex;
margin-left: 55px;
margin-top: 10px;
div{
  margin-right: 75px ;
}
`

const SeatDescription = styled.div`
  justify-content: center;
display: flex;
margin-left: 25px;

span{
  margin-right: 25px ;
}
`
const SeatSelected = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color:#1aae9e;
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
`

const CpfBuyer = styled.div`
  width: 327px;
  input{
    border-color: #d4d4d4;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    width: 327px;
    height: 51px;
  }
`
const NameBuyer = styled.div`
  margin-top: 40px;
  width: 327px;
  input{
    border-color: #d4d4d4;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    width: 327px;
    height: 51px;
  }
`
const BuyerData = styled.div `
  display: flex;
  justify-content: center;
`
const Submit = styled.div `
  display: flex;
  justify-content: center;
  margin-right: 25px;
  input{
    background-color: #e8833a;
    border-width: 0px;
    border-radius:3px;
    width:225px;
    height: 42px;
    
  }
`