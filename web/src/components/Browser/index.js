import React, { useState, useEffect } from 'react';
import DataGrid from '../DataGrid';
import { get } from '../../service/api';

export default function Browser( props ){

    const { urn, keyField, specColumns } = props;
    const [ data, setData ] = useState([]);

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
    

    return (
        <div>
            <DataGrid 
                data={data}
                keyField={keyField}
                specColumns={specColumns}
            />
        </div>
    )


}