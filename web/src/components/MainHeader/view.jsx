import React from 'react';
import './styles.scss';

export default function View() {

    return (
        
        <div className="main-header-content">
            <header className="main-header" id="wmain-header" >
                <div className="title-header">
                    {'Winkel - WMS'}
                </div>
                <div className="title-user">
                    <div className='title-user-name'>{'Ivano Carvalho'}</div>
                    <div className='title-user-email'>{'ivano.sistemas@gmail.com'}</div>
                </div>
            </header>   
        </div>
        
    );

}
