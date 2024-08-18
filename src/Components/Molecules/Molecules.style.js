import styled from "styled-components";

export const NavbarStyle = styled.div`
    .navbar-section{
        /* background-color: red; */
        margin: 0;
        padding: 0;
        /* box-shadow: 0 2px 4px rgba(33, 51, 67, 0.048); */
        border-bottom: 0.3px solid #4848480d;
        height: 90px;
    }
    .navbar{
        display: grid;
        grid-template-columns: 10% 55% 35%;
        width: 75%;
        margin: auto;
        padding: 1.2% 0;
        align-items: center;
    }
    .logo-section{
    display: flex;
    align-items: center;
   }
   .logo-section svg{
    width: 50px;
    aspect-ratio: 1/1;
   }

   .navbar .logo-section img{
    width: 240px;
   }
   .button-section p{
    display: flex;
    align-items: center;
    float: right;
   }
   .button-section p svg{
    width: 40px;
    padding: 0;
    margin: 0;
   }
   .button-section p h6 svg{
    width: 15px;
    height: 15px;
    margin-left: -5px;
   }
   .button-section p h6{
    margin: 0;
    font-size: 1.3rem;
    margin-left: 3%;
   }
   .logo-section h1{
    font-size: 2.2rem;
    color: black;
    font-weight: 700;
   }
   .logo-section h1 b{
    color: #1E65EF;
    /* padding: 2px; */
    font-weight: 700;
    margin: 1px;
    border-radius: 2px;
   }
   .menu-section ul{
    list-style: none;
    display: flex;
   }
   .menu-section ul li{
    margin-left: 4%;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
   }
   .menu-section ul li a{
    color: black;
    text-decoration: none;
   }
   .button-section{
    cursor: pointer;
   }
   .button-section button{
    float: right;
    margin-left: 4%;
    padding: 3% 6%;
    font-size: 1rem;
    color: white;
    /* border: 1px solid #6000F9; */
    border: none;
    background-color: #1E65EF;
    border-radius: 3px;
    font-weight: 500;
    transition: 1s ease;
    cursor: pointer;
   }
   .button-section button:hover{
    color: white;
    background-color: #6000F9;
   }
   .button-section button:hover a{
    color: white;
   }
   .button-section button a{
    color: #6000F9;
    text-decoration: none;
    font-weight: 1000;
    font-family:  'DM Sans', sans-serif;
   }
   .burger{
    display: none;
   }
   .response-bar{
    /* display: none; */
    position: fixed;
    z-index: 10;
    
   }
   .burger-cut{
    display: none;
   }
   .response-bar{
    left: -100%;
   }
   @media screen and (max-width:1600px) {
    .navbar{
    grid-template-columns: 17% 63% 20%;
    height: 70px;
   }
}
   @media screen and (max-width:1000px) {
    .menu-section ul{
        display: none;
        margin: 0;
        padding: 0;
    }
    .navbar .logo-section img{
    width:180px;
    padding: 10% 0;
   }
    .response-bar ul li{
        list-style: none;
        margin-left: 8%;
        padding: 0;
    }
    .navbar{
        width: 90%;
        border-bottom: 0.3px solid #4848480d;
    }
    .navbar-section .button-section{
        
        display: none;
    }
    .navbar .logo-section a img{
        padding: 5%;
    }
    .logo-section h3{
        font-size: 1.4rem;
    }
    .burger{
        display: block;
        transition: 1s ease;
        position: relative;
    }
    .burger-icon.remove{
        display: none;
    }
    .burger-cut{
        display: none;
        position: relative;
    }
    .burger-cut.cuticon{
        display: block;
    }
    .burger.remove{
        display: none;
    }
    .burger svg{
        width: 30px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .burger-cut svg{
        width: 30px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .burger button{
        background-color: white;
        border: none;
    }
    .burger-cut button{
        background-color: white;
        border: none;
    }
    .response-bar{
        background-color: white;
        position: fixed;
        top: 80px;
        left: -100%;
        backdrop-filter: blur(4px);
    background-color: #0000001a;
        width: 100%;
        height: 100%;
        transition: 0.4s ease;
        display: grid;
        /* grid-template-columns: 60% 40%; */
    }
    .bar-section{
        width: 60%;
        background-color: white;
    }
    .response-bar.open{
        left: 0;
    }
    .response-bar .logo-section{
        margin-left: 6%;
        margin-bottom: 6%;
    }
    .response-bar ul li{
        margin-bottom: 9%;
        margin-top: 9%;
    }
    .response-bar ul li a{
        color: black;
        text-decoration: none;
    }
    .response-bar .button-section button{
        float: none;
        margin-left: 0;
        margin-bottom: 3%;
    }
    .response-bar .button-section{
        float: none;
        display: flex;
        flex-direction: column;
        margin: 2% 8%;
    }
    .response-bar .button-section{
        width: 70%;
    }
    .response-bar .button-section button{
        /* float: right; */
    /* margin-left: 4%; */
    padding: 4% 6%;
    font-size: 1rem;
    color: #1E65EF;
    border: 1px solid #1E65EF;
    /* border: none; */
    background-color: transparent;
    border-radius: 3px;
    font-weight: 500;
    transition: 1s ease;
    cursor: pointer;
    }
    .button-section button:hover a{
    color: #6000F9;
   }
    .response-bar .button-section button a{
        font-size: 0.9rem;
    }
    .response-bar .logo-section{
        display: flex;
        justify-content: space-between;
        width: 85%;
    }
    .response-bar .logo-section img{
        width: 180px;
        margin-top: 5%;
    }  

   }
`;