import React from 'react';

import './theme/bootstrap.scss';

import MainHeader from './components/MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import EditObject from './pages/object/EditObject';
import DataLoader from './infra/DataLoader';
import WField from './components/WField';
import WInput from './components/WInput';

export default function App() {

	return (
		<DataLoader endPoint='/actor/1'>
			<WField entry={'actor.person.fullName'} label={'Razão Social'}>
				<WInput 
					//onChange={onChange} 
					//value={WObjectUtils.getPropertyValue(data, entry)} 
				/>
			</WField>
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