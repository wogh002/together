import styled from 'styled-components';
import { Button } from 'antd';
export const Form = styled.form`
/* mobile */
    display: block;
    width: 100%;
    padding: 9rem 2rem;
    h1 {
        font-size: 3rem;
        width: 100%;
        text-align: center;
        letter-spacing: -0.09rem;
    }
    & > div {
        position: relative;
    }
    & > div > span {
        display: block;
        width: 100%;
        padding: 0.5rem;
    }
    & > div > span:nth-child(1) + button {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        color: white;
        background-color: black;
        opacity: 0.8;
        border-radius: 3.5rem;
    }
    & > div > span:nth-child(1) + button:hover {
        opacity: 0.5;
    }
    svg {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    div span input {
        width: 100%;
        border-radius: 1rem;
        letter-spacing: -0.09rem;
        font-size: 1.8rem;
        padding: 1.5rem;
        border: 0.05rem solid black;
        transition: all 250ms ease-in-out;
    }
    input:focus {
        outline: none;
        border: 0.05rem solid ${({ theme: { colors: { blue } } }) => blue};
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
        padding: 1.5rem;
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
export const Error = styled.span`
     color: ${({ theme: { colors: { red } } }) => red};
     position: absolute;
     bottom: 6rem;
     left: 5rem;
`
