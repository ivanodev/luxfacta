import React from 'react';
import './styles.scss';

export default function WImage( props ) {

    const { pathImage } = props;

    return (

        <img src={pathImage} alt="" />

    );

}