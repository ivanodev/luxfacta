import React from 'react';
import Edit from '../../components/Edit';
import { SpecViewLayout, LayoutType } from '../../infra/specview/SpecViewLayout';
import { SpecViewPoll } from './specview';

function PollEdit ( props ) {

    let layoutPoll = new SpecViewLayout( SpecViewPoll );
    layoutPoll.layoutType = LayoutType.DUPLE;


    let layouts = [];
    layouts.push( layoutPoll );

    return (

        <Edit 
            urn={'poll'}
            keyProp={'poll_id'}  
            layouts={layouts} 
        />        
    )

}

export default PollEdit;