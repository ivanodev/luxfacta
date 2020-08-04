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

    const rowDataFactory = item => {

        let specColumn = undefined;
        let cols = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            specColumn = specColumns[i];

            const value = ObjectUtils.getPropertyValue( item, specColumn.name );

            /* 
                verifica os tipos de dados 
                para definir o className e id diferentes
                para atribuir diferente formatação
                no css e especifidades de cada tipo de valor
            */

            if ( specColumn.dataType === 'number' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } else if (  specColumn.dataType === 'string' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } else if (  specColumn.dataType === 'datetime' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            }  else if (  specColumn.dataType === 'date' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } 
            
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
                            { rowDataFactory( item ) } 

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