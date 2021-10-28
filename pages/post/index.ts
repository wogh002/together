import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const AddBtn = styled(PlusCircleOutlined)`
position: fixed;
font-size: 50px;
right: 125px;
bottom: 50px;
cursor: pointer;
`;

export const CardForm = styled.div`
/* mobile */
    display: block;
    width: 100%;
    padding: 9rem 2rem;
    align-items: center;
    justify-content: center;

    @media (min-width: 756px) {
        width: 100%;
        padding: 2rem 1rem;
        display: flex;
        margin: 0 auto;
        h1 {
            font-size: 4rem;
        }
    }
`;

export const CardItem = styled.div`
    margin: 10px 20px;
`;