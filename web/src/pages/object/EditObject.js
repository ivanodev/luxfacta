import React, { useEffect, useState } from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { Layout } from './styles';
import { LayoutTitle } from './styles';
import { LayoutContent } from './styles';
import { ObjectLayout } from './styles';
import { Input } from './styles';
import { ObjectEditor } from './styles';
import { ObjectEditorHeader } from './styles';

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

    return (
            <ObjectEditor>
                <ObjectEditorHeader>
                    <label>
                        Cliente
                    </label>
                </ObjectEditorHeader>
                    <ObjectView>
                        <ObjectContent>
                                <LayoutContent columns={2} color="red" >
                                    <Layout>
                                        <LayoutTitle>
                                            <label>Dados Pessoais</label>
                                            <hr/>
                                        </LayoutTitle>
                                        <ObjectLayout columns={1} color="white" >  
                                            { data && 
                                                <>
                                                    <Input
                                                        value={data.person.fullName}
                                                    />
                                                    <Input
                                                        value={data.person.federalDoc}
                                                    />
                                                    <Input 
                                                        value={data.person.stateDoc}
                                                    />
                                                </>
                                            }
                                        </ObjectLayout>
                                    </Layout>
                                    <Layout>
                                        <LayoutTitle>
                                            <label>Dados</label>
                                            <hr/>
                                        </LayoutTitle>
                                        <ObjectLayout columns={1} color="white" >   
                                            <>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            </>
                                        </ObjectLayout>
                                    </Layout>
                                </LayoutContent>
                          
                                <LayoutContent columns={1} color="red" >
                                    <Layout>
                                        <LayoutTitle>
                                            <label>Dados Pessoais</label>
                                            <hr/>
                                        </LayoutTitle>
                                        <ObjectLayout columns={2} color="white" >   
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                            <Input>
                                            </Input>
                                        </ObjectLayout>
                                    </Layout>
                                </LayoutContent>
                           
                        </ObjectContent>
                    </ObjectView>
            </ObjectEditor>
    )



}

export default EditObject;