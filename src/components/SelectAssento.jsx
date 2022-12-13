import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";
import { useParams } from "react-router-dom";
import Section from "./Section";



export default function SelectAssento(prop) {

  let params = useParams()  
  params = params.sessionId
  
  const [room, setRoom] = useState(axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params}/seats`))
  room.then(getRoom)
  room.catch('aguardando')
  const [roomData, setRoomData] = useState()

  function getRoom(params) {
    if(roomData){

    }
    else{
    setRoomData(params.data)
    
    }
  }

  
  
  let [ids, setIds] = useState()
  
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [selectedSeats, setSelectedSeats]=useState()
 

  function setNameBuyer(event){
    setName(event.target.value)
    
  }
  function setCpfBuyer(event){
    setCpf(event.target.value)
    
  }

  function post(){
    const reserve = [{ ids:ids, name:name, cpf:cpf}]
    
    ids && name && cpf ? axios.post(reserve) : alert('preencha todos os campos').then(console.log(reserve))
    
    
  }

  

  


  return (
  <>
    <Section section="Selecione o(s) Assento(s)"></Section>
    <Container>
      <form>
      <SeatSelection >

        {roomData ? roomData.seats.map((n) => n.isAvailable ? <Seat  value={n.id} number={n.name} numberReturn={selectedSeats=>setSelectedSeats(selectedSeats)} ids={(ids) => setIds(ids)}></Seat> : <SeatUnavailable onClick={() => alert('Selecione um assento vazio')} value={n.id}>{n.name}</SeatUnavailable>) : ''}
          
        
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
        <input onChange={setNameBuyer} type='text'></input>
        
      </NameBuyer>
      <CpfBuyer>
      
          <div>CPF do comprador:</div>
        <input type='number' onChange={setCpfBuyer}></input>
        
      </CpfBuyer>
      <Submit onClick={()=>{prop.cpf(cpf) ; prop.name(name); prop.movie(roomData); prop.seats(selectedSeats)}}>
      
      {ids && cpf && name ? <Link to='/sucesso'> <input type="submit" value='Reservar assento(s)' onClick={post}></input> </Link> : <input type="submit" value='Reservar assento(s)' onClick={() => alert('preencha todos os campos para continuar')}></input> }
      
      </Submit>
      </label>
    </BuyerData>

    <Footer>
    <Banner>{roomData ? <img src={roomData.movie.posterURL}/> : 'poster'}</Banner>
    {roomData ? <div>
    <div>{roomData.movie.title}</div>
    <div>{roomData.day.weekday} {roomData.name}</div>
    </div> : 'carregando'}
    </Footer>

  </>
  );
}

const Container = styled.div`
    width: 345px;
    margin-top: -25px;
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
    cursor: not-allowed;
`
const SeatAvailable = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: #c3cfd9;
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
  margin-bottom: 137px;
`
const Submit = styled.div `
  display: flex;
  justify-content: center;
  margin-right: 25px;
  margin-top: 57px;
  input{
    background-color: #e8833a;
    border-width: 0px;
    border-radius:3px;
    width:225px;
    height: 42px;
    
  }
`

const Footer = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    background-color: #000000;
    display: flex;
   
    div:nth-of-type(2){
        padding-top: 14px;
        font-size: 26px;
        color: white;
        height: 100%;
        
        padding-bottom: 14px;
        display: flex;
        flex-direction:column ;
        text-overflow: ellipsis;
        div{
          padding-left: 14px;
        }
    }

`

const Banner = styled.div`
margin-top:14px ;
margin-bottom: 14px;
margin-left: 10px;
width: 64px;
height: 89px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 54px;
    
}
`