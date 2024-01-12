import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/pexels-markus-spiske-1089438.jpg';
/* Background photo by Markus Spiske */

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Space Mono', monospace;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, white);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    -moz-background-clip: text;
    -moz-text-fill-color: white;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: white;
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 10px;
    height: 100px;
    width: 300px;
    padding: 0 40px;
    font-size: 25px;
  }
  .start {
    max-width: 200px;
  }
`;