import React, { useState, useEffect, useRef } from 'react';
import DataGrid from '../DataGrid';
import { get } from '../../service/api';

export default function Browser( props ){

    const { urn, keyProp, specColumns } = props;
    const [ data, setData ] = useState([]);

    const customActions = useRef( props.customActions );
    
    const [ actions, setActions ] = useState(undefined);

	useEffect( () => {

		const fetchData = async () => {

            const response = await get( urn );
       
			let data = [];

			if ( response ) {
				data = response.data;
			}

			setData( data );

		}

        fetchData();

    }, [urn] );


    useEffect( () => {

        const actions = [ 
            { handler: handleClickEdit, className : "", iconName: "edit" },
            { handler: handleClickDelete, className : "", iconName: "delete" }
        ];

        if ( customActions ) {

            for ( let i = 0; i < customActions.current.length; i++) {

                const customAction = customActions.current[ i ];

                actions.push( customAction );

            }

        }

        setActions( actions );


    },[]);


    const handleClickEdit = ( event, item ) => {

        alert( "edit" );

    }

    const handleClickDelete = ( event, item ) => {

        alert( "delete" );

    }
   

    return (
        <div>
            <DataGrid 
                data={data}
                keyProp={keyProp}
                specColumns={specColumns}
                actions={actions}
            />
        </div>
    )


}