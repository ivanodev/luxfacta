import React, { useState } from 'react';
import { FieldContainer, FieldContent, FieldLabel, FieldLabelContent } from './style';
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
	const [ children ] = useState(props.children);

	let  inherited = props.inherited;

	const handleChange = ( event ) => {

		let newValue = undefined; 

		if ( data ) {

			if ( event && event.target ) {
				newValue = event.target.value;
			}

			const newData = Object.assign({}, data);
			WObjectUtils.setPropertyValue( newData, entry, newValue );
			setData(newData);

			console.log(newValue);

		}

	}

	const onBlur = ( event ) => {

	}

	const onKeyUp = ( event ) => {

	}

	const renderChildren = () => {

		if ( data ) {

			inherited = {
				...inherited,
				value: WObjectUtils.getPropertyValue(data, entry),
				entry: entry,
				onChange: handleChange,
				onBlur: onBlur,
				onKeyUp: onKeyUp
			}
			
			return React.Children.map(children, (child, i) => {
				return React.cloneElement(child, { inherited : inherited } );
			});

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
				{renderChildren()} 
			</FieldContent>
		</FieldContainer>
	);

}