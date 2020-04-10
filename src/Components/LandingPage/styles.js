import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Nunito Sans',sans-serif;



    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: flex-end;

    }
    `;
   

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
    height: 100%;
    @media (max-width: 1024px) {
      width: 100%
    }
`;

export const WrapperImg = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-self: flex-end;
    @media (max-width: 1024px) {
      justify-content: center;
    }

`;

export const Header = styled.h1` 
    font-family: 'Nunito Sans',sans-serif;
    margin-left: 100px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 6em;
    color: white;
    text-shadow: -1px 1px 2px #000,
				  1px 1px 2px #000,
				  1px -1px 0 #000,
          -1px -1px 0 #000;
    letter-spacing: 2px;
    @media (max-width: 375px) {
      font-size: 4em;
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 0px;
    }
    @media (max-width: 1640px) {
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 0px;
    }
    @media (max-width: 1024px) {
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 0px;
    }
`;

export const SubHead = styled.h1` 
    font-family: 'Nunito Sans',sans-serif;
    margin: 0 0 0 100px;
    text-align: center;
    letter-spacing: 2px;
    font-size: 4em;

    @media (max-width: 1640px) {
      font-size: 3em;
    }

    @media (max-width: 1024px) {
      font-size: 3em;
      margin-left: 0px;
      text-align: center;
    }
`;

export const Image = styled.img`
    width: auto;
    height: 125%;
    align-self: flex-end;

    @media (max-width: 1024px) {
      width: 70%;
      height: 100%;
    }

    @media (max-width: 375px) {
      width: 100%;
      height: auto;
    }

    `;
     
