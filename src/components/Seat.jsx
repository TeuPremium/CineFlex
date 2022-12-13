import { useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

let selectedSeats = [], seatnumber = []

export default function Seat(prop){
    const [seatColor, setSeatColor] = useState('#c3cfd9') 
    const [seatBorder, setSeatBorder] = useState('#808f9d')
    function toggleSelectedSeat(target){
        selectedSeats.includes(prop.value) ?  removeSeat(prop.value) : selectedSeats.push(prop.value)
        seatnumber.includes(prop.number) ? removeSeat(prop.number) : seatnumber.push(prop.number)
        seatColor == '#c3cfd9' ? setSeatColor('#1aae9e') : setSeatColor('#c3cfd9')
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
        <SeatStyle  onClick={() => {toggleSelectedSeat(prop.number); prop.ids(selectedSeats); prop.numberReturn(seatnumber)}} border={seatBorder} color={seatColor}>{prop.number}</SeatStyle>
        </>
        )
    
}

const SeatStyle = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color:${props => props.color};
    border-color:${props => props.border};
    border-width: 1px;
    border-style: solid;
    margin-right: 10px;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
`