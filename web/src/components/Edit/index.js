import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { get } from '../../service/api';

function Edit( props ) {

    const { urn } = props; 
    const { id } = props.match.params; 

    const [ data, setData ] = useState(undefined);
 
    useEffect( () => {

        const fetch = async () => {

            const response = await get( `${urn}/${id}`);

            if ( response ) {

                setData( response.data );

            }

        }

        fetch();

    }, [urn, id]);


    return (

        <div>
           {JSON.stringify(data)}
        </div>

    )

} 

export default withRouter( Edit );