import styled from "styled-components";

export const LandingpageStyle = styled.div`
    .header-section{
        height: 60vh;
    }
    .background-image{
        position: absolute;
        width: 100%;
        height: 60vh;
        top: 91px;
        left: 0;
        z-index: 10;
    }
    .background-image img{
        width: 100%;
    }
    .text-section{
        top: 25%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
        text-align: center;
        margin-top: 4%;
        width: 50%;
        position: absolute;
        z-index: 11;
    }
    .text-section h1{
        font-size: 3.4rem;
        font-weight: bolder;
    }
    .text-section p{
        /* margin-top: 5%; */
        font-size: 1.3rem;
        color: gray;
        width: 70%;
        margin: 2% auto;
    }
    .btn{
        background-color: #1E65EF;
        border: none;
        padding: 1.2% 5%;
        font-weight: bold;
        border-radius: 3px;
        color: white;
        font-size: 1.2rem;
        margin-top: 1%;
    }

`;