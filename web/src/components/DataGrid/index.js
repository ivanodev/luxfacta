import React from 'react';

export default function DataGrid ( props ) {

    const { data, keyField, specColumns } = props;

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
                        
                        <tr key={item[keyField]}> 
                            { dataFactory( item ) } 
                        </tr>   
                                
                    ))
                }
                </tbody>
            </table>
        </div>


    )

}