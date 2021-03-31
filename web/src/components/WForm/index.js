import React from 'react';

import { FormContainer, FormEdit, FormHeader, FormTitle } from './styles';

export default function WForm( props ) {

    
    return (
        <FormContainer>
          <FormHeader>
            <FormTitle>Title Form</FormTitle>
            <FormEdit>Editar</FormEdit>
          </FormHeader>
        </FormContainer>
    );

}