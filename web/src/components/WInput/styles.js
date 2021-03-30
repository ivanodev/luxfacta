import styled from 'styled-components';

export const InputContent = styled.div`
    width: 100%;
    height: 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const InputLabelContent = styled.div`
    width: 100%;
    height: 2.2rem; //2.0
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`
export const InputLabel = styled.label`
    width: 100%;
    height: 100%;

    color: var(--input-color-label);
    font-weight: normal;
    font-size: 1.4rem;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-right: 0.6rem;

    white-space: nowrap;
    overflow: auto;

    margin-left: 0.2rem;
    z-index: 9;
    pointer-events: none;
    transition: 200ms ease all;
`; 

export const InputData = styled.input`
    display: flex;
    width: 100%;
    height: 3.8rem; //3.5
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    align-items: center;
    text-align: left;

    border : solid 0.1rem var(--input-color-border);
    border-radius : var(--input-radius);

    background-color: var(--input-color-background); 

    color: var(--input-color);
    font-weight: normal;
    font-size: 1.4rem;
    font-family: var(--input-font-family);

    transition: width 0.4s ease-in-out;  
    //box-shadow: inset 0 0 0.2em var(--input-color-box-shadow);
    
    :focus-within {
        border-color: var(--input-color-border-focus);  
        background: #fbfbfb;
        box-shadow: inset 0 1px 1px #00000013, 0 0 4px #66afe999;
        border-width: 1.5px;
    };

    :hover {
        --input-color-border: var(--input-border-color-hover);
        //box-shadow: 0 0 0 0.1rem var(--input-outline-focus);
    }

`; 
