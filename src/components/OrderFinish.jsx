import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OrderFinish(prop) {
  console.log(prop.seats)  
  return (
    <>
    <Head>
      Pedido feito com sucesso!
    </Head>
    <Container>
      <h1>Filme e sessao</h1><br/>
      {prop.movie.movie.title}<br/>
      {prop.movie.day.weekday} {prop.movie.name}<br/>
    </Container>
    
    <Container>
      <h1>Ingressos</h1>
      {prop.seats.map((n) => <p>assento {n}</p>)}<br/>
      
      
    </Container>
    <Container>
    <h1>Comprador</h1><br/>
    Nome: {prop.name}<br/>
    CPF: {prop.cpf}<br/>
    </Container>
    <HomeBtn>
      <Link to='/'>
      <input type="button" value="Voltar para Home" />
      </Link>
    </HomeBtn>
    </>
    );
  }
  
  const Head =styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 400;
    color:#247a6b;
    justify-content: center;
    text-align: center;
    
  `
  const Container = styled.div`
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    font-size: 22px;
    font-weight: 400;
    
    h1{
      font-weight: 700;
      font-size: 24px;
      line-height: 15px;
    }
  `
  const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 30px;
    input{
      width: 225px;
      height: 42px;
      left: 74px;
      top: 622px;

      background: #E8833A;
      border-radius: 3px;
      border-style: solid;
      border-width: 0;
      cursor: pointer;
    }
  `