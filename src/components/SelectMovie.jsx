import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SelectMovie(prop) {
  const idFilme = `/sessoes/${prop.movieId}/`
  return (
    <Container onClick={() => prop.sessao(idFilme)}>
      <Link to={idFilme}>
      <img src={prop.moviePoster}/>
      </Link>
    </Container>
    );
  }

  const Container = styled.div`
    width: 145px;
    height: 209px;
    left: 205px;
    top: 389px;
    background: #FFFFFF;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 11px;
    cursor: pointer;
      img{
        width: 129px;
        height: 193px;
        border-radius: 3px;
      }
  `
  