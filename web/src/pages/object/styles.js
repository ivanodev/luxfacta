import styled from 'styled-components';

export const ObjectEditor = styled.div`
    width : 100%;
    height: 100%;
    background-color : #faf8f9;
`;

export const ObjectEditorHeader = styled.div`
    width : 100%;
    height : 4rem;

    display : flex;
    align-items : center;
    justify-content : flex-end;

    background-color: #06aeaa; 

    label {
        font : 700 2rem poppins;
        margin-right : 1rem;
    }
`;

export const ObjectView = styled.div`
    width : 100vw;
    height: auto;
    
    display : flex;
    align-items : start;
    justify-content : center;

    padding : 1rem;
`;

export const ObjectContent = styled.div`
    width: 100%;
    height: 100%;
    background-color : #fff;
`; 

export const Layout = styled.div`
    width: 100%;
    height : auto;
    
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;

    padding : 0.4rem;
`;

//${ props => `${props.color}` };

export const LayoutContent = styled.div`
    width : 100%;
    height: auto;
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    grid-column-gap : 0.5rem;
    grid-row-gap : 0.5rem;
`; 

export const LayoutTitle = styled.header`

    width: 100%;    
    height: 2.5rem;

    display: flexbox;
    justify-content: flex-start;
    align-items: center;

    background-color : #fff;

    padding-left : 2rem;

    label {
        font-weight: bold;    
        font-size: 1.7rem;
        color:#303030;
        height: 100%; 
        text-align: center;
    }

    hr {
        background-color: #fff;
        position: relative;
        background-image: linear-gradient(169.9deg, #d7d8da, transparent);
        border: 0;
        height: 0.1rem;
        left: 1.5rem;    
        top: 1.1rem;
    }
`;

export const ObjectLayout = styled.div`
    width : 100%;
    height: 100%;
    background-color : #fff;
    
    display : grid;
    grid-template-columns : repeat( ${props => `${ props.columns }` }, 1fr );
  
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    grid-auto-rows: 6rem;
    grid-column-gap: 1rem;
`; 

export const Input = styled.div`
    width : 100%;
    height: 3.5rem;
    display : flex;
    align-items : center;
    justify-content : flex-start;
`;

export const InputLabel = styled.label`
    width: 35%;
    height: 3.5rem;
    color : #000;

    display: flex;
    align-items: center;
    justify-content : flex-end;
    padding-right : 0.6rem;

    white-space: nowrap;
    overflow: auto;
`; 

export const InputData = styled.input`
    width : 65%;
    height: 3.5rem;
    padding-left : 0.8rem;
    padding-right : 0.8rem;
   
    border : solid 0.1rem #ced4da;
    border-radius : 0.4rem;
    
    background-color: #ffffff; 
    
    color:#495057;
  
    text-shadow: #f0c3bfad 0.0em 0.0em 0.1em;
    transition: width 0.4s ease-in-out;  
    box-shadow: inset 0 0 0.2em #ddd;

    :focus {
        border-color:#66afe999;  
        background: #fbfbfb;
        box-shadow: inset 0 1px 1px #00000013, 0 0 4px #66afe999;
        border-width: 1.5px;
    }
`; 