import React from 'react';

import './theme/bootstrap.scss';

import MainHeader from './components/MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import EditObject from './pages/object/EditObject';
import DataLoader from './infra/DataLoader';
import WField from './components/WField';

export default function App() {

	return (
		<DataLoader endPoint='/actor/1'>
			<WField entry={'actor.person.fullName'} />
		</DataLoader>
	)

	/*
	return (
		<div>
			<EditObject />
		</div>
	)
	//*/
	
/*
	return (
		<div>
			<MainHeader />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);*/

		
	
}