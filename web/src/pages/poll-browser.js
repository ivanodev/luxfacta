import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import api from '../service/api'; 

import './styles.scss';


function PollBrowser( props ) {

    return (
        <h1>
            Poll
        </h1>
    )

}

export default withRouter(PollBrowser);