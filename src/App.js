import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SelectMovie from './components/Movies/SelectMovie';
import Section from './components/Section';
import { useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import styled from 'styled-components';
import SelectTime from './components/SelectTime';
import SelectAssento from './components/SelectAssento';


function App() {
  const [section, setSection]=useState('Selecione o filme')
  
  
  const [movies, setMovies] = useState()
  let getMovie = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
  getMovie.then(movieSet) 
  
  
  
  function movieSet(input){
    if(!movies)
    {setMovies(input.data)}
    
  }
  
  const [time, setTime] = useState()
  
  
  const [movieSection, setMovieSection] = useState()
  
  

  /*apagar*/
  let getHora = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies/2/showtimes')
  getHora.then(timeSet)
  let getSection = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/showtimes/17/seats')
  getSection.then(movieSectionSet)
  /*apagar*/
  function timeSet (input){

    if(!time){(setTime(input.data))}
    
  }

  function movieSectionSet (input){
    if(!movieSection){(setMovieSection(input.data))}
   
  }
 
  

  return (
  <>
  <Header/>
  <Section section={section}/>
  {/*<MovieCatalog>

  {movies ? movies.map((n) => <SelectMovie movieId={n.id} movieTitle={n.title} moviePoster={n.posterURL} movieOverview={n.overview} movieReleaseDate={n.releaseDate} />) : <Loading />}
    
  </MovieCatalog>
  {time ?  <SelectTime movieTitle={time.title} movieDays={time.days} moviePoster={time.posterURL} movieSection={(movieSection)=>setMovieSection(movieSection)} /> : <Loading />}
*/}
  { movieSection ? <SelectAssento seats={movieSection.seats} movie={movieSection.movie} day={movieSection.day}/> : <Loading/>}
  
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
