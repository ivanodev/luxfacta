import React from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { ObjectLayout } from './styles';

function EditObject( props ) {

    return (
        <ObjectView id="edit-object">
            <ObjectContent>
               <ObjectLayout>
                   <h1>
                       tee
                   </h1>
               </ObjectLayout>
            </ObjectContent>
        </ObjectView>
    )



}

export default EditObject;