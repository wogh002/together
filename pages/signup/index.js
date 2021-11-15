import styled, { css } from 'styled-components';
import { Button } from 'antd';
export const Form = styled.form`
/* mobile */
    display: block;
    width: 100%;
    padding: 9rem 2rem;
    position: relative;
    h1 {
        font-size: 3rem;
        width: 100%;
        text-align: center;
        letter-spacing: -0.09rem;
        margin-bottom: 6rem;
    }
    & > div {
        position: relative;
    }
    & > div > span {
        display: block;
        width: 100%;
        padding: 0.5rem;
    }
    
    /* & > div > span:nth-child(1) + button + span {
        top: 0.5rem;
        z-index: -5;
        ${({ color, theme: { colors } }) => color === colors.red && css`
        color: #D30000;
    `}
    } */
    svg {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    div span input {
        width: 100%;
        letter-spacing: -0.09rem;
        font-size: 1.8rem;
        border: 0.05rem solid black;
        transition: all 250ms ease-in-out;
    }
    input:focus {
        outline: none;
        border: none;
    }
    div:last-child{
        width: 100%;
        text-align: center;
        margin-top: 4.3rem;
    }
    div:last-child button:first-child {
        margin-right:1.5rem;
    }
/* Desktop */
    @media (min-width: ${({ theme: { breakPoint } }) => breakPoint}) {
        width: 35%;
        padding: 9rem 2rem;
        margin: 0 auto;
        h1 {
            font-size: 4rem;
        }
    }
`

export const BlueBtn = styled(Button)`
        border:none;
        letter-spacing: -0.09rem;
        width: 38%;
        font-weight: 700;
        font-size: 1.5rem;
        background-color: white;
        border:1px solid ${({ theme: { colors: { blue } } }) => blue};
        color: ${({ theme: { colors: { blue } } }) => blue};
        border-radius: 0.5rem;
        transition: all 250ms ease-in-out;
        cursor: pointer;
        :hover{
            background-color: ${({ theme: { colors: { blue } } }) => blue};
            color:white;
        }
`
export const Message = styled.span`
     color: ${({ theme: { colors: { red } } }) => red};
     font-size: 1.5rem;
     position: absolute;
     left: 10rem;
     ${({ color, theme: { colors } }) => color === colors.green && css`
        color: #4CAF50;
    `}
`
export const CheckBtn = styled.button`
       border: none;
       cursor: pointer;
       letter-spacing: -0.09rem;
       font-weight: 700;
        font-size: 1.5rem;
        background-color: ${({ theme: { colors: { blue } } }) => blue};
        transition: all 250ms ease-in-out;
        border-radius: 0.5rem;
        color:white;
        padding: 0.3rem;
        :hover{
            background-color: white;
            color:black;
        }
`

