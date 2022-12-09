import styled from "styled-components";

export default function Loading() {
    return (
    <Container>
        <div>Aguarde...</div>
    <img src="./Assets/3d2132e3c9ed8bfde4d3d2c656ed2b1d.gif"/>
    </Container>
    );
  }
  
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 75%;
  }
  `