import React, { useRef } from 'react';

export default function DataGrid ( props ) {

    const { data, keyProp, specColumns } = props;
    const selectedRowData = useRef();

    const selectRowData = ( rowData ) => {

        selectedRowData.current = rowData;

    }

    const columnHeadingFactory = () => {

        let pv = undefined;
        let columnHeading = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            pv = specColumns[i];           

            columnHeading.push(
                <th 
                    key={pv.name}>
                    {pv.title}
                </th>
            );     

        } 
        
        return columnHeading;
        
    }

    const dataFactory = item => {

        let pv = undefined;
        let cols = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            pv = specColumns[i];

            //const value = ObjectUtils.getPropertyValue( data, pv.name );
            const value = item[ pv.name ];

            cols.push( 
                <td 
                    key={`${i}`} >
                    { value }
                </td>
            );   
        } 

        return cols;

    }

    const handleRowClick = ( e, item ) => {

        selectRowData( item );

    } 

    return (

        <div>
          
            <table>
                <thead>
                    <tr>
                        { columnHeadingFactory() }
                    </tr>
                </thead>
                <tbody>
                { data &&
                    data.map( item => (
                        
                        <tr key={item[ keyProp ] }
                            onClick={ ( e )=>handleRowClick( e, item )}
                        > 
                            { dataFactory( item ) } 
                        </tr>             
                    ))
                }
                </tbody>
            </table>
        </div>


    )

}