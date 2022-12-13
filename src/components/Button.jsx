import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Button(prop){
    const linkTo = `/assentos/${prop.id}`
    return(
        <Link to={linkTo}>
        <ButtonStyle data-identifier="showtime" >
        {prop.time}
        </ButtonStyle>
        </Link>
    )
}

const ButtonStyle = styled.button`
border-radius : 5px;
width:82px;
height: 43px;
background-color: #e8b13a;
margin-right:8px;
color: white;
border:none;
justify-content: center;
align-items: center;
`