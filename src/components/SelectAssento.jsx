import styled from "styled-components";


export default function SelectAssento(prop) {
  let seats = [... prop.seats]
 
  console.log(seats)


  return (
  <>
    <Container>
    <form type='checkbox'>
       {seats.map((n) => n.isAvailable ? <input type="checkbox" value={n.id}/> : <input disabled='true' type='checkbox'/>)}
    
     </form>

    </Container>
  </>
  );
}

const Container = styled.div`

`