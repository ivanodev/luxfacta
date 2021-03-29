import React, { useState } from 'react';

export default function WField(props) {

    /*
    alwaysShowLabel
    data
    hideLabel
    label
    visible
    visibilyFormState
    width
    required
    */



    console.log( props)

    const [ dataGrid, setData ] = useState(props.data);
    const [ inherited ] = useState(props.inherited);
    const [ newData, setNewData ] = useState(undefined);

    function handleClick(){
        

        if ( dataGrid ) {
            const newData = Object.assign({}, dataGrid);
            newData.person.fullName = 'Ivano Carvalho';
            setData( newData );
        }

        inherited.onChange();
        setNewData( newData );

    }

    return(
        <div>
            {/*<div>{dataGrid.person.fullName}</div>
            <button onClick={()=>handleClick()}></button>
            { newData &&
              <div>{newData.person.fullName}</div>
            */}
        </div>
    );

}