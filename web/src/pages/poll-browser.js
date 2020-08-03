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

        alert('action customized');

    }

    const actions = [ 
        { handler: handleClick, className : "", iconName: "list" }
    ];


    return (
        <Browser 
            urn='poll' 
            title='Enquete' 
            keyProp={'poll_id'} 
            specColumns={specColumns}
            customActions={actions}
        />
    );

}

export default PollBrowser;// withRouter(PollBrowser);