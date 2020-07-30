import React, { useEffect, useState } from 'react';
//import MainHeader from './components/MainHeader';

//import './theme/bootstrap.scss';
//import { BrowserRouter } from 'react-router-dom';
//import Routes from './routes/routes';
import { api } from './service/api';
import DataGrid from './components/DataGrid';

export default function App() {

	const [ list, setList ] = useState([]);

	const [ hiddenButton, setHiddenButton ] = useState(false);

	useEffect( () => {

		const fetchData = async () => {

			const response = await api.get( "/poll" );

			let data = [];

			for ( let i = 0; i < response.data.length; i++) {

				const element = response.data[i];

				data.push({ 
					id : element.poll_id,
					description : element.poll_description,
					active : true
				})
				
			}

			setList( data );

		}

		fetchData();


	}, [] );


	// O parametro item, se refere ao item(objeto) da selecionada
	// Veja que passei o item como parametro na chamada deste método
	// no evento onClick do checked na linha do suposto grid que montei.
	const handleChecked = ( e, item ) => {
		
		
		let newList = list.slice();

		const index = newList.indexOf( item );
		newList[index].active = e.target.checked;
		setList( newList );

		// neste momendo sua tela será estará atualizaada
		// escondendo ou mostrando botoes e tera o objeto 
		// da linha seleciona para seu modal

		alert( `${item.id} - ${item.description} - ${item.active}` )
		
	}


	return (
		<DataGrid />
	)

	/*

	return (

		<div>
			{
				list.map( item => (
					<div key={item.id}>
						<span>
							{ item.id }
						</span>
						<span>
							{ " - " }
						</span>
						<span>
							{ item.description }
						</span>
						<input 
							type="checkbox" 
							checked={item.active} 
							onChange={(e)=>{ handleChecked(e, item)}} >
						</input>
						<input hidden={!item.active} >
						</input>
						<input hidden={!item.active} >
						</input>

					</div>
				))
			}
		</div>

	)

	*/


	/*
    return (
		<div>
			<MainHeader />  
			<BrowserRouter>
				<Routes /> 
			</BrowserRouter>
		</div>
    )
	*/
}