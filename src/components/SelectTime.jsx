import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import Button from "./Button";
import { useParams } from "react-router-dom";



export default function SelectTime(prop) {
    
  let params = useParams()  
  params = params.sessionId
  console.log(params)
    
  let [movieData, setMovieData] = useState(axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params}/showtimes`))
  
  function movieSet () {
    if(!movieSet){setMovieData('aaaa')}
  }

  movieData.then(getMovie)
  movieData.catch(console.log('ocorreu um erro, tente novamente mais tarde'))

  let days
  const [available, setAvailable] = useState()
  const [movieTitle, setMovieTitle] = useState()
  const [posterURL, setPosterURL] = useState()

  function getMovie(params) {
    days=params.data
    console.log(days)
    setAvailable(days.days)
    setMovieTitle(days.title)
    setPosterURL(days.posterURL)
    console.log(available)
   
  }
  
    

  console.log(movieData)
  
  return (
  <>
  <Container>
    {available ? available.map((n)=><><h2>{n.weekday}</h2><Options>
      {n.showtimes.map((m)=> <Button time={m.name} id={m.id}/>)}
      </Options></>) : ''}
    
  </Container>
  
  <Footer>
  <Banner><img src={posterURL}/></Banner>
    <div>{movieTitle}</div>
    
  </Footer>
    </>
  );
  
}


const Options = styled.div`
  display: flex;
`
/*
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
*/

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