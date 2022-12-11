import { useState } from "react"
import styled from "styled-components"

export default function Seat(prop){
    const [seatColor, setSeatColor] = useState('#5992d3') 
    return(
        <>
        <SeatStyle/>
        </>
        )
    
}

const SeatStyle = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: #c3cfd9;
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
`