import React, { useRef } from 'react';
import { ButtonFactory } from '../Button';
import ObjectUtils from '../../utils/ObjectUtils';

export default function DataGrid ( props ) {
    

    const { data, keyProp, specColumns, actions } = props;
    const selectedRowData = useRef();

    const selectRowData = ( rowData ) => {

        selectedRowData.current = rowData;

    }

    const columnHeadingFactory = () => {

        let specColumn = undefined;
        let columnHeading = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            specColumn = specColumns[i];           

            columnHeading.push(
                <th 
                    key={specColumn.name}>
                    {specColumn.title}
                </th>
            );     

        } 
        
        return columnHeading;
        
    }

    const dataFactory = item => {

        let specColumn = undefined;
        let cols = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            specColumn = specColumns[i];

            const value = ObjectUtils.getPropertyValue( item, specColumn.name );

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

    const createBtnAction = ( handler, className, iconName, param ) => {

        if ( handler )
            return ButtonFactory( 'small', className, () => handler( handler, param ), iconName );
        else
            return undefined;
    
    }

    return (

        <div>
          
            <table>
                <thead>
                    <tr>
                        { columnHeadingFactory() }
                        { actions && <th key="actions">Ações</th> }
                    </tr>
                </thead>
                <tbody>
                { data &&
                    data.map( item => (
                        
                        <tr key={item[ keyProp ] }
                            onClick={ ( e )=>handleRowClick( e, item )}
                        > 
                            { dataFactory( item ) } 

                            <td>
                                <div>
                                    { actions &&
                                        actions.map( action => (

                                            createBtnAction( action.handler, action.className, action.iconName, item )

                                        ))
                                    }
                                </div>
                            </td>

                        </tr>             
                    ))
                }
                </tbody>
            </table>
        </div>


    )

}