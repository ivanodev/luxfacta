import styled from 'styled-components';

export const ObjectEditor = styled.div`
    width : 100vw;
    height: 100vh;
`;

export const ObjectEditorHeader = styled.div`
    
    width : 100%;
    height : 4rem;

    display : flex;
    align-items : center;
    justify-content : flex-end;

    label {
        font : 700 2rem Archivo;
        margin-right : 0.8rem;
        
    }
`;

export const ObjectView = styled.div`
    width : 100vw;
    height: 100vh;
    background-color : red;

    padding: 1.0rem;
    
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const ObjectContent = styled.div`
    width: 100%;
    height: 100%;
`; 

export const Layout = styled.div`
    width: 100%;
    height : auto;
    
    display : flex;
    flex-direction : column;

    padding : 0.8rem;
    background-color: black;
`;

export const LayoutContent = styled.div`
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
`; 

export const LayoutTitle = styled.header`
    position: relative;
    display: flexbox;
    justify-content: flex-start;
    align-items: center;
    width: 100%;    
    height: 4.5rem;
    background-color: green;

    label {
        font-weight: normal;    
        font-size: 1.7rem;
        color:#303030;
        height: 100%; 
        text-align: center;
        margin-left : 2rem;
    }

    hr {
        background-color: #fff;
        position: relative;
        background-color: linear-gradient(169.9deg, #d7d8da, transparent);
        border: 0;
        height: 1rem;
        left: 15rem;    
        top: 11rem;
    }
`;

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
`; 

export const Input = styled.input`
    width : 100%;
    height: 3.5rem;
    padding-left : 0.8rem;
    background-color : #fff;
`; 