import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  font-size: 1rem;
  position: relative;
  padding: 1rem;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  padding-top: 0;
  border-bottom: 1px solid #696969;
  margin-bottom: 1.5rem;
`;

export const FormTitle = styled.span`
  flex: 1;
  font-size: 2.3em;
  font-family: 'Open Sans', sans-serif;
  color: var(--color-gray-42);
  white-space: pre-line;
  letter-spacing: 0.1px;
  //line-height: 1.25rem;
`

export const FormContent = styled.div`
  overflow: hidden;
  flex: 1;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const FormEdit = styled.a`
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.1px;
  color: #212121;
  cursor: pointer;
  position: relative;
  margin-left: auto;

  :hover {
      text-decoration: underline;
  }
`

/*
.c-detail__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 .5rem;
    margin-top: 2rem;
}
*/