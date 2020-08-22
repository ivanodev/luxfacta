import React, { useEffect, useState } from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { Layout } from './styles';
import { ObjectLayout } from './styles';
import { Input } from './styles';

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
                <ObjectView id="edit-object">
                    <ObjectContent>
                        <Layout columns={2} color="red" >
                            <ObjectLayout columns={2} color="yellow" >  
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
                            <ObjectLayout columns={1} color="green" >   
                                <Input>
                                </Input>
                                <Input>
                                </Input>
                                <Input>
                                </Input>
                            </ObjectLayout>
                        </Layout>
                        <Layout columns={1} color="red" >
                            <ObjectLayout columns={2} color="green" >   
                                <Input>
                                </Input>
                                <Input>
                                </Input>
                                <Input>
                                </Input>
                            </ObjectLayout>
                        </Layout>
                    </ObjectContent>
                </ObjectView>
    )



}

export default EditObject;