import React from 'react';
import { GetImage16 } from '../../image/image16';


export default function Button ( props ) {


    return(
        <button>

        </button>
    );


}

export function ButtonFactory ( sizeType, className, onClick, iconName, title, buttonType = "button" ) {

    let element = null;

    if ( sizeType === 'small' ) {

        if ( buttonType === submit ) {

            element = ( 
                <>
                    <button 
                        id={className}                         
                        type={buttonType}
                        title={title}
                    >                        
                        <img src={GetImage24(iconName)} alt="" />                        
                    </button>    
                </>          
            );

        } else {

            element = ( 
                <button 
                    id={className} 
                    type="button" 
                    onClick={( event ) => executeHandle( onClick, event )}
                    title={title}
                >
                    <img src={GetImage16(iconName)} alt=""/>
                </button>
            );  


        }
    }

    return element;

}