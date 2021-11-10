import styled from "styled-components";
export const ImageSection = styled.section`
  margin-bottom: 2rem;
  label {
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
    border: none;
    color: white;
    background-color: #0066ff;
    opacity: 0.8;
    border-radius: 3.5rem;
    letter-spacing: -0.09rem;
    padding: 1.5rem;
    transition: all 250ms ease-in-out;
  }
  label:hover {
    opacity: 0.5;
  }
`
export const ImageContainer = styled.div`
    margin-bottom: 3rem;
    img { 
      margin: 0 auto;
      display: block;
      max-width: 100%;
      height: auto;
      margin-bottom: 3rem;
      border-radius: 20rem;
    }
    button {
        min-width: 6.6rem;
        border: none;
        color: white;
        background-color: #0066ff;
        opacity: 0.8;
        border-radius: 3.5rem;
        letter-spacing: -0.09rem;
        width: 20%;
        font-weight: 700;
        font-size: 1.5rem;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 250ms ease-in-out;
    }
    button:hover {
        opacity: 0.5;
    }
`
