import React, { useEffect } from 'react';
import { GetLogo } from '../../image/logo';

import './styles.scss';

export default function MainHeader ( props ) {

    useEffect( () => {

        const mainHeader = document.getElementById( 'main-header' );
       
        if ( props.visible ) {
            mainHeader.style.height = "60px!important";
        } else {
            mainHeader.style.height = "0px!important";
        }
        
    }, [] );   

    return (
        <>
            <header id="main-header">
            
                <div className="main-menu-logo-app">
                    <span>POLL</span>
                </div>
                    
                <div className="user-logged">
                    <div className="user-logged-name">
                        <p>Sarah Morita</p>
                        <p>Admin</p>
                    </div>
                    <div className="user-logged-picture">
                        <img src="https://randomuser.me/api/portraits/women/60.jpg" />
                    </div>
                </div>

            </header>
        </>
    );

}