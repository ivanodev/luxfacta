import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { get } from '../../service/api';
import { SpecViewType } from '../../infra/specview/SpecView';
import ObjecView from '../../components/ObjectView';
import ObjectListView from '../ObjectListView';
import ObjectUtils from '../../utils/ObjectUtils';

function Edit( props ) {

    const { urn, layouts, layoutType } = props; 
    const { id } = props.match.params; 
    const [ data, setData ] = useState(undefined);

 
    useEffect( () => {

        const fetch = async () => {

            const response = await get( `${urn}/${id}`);

            if ( response ) {

                setData( response.data );

            }

        }

        fetch();

    }, [ urn, id ] );


    const mountView = () => {

        if ( !data ) return

        let views = [];

        for ( let i = 0; i < layouts.length; i++ ) {

            const specLayout = layouts[ i ];

            if ( specLayout.specDTV ) {

                const specViewType = specLayout.specDTV.specViewType;

                switch ( specViewType ) {

                    case SpecViewType.OBJECT :

                        views.push( 
                            <ObjecView 
                                key={i} 
                                dataObject={data} 
                                specViewLayout={specLayout} 
                            /> 
                        );
                        
                        break;

                    case SpecViewType.LIST :

                        const specDTV = specLayout.specDTV;

                        const dataList = ObjectUtils.getPropertyValue( data, specDTV.path );

                         console.log( ' list ', dataList )

                        views.push (
                            <ObjectListView
                                key={i}
                                dataList={dataList} 
                                specViewLayout={specLayout} 
                            />

                        );

                    break;
                
                    default:
                        break;
                }


            }

        }

        return views;

    }

    const views = mountView();

    return (

        <div>
            { views }
        </div>

    )

} 

export default withRouter( Edit );