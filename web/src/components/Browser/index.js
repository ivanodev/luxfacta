import React, { useState, useEffect, useRef, useCallback } from 'react';
import DataGrid from '../DataGrid';
import { get } from '../../service/api';
import ObjectUtils from '../../utils/ObjectUtils';
import { withRouter } from 'react-router-dom';

function Browser( props ) {

    const { urn, keyProp, specView } = props;
    const [ data, setData ] = useState([]);

    const customActions = useRef( props.customActions );
    const specColumns = useRef([]);

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

        fetchData ();

    }, [urn] );


    const setupActions = useCallback( () => {

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

    }, [customActions]);


    const setupColumns = useCallback( () => {

        const svOProps = specView.svOProps;

        const createSpecColumn = ( name, title, dataType, idData = '', idTitle = '' ) => {
            return { 
                name: name, 
                title: title,
                dataType: dataType,
                idData: idData,
                idTitle: idTitle 
            };
        }

        for ( let i = 0; i < svOProps.length; i++) {
    
            const prop = svOProps[ i ];
            const specColumn = createSpecColumn( prop.name, prop.label, prop.dataType );
            
            specColumns.current.push( specColumn );
    
        }

    },[specView.svOProps]);


    useEffect( () => {

        setupColumns();
        setupActions();
        

    },[setupColumns,setupActions]);



    const handleClickEdit = ( event, item ) => {

        const id = ObjectUtils.getPropertyValue( item, keyProp );

        props.history.push(`/${urn}/${id}`);

    }


    const handleClickDelete = ( event, item ) => {

        const id = ObjectUtils.getPropertyValue( item, keyProp );

        alert( id );

    }
    
   
    return (
        <form>
            <DataGrid 
                data={data}
                keyProp={keyProp}
                specColumns={specColumns.current}
                actions={actions}
            />
        </form>
    )

}

export default withRouter( Browser );