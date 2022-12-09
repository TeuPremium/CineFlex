import styled from "styled-components";

export default function Header() {
    return (
    <>
    <Head>
        CINEFLEX
    </Head>
    </>
    );
  }
  
  const Head = styled.div`
    display: flex;
    width: 100%;
    height: 67px;
    background-color: black;
    color: gold;
    font-size: 34px;
    align-items: center;
    justify-content: center;
  `