import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SelectMovie from './components/Movies/SelectMovie';
import Section from './components/Section';
import { useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';

function App() {
  const [section, setSection]=useState('Selecione o filme')
  
  const changeSection = (input) => {setSection(input)}

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
  {movies ? movies.map((n) => <SelectMovie movieId={n.id} movieTitle={n.title} moviePoster={n.posterURL} movieOverview={n.overview} movieReleaseDate={n.releaseDate} />) : <Loading />}
  </>
  );
}

export default App;
