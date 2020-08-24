import React, { useEffect, useState } from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { Layout } from './styles';
import { LayoutTitle } from './styles';
import { LayoutContent } from './styles';
import { ObjectLayout } from './styles';
import { Input, InputData, InputLabel } from './styles';
import { ObjectEditor } from './styles';
import { ObjectEditorHeader } from './styles';
import { ToolBarContainer, ToolBarButtons } from './styles';
import { ObjectList, ObjectListMain, ObjectListDetail, ObjectListToolBar, ObjectListContent } from './styles';

import saveIcon from '../../image/24/save.png';
import backIcon from '../../image/24/back.png';
import { ButtonFactory } from '../../components/Button';
import { findObjectIndex } from '../../utils/ArrayUtils';
import ObjectUtils from '../../utils/ObjectUtils';

function EditObject( props ) {

    const [ dataObject, setDataObject ] = useState(null);

    useEffect( () => {

        const fecth = async () => {

            setDataObject({
                _id  : 0,
                actorType : ['company', 'customer', 'supplier', 'user'],
                person : {
                    fullName : 'Ivano Carvalho',
                    federalDoc : '28731415814',
                    stateDoc: '3013167604',
                    cityDoc: '',
                    phone : {
                       residencial : '33334444',
                       celular: '',
                       comercial : ''     
                    },
                    addresses : [
                        { address : 'Rua Monsenhor Januario' },
                        { address : 'Rua Monsenhor Januario' },
                        { address : 'Rua Firminopolis 1002' },
                        { address : 'Rua Monsenhor Januario' }
                    ]
                }

            });

        }

        fecth();

    }, []);

    const handleClickBack = event => {

       

    }

    const handleClickSave = event => {

       console.log( dataObject );

    }

    /**
     * Updates the state of the object being used in the component.
     * @param {*} e - HTML DOM Events
     * @param {*} currentObject - Current object that has changed
     */



    const updateState = ( e, currentObject ) => {

        try {

            const value = normalizeValue( e.target );
            const path = e.target.id;

            let newDataObject = Object.assign( {}, currentObject );

            ObjectUtils.setPropertyValue( newDataObject, e.target.id, value );

            setDataObject( newDataObject );

        } catch ( err ) {

            throw err;

        }

    }

    const handleChange = ( e ) => {

        updateState( e, dataObject );

    }

    return (
            <ObjectEditor>
                <ObjectEditorHeader>
                    <label>
                        Cliente
                    </label>
                </ObjectEditorHeader>
                <ToolBarContainer>
                    <ToolBarButtons>                    
                    {
                        createBtnAction( handleClickBack, '', 'arrow-back', null )
                    }               
                    {
                        createBtnAction( handleClickSave, '', 'save', null )
                    }
                    </ToolBarButtons>
                </ToolBarContainer>
                <ObjectView>
                    <ObjectContent>
                        <LayoutContent columns={2}>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2}>  
                                    { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                    onChange={(e)=>handleChange(e)}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.phone.residencial" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                    onChange={(e)=>handleChange(e )}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={1}>   
                                { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                        </LayoutContent>
                    
                        <LayoutContent columns={1} >
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2} color="white" >   
                                { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                            <Layout>
                                <LayoutTitle>
                                    <label>Endereços</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={1} color="white" > 
                                    { dataObject &&
                                        <>
                                            <ObjectList>
                                                <ObjectListToolBar>
                                                </ObjectListToolBar>
                                                <ObjectListContent>
                                                    <ObjectListMain>

                                                    </ObjectListMain>
                                                    <ObjectListDetail>

                                                    </ObjectListDetail>
                                                </ObjectListContent>
                                            </ObjectList>
                                        </>
                                    }
                                </ObjectLayout>

                            </Layout>
                        </LayoutContent>   
                    </ObjectContent>
                </ObjectView>
            </ObjectEditor>
    )



}

export default EditObject;


const createBtnAction = ( handler, className, iconName, param ) => {

    if ( handler )
        return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
    else
        return undefined;

}

const normalizeValue = ( field ) => {

    var value = null;
   
    switch ( field.type ) {

        case 'number':

            value = field.value;

            if ( Number.isInteger( value ) ) {

                value = parseInt( value, 0 );

            } else {

                value = parseFloat( value );

            }

            break;

        case 'checkbox':
            value = field.checked;
            break;
        default:
            value = field.value;
            break;

    }

    return value;

}

const getPaths = ( field ) => {

    const id = field.id;

    if ( id.length === 0 ) {
        throw new Error( 
            'HTML element without id. It will not be possible to update the state of this property. ' 
        );
    }

    return id.split( '.' ); 

}