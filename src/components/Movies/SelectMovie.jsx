import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function SelectMovie(prop) {
 console.log(prop.moviePoster)
  return (
    <Container>
      {prop.movieId}
      {prop.movieTitle}
      <img src={prop.moviePoster}/>
    </Container>
    );
  }

  const Container = styled.div`
    width: 145px;
    height: 209px;
    left: 205px;
    top: 389px;
    margin-left: 30px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
      img{
        width: 129px;
        height: 193px;
      }
  `
  