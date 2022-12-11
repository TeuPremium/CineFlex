import { useState } from "react"
import styled from "styled-components"

let selectedSeats = []

export default function Seat(prop){
    const [seatColor, setSeatColor] = useState('#5992d3') 

    function selectedSeat(target){
        selectedSeats.includes(prop.number) ? selectedSeats.push(target): selectedSeats=selectedSeats
        setSeatColor('#1aae9e')
        console.log(selectedSeats, target)
    }

    return(
        <>
        <SeatStyle onClick={() => selectedSeat(prop.number)} color={seatColor}>{prop.number}</SeatStyle>
        </>
        )
    
}

const SeatStyle = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color:${props => props.color};
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
`