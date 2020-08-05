import React from 'react';
import { LayoutType, SpecViewLayout } from '../../infra/specview/SpecViewLayout';
import Input from '../Input';

export default function ObjectView ( props ) {

    const { specViewLayout, dataObject } = props; 
    let cmps = [];

    if ( ( specViewLayout instanceof SpecViewLayout ) === false ) {
        throw new Error( 
            `The Edit visualization component waits to receive an instance of the SpecViewLayout class and received ${specViewLayout}` );
    } 


    let title = specViewLayout.title;    
    let templateColumns = '';

    switch ( specViewLayout.layoutType ) {

        case LayoutType.SINGLE    : templateColumns = '1fr'
        break;

        case LayoutType.DUPLE     : templateColumns = '1fr 1fr'
        break;

        case LayoutType.TRIPLE    : templateColumns = '1fr 1fr 1fr'
        break;

        case LayoutType.QUADRUPLE : templateColumns = '1fr 1fr 1fr 1fr'
        break;
        
        default : templateColumns = '1fr'
        break;

    }


    const drawCmp = ( svProp, data, index ) => {

        switch ( svProp.dataType ) {

            case 'string':  
                return <Input spec={svProp} data={data} />

            case 'number':  
                return <Input spec={svProp} data={data} />    

            default: 
                break;

        }

    }


    if ( specViewLayout.specDTV ) {

        const specDTV = specViewLayout.specDTV;
        const svProps = specDTV.svOProps; 

        for ( let i = 0 ; i < svProps.length; i++ ) {

            const svProp = svProps[ i ];

            console.log( dataObject )

            const cmp = drawCmp( svProp, dataObject, i );

            cmps.push( cmp );  
            
        }

    }


    return (

        <div>
            { cmps }
        </div>

    );

}



