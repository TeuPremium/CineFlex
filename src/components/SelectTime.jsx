import styled from "styled-components";


export default function SelectTime(prop) {

    let days = [... prop.movieDays]
    

  return (
  <>
  <Container>
  {days.map((n)=><><h2>{n.weekday}</h2>
  <Options>
    {n.showtimes.map((m)=><Button onClick={()=>{prop.movieSection(m.id)}}>{m.name}</Button>)}
  </Options></>)}
  
  </Container>
  
  <Footer>
    <Banner><img src={prop.moviePoster}/></Banner>
    <div>{prop.movieTitle}</div>
  </Footer>
    </>
  );
}


const Options = styled.div`
  display: flex;
`

const Button = styled.div`
border-radius : 5px;
width:82px;
height: 43px;
background-color: #e8b13a;
margin-right:8px;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
    margin-left: 24px;
    margin-top: 24px;
    margin-bottom: 150px;
`

const Footer = styled.div`
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    background-color: #000000;
    display: flex;
    div:nth-of-type(2){
        margin-top: 38px;
        margin-left:14px;
        font-size: 26px;
        color: white;
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
    width: 48px;
    height: 72px;
}
`