import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Clock = styled.div`

font-size: 30px;
width: 11rem;
background-color: #e05036;
border-start-start-radius: 20px;
border-end-end-radius: 20px;

`

export default function Relogio() {


    const[time, updateTime] = useState(new Date().toLocaleTimeString())
    const Ticker = () => {
        updateTime(new Date().toLocaleTimeString())
    }
    setInterval(Ticker, 1000)
    return (
        <Clock>
            {time}
        </Clock>
    )
}
