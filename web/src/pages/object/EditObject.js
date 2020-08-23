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

import saveIcon from '../../image/24/save.png';
import backIcon from '../../image/24/back.png';
import { ButtonFactory } from '../../components/Button';

function EditObject( props ) {

    const [ data, setData ] = useState(null);

    useEffect( () => {

        const fecth = async () => {

            setData({
                _id  : 0,
                actorType : ['company', 'customer', 'supplier', 'user'],
                person : {
                    fullName : 'Ivano Carvalho',
                    federalDoc : '28731415814',
                    stateDoc: '3013167604',
                    cityDoc: '',
                    phone : {
                       residencial : '',
                       celular: '',
                       comercial : ''     
                    }
                }

            });

        }

        fecth();

    }, []);

    const handleClickNew = event => {

       

    }

    const handleClickRefresh = event => {

       

    }

    const updateState = () => {



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
                        createBtnAction( handleClickNew, '', 'arrow-back', null )
                    }               
                    {
                        createBtnAction( handleClickRefresh, '', 'save', null )
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
                                    { data && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={data.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={data.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={data.person.stateDoc}
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
                                { data && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={data.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={data.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={data.person.stateDoc}
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
                                { data && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={data.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={data.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={data.person.stateDoc}
                                                />
                                            </Input>
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