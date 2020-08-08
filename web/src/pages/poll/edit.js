import React from 'react';
import Edit from '../../components/Edit';
import { SpecViewLayout, LayoutType } from '../../infra/specview/SpecViewLayout';
import { SpecViewPoll, SpecViewOptions } from './specview';

function PollEdit ( props ) {

    let layoutPoll = new SpecViewLayout( SpecViewPoll );
    layoutPoll.layoutType = LayoutType.DUPLE;

    let layoutOptions = new SpecViewLayout( SpecViewOptions );
    layoutOptions.layoutType = LayoutType.DUPLE;

    let layouts = [];
    layouts.push( layoutPoll );
    layouts.push( layoutOptions );

    return (

        <Edit 
            urn={'poll'}
            keyProp={'poll_id'}  
            layouts={layouts} 
            layoutType={LayoutType.DUPLE}
        />        
    )

}

export default PollEdit;