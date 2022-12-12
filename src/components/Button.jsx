import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Button(prop){
    const linkTo = `/assentos/${prop.id}`
    return(
        <Link to={linkTo}>
        <ButtonStyle>
        {prop.time}
        </ButtonStyle>
        </Link>
    )
}

const ButtonStyle = styled.div`
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