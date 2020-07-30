import React from 'react';

/*
import ButtonFactory from '../../infra/factory/ButtonFactory';
import DateUtils from '../../infra/utils/DateUtils';
import ObjectUtils from '../../infra/utils/ObjectUtils';*/

export default function View( props ) {
/*
    var curCol = undefined;
    var nxtCol = undefined;
    var pageX = undefined;
    var nxtColWidth = undefined;
    var curColWidth = undefined;    

    var columnTitle = [];
    var fieldFilter = [];

    const propList = props.specView.svOProps;
    
    function addColsTitle() {

        let pv = undefined;

        for ( let i = 0; i <= propList.length -1; i++ ) {

            pv = propList[i];

            if ( pv.dataType === 'number' ) {

                columnTitle.push(
                    <th 
                        id="col-grid-title-number" 
                        className="col-grid-title-number"
                        key={pv.name}>
                        {pv.label}
                        <div id="columnSelector" onMouseDown={handleMouseDown}/>
                    </th>
                );     

                fieldFilter.push (
                    <th id="col-grid-filter" key={`filter-${pv.name}`}>
                        <div>
                            <input
                                id="input-grid-filter-number" 
                                className="input-grid-filter-number" 
                                type="number"
                                name={pv.name} 
                                onChange={props.onFilter} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Buscar"
                                autoComplete="off"
                            />
                        </div>
                    </th>     
                );     

            } else if ( pv.dataType == 'boolean' ) {

                columnTitle.push(
                    <th 
                        id="col-grid-title-checked" 
                        className="col-grid-title-checked" 
                        key={pv.name}>
                        {pv.label}
                        <div id="columnSelector" onMouseDown={handleMouseDown}/>
                    </th>
                );      

                fieldFilter.push (
                    <th 
                        id="col-grid-filter" 
                        className="col-grid-filter" 
                        key={`filter-${pv.name}`}>
                        <div>
                           
                            <input 
                                id="check-grid-filter" 
                                className="check-grid-filter"
                                type="checkbox"
                                name={pv.name} 
                                onChange={props.onFilter} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Buscar"
                                autoComplete="off"
                            />                
                        </div>
                    </th>     
                );  

            } else if ( pv.dataType === 'datetime' ) {

                columnTitle.push(
                    <th 
                        id="col-grid-title-date" 
                        className="col-grid-title-date"
                        key={pv.name}>
                        {pv.label}
                        <div 
                            id="columnSelector" 
                            className="columnSelector" 
                            onMouseDown={handleMouseDown}/>
                    </th>
                );     
                
                fieldFilter.push (
                    <th id="col-grid-filter" key={`filter-${pv.name}`}>
                        <div>
                            <input 
                                id="input-grid-filter-date" 
                                className="input-grid-filter-date" 
                                name={pv.name} 
                                onKeyPress={handleKeyPress} 
                                onChange={props.onFilter} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Buscar"
                                autoComplete="off"
                            />
                        </div>
                    </th>     
                );  

            } else if ( pv.dataType === 'date' ) {

                columnTitle.push(
                    <th 
                        id="col-grid-title-date" 
                        className="col-grid-title-date"
                        key={pv.name}>
                        {pv.label}
                        <div id="columnSelector" onMouseDown={handleMouseDown}/>
                    </th>
                );     
                
                fieldFilter.push (
                    <th id="col-grid-filter" key={`filter-${pv.name}`}>
                        <div>
                            <input 
                                id="input-grid-filter" 
                                className="input-grid-filter" 
                                name={pv.name} 
                                onKeyPress={handleKeyPress} 
                                onChange={props.onFilter} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Buscar"
                                autoComplete="off"
                            />
                        </div>
                    </th>     
                );  

            } else if ( pv.dataType === 'object' ) { 

                columnTitle.push(
                    <th id="col-grid-title-object" key={pv.name}>
                        {pv.label}
                        <div id="columnSelector" onMouseDown={handleMouseDown}/>
                    </th>
                );                   
            
            } else {

                columnTitle.push(
                    <th 
                        id="col-grid-title" 
                        className="col-grid-title"
                        key={pv.name}>
                        {pv.label}
                        <div id="columnSelector" onMouseDown={handleMouseDown}/>
                    </th>
                );     

                fieldFilter.push (
                    <th id="col-grid-filter" key={`filter-${pv.name}`}>
                        <div>
                            <input
                                id="input-grid-filter" 
                                className="input-grid-filter" 
                                name={pv.name} 
                                onChange={props.onFilter} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Buscar"
                                autoComplete="off"
                            />
                        </div>
                    </th>     
                );                    
            }

        }    

        columnTitle.push( <th id="col-grid-title-btn" className="col-grid-title-btn" key="actions">Ações</th> );

    }    


    function addColumnData(data) {

        let pv = undefined;
        let cols = [];

        for ( let i = 0; i <= propList.length -1; i++ ) {

            pv = propList[i];

            const value = ObjectUtils.getPropertyValue( data, pv.name );

            if ( pv.dataType === 'number') {

                cols.push( 
                    <td 
                        id="col-grid-dat-number" 
                        className="col-grid-data-number"
                        key={`${i}`} >
                        { value }
                    </td>
                );    

            } else if ( pv.dataType === 'boolean' ) {

                const descBoolean = value === true ? 'Ativo' : 'Inativo';

                cols.push(
                    <td 
                        id="col-grid-data-checked" 
                        className="col-grid-data-checked"                        
                        key={`${i}`}  >
                        {/*<input 
                            type="checkbox" 
                            checked={ value }
                            disabled={true}
                        />}
                        <span
                            style={{
                                    backgroundColor:"#3e884f", 
                                    color:"#fff", 
                                    fontSize:"9.5px",
                                    fontWeight: "bold",
                                    fontFamily:"sans-serif",
                                    padding: "5px",
                                    paddingLeft: "12px",
                                    paddingRight: "12px",
                                    borderRadius:"12px"
                                }}
                        >
                            { descBoolean }
                        </span> 
                        

                    </td>                     

                );   

            } else if ( pv.dataType === 'datetime' ) {
              
                cols.push( 
                    <td 
                        id="col-grid-data-date" 
                        className="col-grid-data-date"
                        key={`${i}`}>
                        { DateUtils.formatDateTime( value ) }
                    </td>                    
                );

            } else if ( pv.dataType === 'date' ) {
              
                cols.push( 
                    <td 
                        id="col-grid-data-date" 
                        className="col-grid-data-date"
                        key={`${i}`}>
                        { DateUtils.formatDateTime( value ) }
                    </td>                    
                );

            } else if ( pv.dataType === 'object' ) {

                cols.push( 
                    <td id="col-grid-data" 
                        className="col-grid-data" 
                        key={`${i}`} >
                        { 'Show object not implemented...' }
                    </td>
                );
         

            } else {

                cols.push( 
                    <td 
                        id="col-grid-data" 
                        className="col-grid-data"
                        key={`${i}`} >
                        { value }
                    </td>
                );    
            }

        }

        return cols;
                
    }  


    function handleMouseDown(e) {

        curCol = e.target.parentElement;
        nxtCol = curCol.nextElementSibling;
        pageX = e.pageX;
        curColWidth = curCol.offsetWidth;
        
        if ( nxtCol ) {
            nxtColWidth = nxtCol.offsetWidth;        
        }

    }    

    function handleMouseMove(e) {    

        if (curCol) {
            var diffX = e.pageX - pageX;
          
            if (nxtCol)
                nxtCol.style.width = (nxtColWidth - (diffX))+'px';
         
            curCol.style.width = (curColWidth + diffX)+'px';
        }        

    }

    function handleMouseUp(e) {
        curCol = undefined;
        nxtCol = undefined;
        pageX = undefined;
        nxtColWidth = undefined;
        curColWidth = undefined;
    }    

    function handleClickRow(e) {
        if ( props.onRowClick ) {
            props.onRowClick(e);
        }
    }

    function handleDblClickRow(e, item) {
       // if ( props.onDblClickRow ) {
      //      props.onDblClickRow(item);
      //  }
    }

    function handleKeyPress(e) {

        e.persist();    
        
        if ( e.charCode === 32 ) return true; // space
        
        var theEvent = e || window.event;
        var key = theEvent.keyCode || theEvent.which;
        
        key = String.fromCharCode( key );   
        var regex = /^[0-9:/]+$/;

        if ( !regex.test( key ) ) {

            theEvent.returnValue = false;

            if (theEvent.preventDefault) theEvent.preventDefault();
        }        

    }

    addColsTitle();
    
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

    );*/
}

/*
function createEditButton( event, eventParam ) {

    if ( event )
        return ButtonFactory( 'small', 'grid-button-edit', () => event( eventParam ), 'edit' );
    else
        return undefined;

}

function createDeleteButton( event, eventParam ) {

    if( event )
        return ButtonFactory( 'small', 'grid-button-remove', () => event( eventParam ), 'delete' );
    else
        return undefined;    
        
}
*/
