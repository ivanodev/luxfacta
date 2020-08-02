import React from 'react';
//import { withRouter } from 'react-router-dom';
import Browser from '../components/Browser';


//import './styles.scss';


function PollBrowser( props ) {

    let specColumns = [];

    const createSpecColumn = ( name, title, dataType, idData = '', idTitle = '' ) => {
        return { name: name, title: title, dataType: dataType, idData: idData, idTitle: idTitle };
    }

    specColumns.push( createSpecColumn( 'poll_id', 'ID', 'number' ) );
    specColumns.push( createSpecColumn( 'poll_description', 'Enquete', 'string' ) );

    const handleClick = ( e, item ) => {

        alert('eu');
        console.log( item );

    }

    const actions = [ 
        { handler: handleClick, className : "", iconName: "edit" },
        { handler: handleClick, className : "", iconName: "apply" }
    ];

    return (

            <Browser 
                urn='poll' 
                title='Enquete' 
                keyProp={'poll_id'} 
                specColumns={specColumns}
                actions={actions}
            />

    );

}

export default PollBrowser;// withRouter(PollBrowser);