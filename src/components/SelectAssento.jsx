import styled from "styled-components";
import Seat from "./Seat";


export default function SelectAssento(prop) {
  let seats = [... prop.seats]
 
  console.log(seats)

  function toggle(input){

  }

  return (
  <>

    <Container>
      <form>
      <SeatSelection>

        {seats.map((n) => n.isAvailable ? <Seat onClick={toggle} value={n.id}>{n.name}</Seat> : <SeatUnavailable value={n.id}>{n.name}</SeatUnavailable>)}
          
      
      </SeatSelection>
      </form>
    </Container>
    <SeatStyles>
      <Seat></Seat> <Seat></Seat> <SeatUnavailable></SeatUnavailable>

      
    </SeatStyles>
    <SeatDescription>
    <span>Selecionado</span>  <span>Disponivel</span> <span>Indisponivel</span>
    </SeatDescription>
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