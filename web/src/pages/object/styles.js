import styled from 'styled-components';

export const ObjectView = styled.div`
    width : 100vw;
    height: 100vh;
    background-color : red;

    padding: 1.0rem;
    
    display : flex;
    align-items : center;
    justify-content : center;
` 

export const ObjectContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
` 

export const Layout = styled.div`
    width : 100%;
    height: auto;
    background-color : ${ props => `${props.color}` };
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    grid-column-gap : 2rem;
    grid-row-gap : 2rem;
` 

export const ObjectLayout = styled.div`
    width : 100%;
    height: 100%;
    background-color : ${ props => `${props.color}` };
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    grid-auto-rows: 6rem;
    grid-column-gap: 2rem;
` 

export const Input = styled.input`
    width : 100%;
    height: 3.5rem;
    padding-left : 0.8rem;
    background-color : #fff;
` 