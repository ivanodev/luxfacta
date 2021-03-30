import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

export const FieldContent = styled.div`
  width: 100%;
`;

export const FieldLabelContent = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FieldLabel = styled.label`
    display: block;
    width: 100%;

    letter-spacing: .1px;

    color: var(--input-color-label);
    font-weight: normal;
    font-size: 1.4rem;

    margin-left: 0.2rem;
`;