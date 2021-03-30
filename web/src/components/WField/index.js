import React, { useState } from 'react';
import { FieldContainer, FieldContent, FieldLabel, FieldLabelContent } from './style';
import WInput from '../WInput';
import WObjectUtils from '../../utils/WObjectUtils';

export default function WField(props) {

    /*
    alwaysShowLabel
    data
    hideLabel
    label
    visible
    visibilyFormState
    width
    required
    */

	const [ data, setData ] = useState(props.data);
	const [ entry ] = useState(props.entry);
	const [ label ] = useState(props.label);

	console.log(props)


	const [inherited] = useState(props.inherited);
	const [newData, setNewData] = useState(undefined);

	function handleClick() {

		if (data) {
			const newData = Object.assign({}, data);
			newData.person.fullName = 'Ivano Carvalho';
			setData(newData);
		}

		inherited.onChange();
		setNewData(newData);

	}

	const onChange = ( event ) => {

		let newValue = undefined; 

		if ( data ) {

			if ( event && event.target ) {
				newValue = event.target.value;
			}

			const newData = Object.assign({}, data);
			WObjectUtils.setPropertyValue( newData, entry, newValue );
			setData(newData);
		}

	}

	return(
		<FieldContainer>
			<FieldLabelContent>
				<FieldLabel htmlFor={label}>
					{label}
				</FieldLabel>
			</FieldLabelContent>
			<FieldContent>
				<WInput onChange={onChange} value={WObjectUtils.getPropertyValue(data, entry)} />
			</FieldContent>
			
				{/*<div>{dataGrid.person.fullName}</div>
				<button onClick={()=>handleClick()}></button>
				{ newData &&
					<div>{newData.person.fullName}</div>
				*/}
		</FieldContainer>
	);

}