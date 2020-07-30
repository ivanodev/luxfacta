import React, { useEffect } from 'react';


export default function DataGrid ( props ) {

    
    let list = [
        { id : 1, description : 'iPhone' },
        { id : 2, description : 'MacBook' },
        { id : 2, description : 'iPad' },
    ]

    let propList = [
        { name : "id", label : 'Código' },
        { name : "description", label : 'Descrição' }
    ]


    const columnHeadingFactory = () => {

        let pv = undefined;
        let columnHeading = [];

        for ( let i = 0; i <= propList.length -1; i++ ) {

            pv = propList[i];           

            columnHeading.push(
                <th 
                    key={pv.name}>
                    {pv.label}
                </th>
            );     

        } 
        
        return columnHeading;
        
    }

    const columnDataFactory = data => {

        let pv = undefined;
        let cols = [];

        for ( let i = 0; i <= propList.length -1; i++ ) {

            pv = propList[i];

            //const value = ObjectUtils.getPropertyValue( data, pv.name );
            const value = data[ pv.name ];

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
                { 
                    list.map( item => (
                        
                        <tr key={item._id}> 
                            { columnDataFactory( item ) } 
                        </tr>   
                                
                    ))
                }
                </tbody>
            </table>
        </div>


    )

}

/*


return (
          
    <div id="base" className="common-grid-base" >
        <table id="common-grid-table" className="common-grid-table" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}> 
            <thead>  
                {
                    <tr id="row-grid-title" className="row-grid-title" >
                        {columnTitle}
                    </tr>
                }
                {
                    props.showFilter && 
                    <tr className="row-grid-filter">{fieldFilter}</tr>
                }
            </thead>                           
            <tbody id="body-grid">
            { 
                props.list.map( item => (
                    
                    <tr key={item._id}  
                        id="row-grid-data"   
                        className="row-grid-data"                              
                        onClick={(e, item)=>handleClickRow(e, item)} 
                        onDoubleClick={(e, item)=>handleDblClickRow(e, item)} > 

                        { addColumnData( item ) } 
                    
                        <td id="col-grid-btn" className="col-grid-btn">
                            <div id="grid-buttons">
                                { createEditButton( props.onRowEdit, item ) }
                                { createDeleteButton( props.onRowDelete, item ) }
                            </div>
                        </td>
                    </tr>   
                            
                ))
            }
            </tbody>   
        </table>
    </div>

);





*/