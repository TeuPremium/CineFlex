import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SelectMovie from './components/Movies/SelectMovie';
import Section from './components/Section';
import { useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import styled from 'styled-components';

function App() {
  const [section, setSection]=useState('Selecione o filme')
  
  

  const [movies, setMovies] = useState()
  let getMovie = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
  getMovie.then(movieSet) 
  console.log(movies)

  function movieSet(input){
    if(!movies)
    {setMovies(input.data)}
  
  }
  

  return (
  <>
  <Header/>
  <Section section={section}/>
  <MovieCatalog>
   
  {movies ? movies.map((n) => <SelectMovie movieId={n.id} movieTitle={n.title} moviePoster={n.posterURL} movieOverview={n.overview} movieReleaseDate={n.releaseDate} />) : <Loading />}
    
  </MovieCatalog>
  </>
  );
}

const MovieCatalog = styled.div `
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-left: 12%;
margin-right: 12%;
`

export default App;
