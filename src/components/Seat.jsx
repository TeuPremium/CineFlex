import { useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

let selectedSeats = []

export default function Seat(prop){
    const [seatColor, setSeatColor] = useState('#5992d3') 
    function toggleSelectedSeat(target){
        selectedSeats.includes(prop.value) ?  removeSeat(prop.value) : selectedSeats.push(prop.value)
        seatColor == '#5992d3' ? setSeatColor('#1aae9e') : setSeatColor('#5992d3')
        console.log(selectedSeats)
        
    }

    function removeSeat(id){
        for(let i=0;i<=selectedSeats.length;i++){
            if(selectedSeats[i]===id){
                selectedSeats.splice(i, 1)
            }
            
        }
        
    }

    return(
        <>
        <SeatStyle  onClick={() => {toggleSelectedSeat(prop.number); prop.ids(selectedSeats)}} color={seatColor}>{prop.number}</SeatStyle>
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