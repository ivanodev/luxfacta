import React, { useState } from 'react';
import ObjectUtils from '../../utils/ObjectUtils';
import ObjectView from '../ObjectView';

export default function ObjectListView ( props )  {

    const { dataList, specViewLayout } = props;

    const [ selectedItem, setSelectedItem ] = useState(dataList[0]);

    const handleRowClick = ( e, item ) => {

        setSelectedItem( item ); 

    }

    return (
        <>
            <div 
                //wlist={ JSON.stringify(dataList) }
                type={"object-list"}
                title={ specViewLayout.title }

            >
                <div className="wlayout-header_object-grid-li" >
                    <label className="wlayout-header-title-object-grid-li">{ specViewLayout.title }</label> 
                    {<hr/>}
                </div>                            
                <div className="group-li">
                    {   /*editable &&
                        <div className="wbutton-bar-li">
                            { createNewButton(  handleCreate ) }
                            { createDeleteButton( handleSelectToDelete ) }
                        </div>*/
                    }
                    <div id="base-li">
                        <table id="common-grid-li">                     
                            <tbody id="body-grid-li">
                            { dataList.map( item => (

                                <tr id="row-grid-data-li" 
                                    className="row-grid-data-li"
                                    key={1} 
                                    value={item}                                  
                                    onClick={ (e) => handleRowClick( e, item ) } 
                                    >                                        
                                    <td id="col-grid-data-li">
                                        { ObjectUtils.getPropertyValue( item, 'option_description' ) }
                                    </td>                                                         
                                </tr>                                          
                            ))}
                            </tbody>   
                        </table>
                    </div>   
                    <div id="view-object-li" > 
                        <ObjectView
                            specViewLayout={specViewLayout} 
                            dataObject={selectedItem}
                        /> 
                    </div>
                </div>

            </div>
        </>      
    )

}