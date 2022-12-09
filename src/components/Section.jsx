import styled from "styled-components";

export default function Section(prop) {
    return (
    <>
    <Container><span>{prop.section}</span></Container>
    </>
    );
  }
  
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    font-size: 24px;

  `